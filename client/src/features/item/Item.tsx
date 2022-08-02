import classes from "./Item.module.css";
import ItemForm from "./form/ItemForm";
import ItemHeader from "./header/ItemHeader";
import Images from "./images/Images";
import { ItemObj, ItemProps } from "./itemTypes";
import { useState } from "react";
import Description from "./description/Description";

export default function Item({
   itemProp,
   getItem,
   updateItem,
   deleteImage,
   addImage,
}: ItemProps) {
   const [item, setItem] = useState<ItemObj>(itemProp);
   const [editState, setEditState] = useState(false);

   console.log(itemProp);

   const handleChange = (objKey: string, value: string | number): void => {
      setItem({ ...item, [objKey]: value });
   };

   const toggleEditState = () => {
      setEditState(!editState);
   };

   const onCancelClick = () => {
      setItem(itemProp);
      toggleEditState();
   };

   const onSaveChangesClick = () => {
      updateItem(item);
   };

   const onDeleteImageClick = (id: string, image: string) => {
      deleteImage(id, image);
   };

   const onAddImageClick = (id: string, imageArr: string[]) => {
      addImage(id, imageArr);
   };

   return (
      <div className={classes.item}>
         <div className={classes.headerWrapper}>
            <ItemHeader itemProp={itemProp} getItem={getItem} />
         </div>
         <div className={classes.subHeaderWrapper}>
            <div className={classes.sectionWrapper}>
               <ItemForm
                  itemProp={item}
                  handleChange={handleChange}
                  editState={editState}
                  toggleEditState={toggleEditState}
                  onCancelClick={onCancelClick}
                  onSaveChangesClick={onSaveChangesClick}
               />
            </div>
         </div>
         <div className={classes.imagesWrapper}>
            <Images
               itemProp={item}
               onAddImageClick={onAddImageClick}
               onDeleteImageClick={onDeleteImageClick}
            />
         </div>
         <div className={classes.notesWrapper}></div>
         <div className={classes.descriptionWrapper}>
            <Description
               itemProp={item}
               handleChange={handleChange}
               editState={editState}
               toggleEditState={toggleEditState}
               onCancelClick={onCancelClick}
               onSaveChangesClick={onSaveChangesClick}
            />
         </div>
      </div>
   );
}
