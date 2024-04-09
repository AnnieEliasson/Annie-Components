import { useEffect } from "react";
import Item from "./Item";

type PropList = {
  items: string[];
};

const ItemScrollBar = ({ items }: PropList) => {
  let count = 0;

  useEffect(() => {
    const allItems = document.querySelectorAll(".item-slot");
    allItems[count].classList.add("active");

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const SetActive = () => {
    const allItems = document.querySelectorAll(".item-slot");
    allItems.forEach((item) => {
      item.classList.remove("active");
    });
    allItems[count].classList.toggle("active");
  };

  const handleScroll = (e: any) => {
    if (e.deltaY > 0) {
      count = count - 1;

      if (count < 0) count = 0;

      SetActive();
    } else if (e.deltaY < 0) {
      count = count + 1;
      if (count >= items.length) count = items.length - 1;

      SetActive();
    }
  };

  return (
    <div className="ItemScrollBar">
      <ul>
        {items.map((item) => {
          return <Item key={items.indexOf(item)} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default ItemScrollBar;
