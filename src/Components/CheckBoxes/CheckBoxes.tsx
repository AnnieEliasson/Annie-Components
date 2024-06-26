import CheckBox from "./CheckBox/CheckBox";

type PropList = {
  items: string[];
  boxToRight: boolean;
  lightmode: boolean;
  checkAll: boolean;
};

const CheckBoxes = ({ items, boxToRight, lightmode, checkAll }: PropList) => {
  return (
    <div className="CheckBoxes">
      {checkAll && (
        <CheckBox i="- Check All -" boxToRight={true} lightmode={false} />
      )}

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
