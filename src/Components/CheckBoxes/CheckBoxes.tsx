import CheckBox from "./CheckBox/CheckBox";

type PropList = {
  items: string[];
  boxToRight: boolean;
  lightmode: boolean;
};

const CheckBoxes = ({ items, boxToRight, lightmode }: PropList) => {
  return (
    <div className="CheckBoxes">
      {items.map((i) => {
        return (
          <CheckBox
            key={i}
            i={i}
            boxToRight={boxToRight}
            lightmode={lightmode}
          />
        );
      })}
    </div>
  );
};

export default CheckBoxes;
