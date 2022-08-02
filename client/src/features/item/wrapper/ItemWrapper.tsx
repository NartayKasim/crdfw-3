import { useState, useEffect } from "react";
import { ItemObj } from "../itemTypes";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../../common/loading/Loading";
import Item from "../Item";

export default function ItemWrapper() {
   const [itemState, setItemState] = useState<{
      status: "success" | "loading" | "error" | "init";
      item: ItemObj | null;
   }>({
      status: "init",
      item: null,
   });
   const [searchParams] = useSearchParams();
   const id = searchParams.get("id");

   const updateItem = async (newItem: ItemObj) => {
      setItemState({ ...itemState, status: "loading" });
      const response = await axios.put(`/api/inventory/item/update`, {
         item: newItem,
      });
      if (response.data) {
         setItemState({
            status: "success",
            item: response.data,
         });
      } else {
         setItemState({
            status: "error",
            item: itemState.item,
         });
      }
   };

   const getItem = async () => {
      setItemState({ ...itemState, status: "loading" });
      const response = await axios.get(`/api/inventory/item/id=${id}`);
      if (response.data)
         setItemState({
            status: "success",
            item: response.data,
         });
      else
         setItemState({
            status: "error",
            item: itemState.item,
         });
   };

   const deleteImage = async (id: string, image: string) => {
      setItemState({ ...itemState, status: "loading" });
      const response = await axios.put(`/api/inventory/item/deleteImage`, {
         id,
         image,
      });
      if (response.data) getItem();
   };

   const addImage = async (id: string, imageArr: string[]) => {
      setItemState({ ...itemState, status: "loading" });
      const response = await axios.post(`/api/inventory/item/addImage`, {
         id,
         imageArr,
      });
      if (response.data) getItem();
   };

   const createNote = async (id: string, note: string) => {
      return;
   };

   const deleteNote = async (id: string, note: string) => {
      return;
   };

   useEffect(() => {
      itemState.status === "init" && getItem();
   }, []);

   if (itemState.status === "error") return <h1>There was an error!</h1>;
   if (itemState.status === "success" && itemState.item) {
      return (
         <Item
            itemProp={itemState.item}
            getItem={getItem}
            updateItem={updateItem}
            deleteImage={deleteImage}
            addImage={addImage}
         />
      );
   } else return <Loading />;
}
