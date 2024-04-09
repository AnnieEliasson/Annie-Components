
type PropList = {
  i: string;
  boxToRight: boolean;
  lightmode: boolean;
};

const CheckBox = ({ i, boxToRight, lightmode }: PropList) => {


  return (
    <>
      <label className={`CheckBoxLable ${boxToRight && "box-right"} ${lightmode && "lightmode"}`} htmlFor={i}>
        <input className="CheckBox" type="checkbox" name={i} id={i} />
        <span className="checkmark-box"></span>
        {i}
      </label>
    </>
  );
};

export default CheckBox;
