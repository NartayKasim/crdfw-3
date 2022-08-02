import classes from "./QuickLook.module.css";
import { ItemAsProps } from "../itemTypes";
import Badge from "../badges/Badge";

export default function QuickLook({ itemProp }: ItemAsProps) {
   return (
      <div className={classes.quickLook}>
         {itemProp.description.length > 10 ? (
            <Badge
               color={"green"}
               text={"has description"}
               icon={"description"}
            />
         ) : (
            <Badge color={"red"} text={"no description"} icon={"x"} />
         )}
         {itemProp.thumbnail ? (
            <Badge color={"green"} text={"has images"} icon={"check"} />
         ) : (
            <Badge color={"red"} text={"no images"} icon={"x"} />
         )}
         {itemProp.brand ? (
            <Badge color={"green"} text={"has brand"} icon={"label"} />
         ) : (
            <Badge color={"red"} text={"no brand"} icon={"x"} />
         )}
         {itemProp.category ? (
            <Badge color={"green"} text={"has category"} icon={"category"} />
         ) : (
            <Badge color={"yellow"} text={"no category"} icon={"exclamation"} />
         )}
         {itemProp.list_price ? (
            <Badge color={"green"} text={"has list price"} icon={"check"} />
         ) : (
            <Badge color={"red"} text={"no list price"} icon={"x"} />
         )}
         {itemProp.sale_date ? (
            <Badge color={"red"} text={"sold"} icon={"check"} />
         ) : (
            <Badge color={"green"} text={"not sold"} icon={"circle"} />
         )}
      </div>
   );
}
