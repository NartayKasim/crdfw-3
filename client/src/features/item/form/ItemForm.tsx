import classes from "./ItemForm.module.css";
import { EditProps } from "../itemTypes";
import Button from "../../../common/button/Button";
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";
import SaveIcon from "@mui/icons-material/Save";
import Hint from "../../../common/hint/Hint";

function Value({ value }: { value: string | number }) {
   return <span className={classes.value}>{value}</span>;
}

export default function ItemForm({
   itemProp,
   handleChange,
   editState,
   toggleEditState,
   onCancelClick,
   onSaveChangesClick,
}: EditProps) {
   return (
      <div className={classes.itemForm}>
         <div className={classes.header}>Details</div>

         <form className={classes.form}>
            <label className={classes.label}>
               ID
               <Value value={itemProp.id} />
            </label>
            <label className={classes.label}>
               SKU
               <Value value={itemProp.sku} />
            </label>
            <label className={classes.label}>
               title
               {editState ? (
                  <input
                     disabled={editState ? false : true}
                     className={classes.input}
                     type="text"
                     name="title"
                     value={itemProp.title}
                     onChange={(e) => handleChange("title", e.target.value)}
                  />
               ) : (
                  <Value value={itemProp.title} />
               )}
            </label>
            <label className={classes.label}>
               category
               {editState ? (
                  <input
                     disabled={editState ? false : true}
                     className={classes.input}
                     type="text"
                     name="category"
                     value={itemProp.category || ""}
                     onChange={(e) => handleChange("category", e.target.value)}
                  />
               ) : (
                  <Value value={itemProp.category || ""} />
               )}
            </label>

            <label className={classes.label}>
               brand
               {editState ? (
                  <input
                     disabled={editState ? false : true}
                     className={classes.input}
                     type="text"
                     name="brand"
                     value={itemProp.brand || ""}
                     onChange={(e) => handleChange("brand", e.target.value)}
                  />
               ) : (
                  <Value value={itemProp.brand || ""} />
               )}
            </label>

            <label className={classes.label}>
               location
               {editState ? (
                  <input
                     disabled={editState ? false : true}
                     className={classes.input}
                     type="text"
                     name="location"
                     value={itemProp.location || ""}
                     onChange={(e) => handleChange("location", e.target.value)}
                  />
               ) : (
                  <Value value={itemProp.location || ""} />
               )}
            </label>

            <label className={classes.label}>
               condition
               {editState ? (
                  <input
                     disabled={editState ? false : true}
                     className={classes.input}
                     type="text"
                     name="condition"
                     value={itemProp.condition || ""}
                     onChange={(e) => handleChange("condition", e.target.value)}
                  />
               ) : (
                  <Value value={itemProp.condition || ""} />
               )}
            </label>

            <div className={classes.hintWrapper}>
               <Hint text="To edit the section above, click on 'Edit Item Details'" />
            </div>

            <div className={classes.buttons}>
               {!editState && (
                  <Button onClick={() => toggleEditState()}>
                     <EditIcon /> <span>Edit Item Details</span>
                  </Button>
               )}
               {editState && (
                  <Button onClick={() => onCancelClick()}>
                     <EditOffIcon /> <span>Cancel Edit</span>
                  </Button>
               )}
               {editState && (
                  <Button onClick={() => onSaveChangesClick()}>
                     <SaveIcon /> <span>Save Changes</span>
                  </Button>
               )}
            </div>
         </form>
      </div>
   );
}
