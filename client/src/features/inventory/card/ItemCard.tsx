import classes from "./ItemCard.module.css";
import { ItemAsProps } from "../../item/itemTypes";
import { useNavigate } from "react-router";
import QuickLook from "../../item/quick-look/QuickLook";

export default function ItemCard({ itemProp }: ItemAsProps) {
   const navigate = useNavigate();

   const onItemCardClick = () => {
      window.open(
         `${process.env.REACT_APP_CLIENT_URL}/item/?id=${itemProp.id}`
      );
   };

   return (
      <div className={classes.itemCard} onClick={() => onItemCardClick()}>
         <div className={classes.column}>
            <div className={classes.itemCardInner}>
               <div className={classes.thumbnailWrapper}>
                  <img
                     src={itemProp.thumbnail}
                     alt="item thumbnail"
                     className={classes.thumbnail}
                  />
               </div>
               <div className={classes.column}>
                  <div className={classes.titleWrapper}>{itemProp.title}</div>
                  <div className={classes.quickLookWrapper}>
                     <QuickLook itemProp={itemProp} />
                  </div>
                  <div className={classes.valueWrapper}>
                     <span className={classes.valueKey}>ID:</span>
                     <span className={classes.value}>{itemProp.id}</span>
                  </div>
                  <div className={classes.valueWrapper}>
                     <span className={classes.valueKey}>SKU:</span>
                     <span className={classes.value}>{itemProp.sku}</span>
                  </div>
                  <div className={classes.valueWrapper}>
                     <span className={classes.valueKey}>Brand:</span>
                     <span className={classes.value}>{itemProp.brand}</span>
                  </div>
                  <div className={classes.valueWrapper}>
                     <span className={classes.valueKey}>Category:</span>
                     <span className={classes.value}>{itemProp.category}</span>
                  </div>
                  <div className={classes.valueWrapper}>
                     <span className={classes.valueKey}>Condition:</span>
                     <span className={classes.value}>{itemProp.condition}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
