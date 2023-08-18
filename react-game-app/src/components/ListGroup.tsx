// import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item:string) => void 
}
export default function ListGroup({items, heading, onSelectItem }: Props) {
//   const items = ["kira", "L", "Guts", "Thors", "canute"];
  //   const handleClick = (event: MouseEvent)=>{
  //     console.log(event)
  //   }

  const [selectedIndex, setSelectedIndex] = useState(-1);
    
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
