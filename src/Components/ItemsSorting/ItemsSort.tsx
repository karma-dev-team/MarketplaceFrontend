import { useState } from "react";
import "./ItemsSort.css"

interface SortableListItem {
  createdAt?: Date | null | undefined;
}

interface Props<T extends SortableListItem> {
    name: string, 
    items: T[];
    sortFunction: (a: T, b: T) => number;
}

const ItemsSortComponent = <T extends SortableListItem>({ items, sortFunction, name }: Props<T>) => {
    const [sortedItems, setSortedItems] = useState(items);
  
    const handleSort = () => {
      const sorted = [...sortedItems].sort(sortFunction);
      setSortedItems(sorted);
    };
  
    return (
      <div>
        <p className="sort-name" onClick={handleSort}>{name}</p>
      </div>
    );
  };
  
  export default ItemsSortComponent;