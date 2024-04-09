type PropList = {
  item: string;
};

const Item = ({ item }: PropList) => {
  return (
    <li className="item-slot">
      <div className="item">{item}</div>
    </li>
  );
};

export default Item;
