import classes from "./Description.module.css";
import { EditProps } from "../itemTypes";
import { RichTextEditor } from "@mantine/rte";
import parse from "html-react-parser";
import Button from "../../../common/button/Button";
import Hint from "../../../common/hint/Hint";

export default function Description({
   itemProp,
   handleChange,
   editState,
   toggleEditState,
   onCancelClick,
   onSaveChangesClick,
}: EditProps) {
   return (
      <div className={classes.description}>
         <div className={classes.header}>
            Description{" "}
            <div className={classes.buttonsTop}>
               {editState && (
                  <Button onClick={() => onSaveChangesClick()}>
                     Save Changes
                  </Button>
               )}
               {editState && (
                  <Button onClick={() => onCancelClick()}>Cancel Edit</Button>
               )}
               {!editState && (
                  <Button onClick={() => toggleEditState()}>
                     Edit Description
                  </Button>
               )}
            </div>
         </div>
         <div className={classes.hintWrapper}>
            <Hint text="To create or adjust description, click 'Edit Description'" />
         </div>
         {editState ? (
            <RichTextEditor
               classNames={{
                  toolbar: "mantine-RichTextEditor-toolbar",
                  root: "	.mantine-RichTextEditor-root",
               }}
               styles={{
                  toolbar: {
                     backgroundColor: "var(--cultured-2)",
                  },
                  root: {
                     backgroundColor: "var(--cultured-2)",
                     height: "60rem",
                     overflow: "scroll",
                     width: "100%",
                  },
               }}
               value={itemProp.description}
               onChange={(e) => handleChange("description", e)}
            />
         ) : (
            parse(itemProp.description)
         )}
         <div className={classes.buttonsBottom}>
            {editState && (
               <Button onClick={() => onSaveChangesClick()}>
                  Save Changes
               </Button>
            )}
            {editState && (
               <Button onClick={() => onCancelClick()}>Cancel Edit</Button>
            )}
            {!editState && (
               <Button onClick={() => toggleEditState()}>
                  Edit Description
               </Button>
            )}
         </div>
      </div>
   );
}
