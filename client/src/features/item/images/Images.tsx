import classes from "./Images.module.css";
import { useState } from "react";
import { ImagesProps } from "../itemTypes";
import { v4 as uuidv4 } from "uuid";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Hint from "../../../common/hint/Hint";
import Button from "../../../common/button/Button";

export default function Images({
   itemProp,
   onAddImageClick,
   onDeleteImageClick,
}: ImagesProps) {
   const [images, setImages] = useState("");

   const onSaveImagesClick = () => {
      if (images.length === 0) return;
      onAddImageClick(itemProp.id, images.split(", "));
   };

   return (
      <div className={classes.images}>
         <div className={classes.header}>Images</div>
         <div className={classes.grid}>
            {itemProp.images &&
               itemProp.images.map((image) => (
                  <div className={classes.imageWrapper} key={uuidv4()}>
                     <img
                        src={image}
                        alt="item image"
                        className={classes.image}
                     />
                     <div
                        className={classes.deleteImage}
                        onClick={() => onDeleteImageClick(itemProp.id, image)}
                     >
                        <HighlightOffIcon className={classes.deleteIcon} />
                     </div>
                  </div>
               ))}
         </div>
         <Hint text={"Right click to save or view a full size image."} />
         <div className={classes.column}>
            {itemProp.images &&
               itemProp.images.map((image, idx) => (
                  <span className={classes.imageLink} key={uuidv4()}>
                     <span className={classes.imageIdx}>{`[${idx + 1}]`}</span>
                     {image}
                  </span>
               ))}
         </div>
         <div className={classes.row}>
            <input
               className={classes.imageInput}
               onChange={(e) => setImages(e.target.value)}
               type="text"
               placeholder="Paste image link here"
            />
            <Button onClick={() => onSaveImagesClick()}>Save Images</Button>
         </div>
      </div>
   );
}
