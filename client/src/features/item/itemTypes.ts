export type Note = {
   id: string;
   note_id: number;
   note: string;
   tag_id: number;
   value: string;
};

export type SortBy =
   | "id"
   | "sku"
   | "title"
   | "category"
   | "brand"
   | "condition";

export interface ItemObj {
   id: string;
   sku: number;
   title: string;
   category: string | null;
   brand: string | null;
   location: string | "UNKNOWN";
   condition: string | "UNKNOWN";
   auction_price: string | null;
   retail_price: string | null;
   list_price: string | null;
   sale_price: string | null;
   sale_date: string | null;
   thumbnail: string;
   description: string;
   item_link: string;
   images: string[];
   notes: Note[];
}

export interface ItemAsProps {
   itemProp: ItemObj;
}

export interface ItemHeaderProps extends ItemAsProps {
   getItem: () => void;
}

export interface ItemProps {
   itemProp: ItemObj;
   getItem: () => void;
   updateItem: (itemState: ItemObj) => void;
   deleteImage: (id: string, image: string) => void;
   addImage: (id: string, imageArr: string[]) => void;
}

export interface EditProps {
   itemProp: ItemObj;
   handleChange: (objKey: string, value: string) => void;
   editState: boolean;
   toggleEditState: () => void;
   onCancelClick: () => void;
   onSaveChangesClick: () => void;
}

export interface NotesProps extends EditProps {
   onAddNoteClick: (id: string, note: string) => void;
   onDeleteNoteClick: (note_id: number) => void;
}

export interface ImagesProps {
   itemProp: ItemObj;
   onAddImageClick: (id: string, imageArr: string[]) => void;
   onDeleteImageClick: (id: string, image: string) => void;
}

export interface BadgeProps {
   color: "red" | "yellow" | "green" | "black" | "white" | "blue";
   text: string;
   icon:
      | "check"
      | "x"
      | "exclamation"
      | "category"
      | "label"
      | "description"
      | "note"
      | "downArrow"
      | "edit"
      | "id"
      | "circle";
}

export interface ToggleExpandProps {
   toggleExpand: () => void;
}

export interface UseGetItemProps {
   item: ItemObj;
   expandItem: boolean;
}
