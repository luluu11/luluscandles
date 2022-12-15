import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    console.log(items);
    return (
        
<div className="col-md-4" key={item.id}>
    {
        items.map(item =>
        <Item item={item}/>
    )
}
</div>
    )
}

export default ItemList;