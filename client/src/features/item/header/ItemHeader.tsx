import classes from "./ItemHeader.module.css";
import { ItemHeaderProps } from "../itemTypes";
import QuickLook from "../quick-look/QuickLook";
import Button from "../../../common/button/Button";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function ItemHeader({ itemProp, getItem }: ItemHeaderProps) {
   return (
      <div className={classes.itemHeader}>
         <div className={classes.spacer} />
         <div className={classes.innerPage}>
            <Button
               onClick={() => getItem()}
               style={{
                  color: "var(--slate-gray)",
                  width: "auto",
                  background: "none",
                  justifyContent: "flex-start",
                  padding: 0,
                  position: "absolute",
                  bottom: "1rem",
                  right: "3rem",
               }}
            >
               <RefreshIcon />
               Refresh
            </Button>
            <div className={classes.column}>
               <img
                  src={itemProp.thumbnail}
                  alt="item thumbnail"
                  className={classes.thumbnail}
               />
            </div>
            <div className={classes.column}>
               <div
                  className={classes.title}
                  onClick={() => window.open(itemProp.item_link)}
               >
                  {itemProp.title}
               </div>
               <QuickLook itemProp={itemProp} />
            </div>
         </div>
      </div>
   );
}
