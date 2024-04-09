import { useRef } from "react";

type PropList = {
  i: string;
  boxToRight: boolean;
  lightmode: boolean;
};

const CheckBox = ({ i, boxToRight, lightmode }: PropList) => {
  const input = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    if (input.current?.id === "- Check All -") {
      let allBoxes: NodeListOf<HTMLInputElement> =
        document.querySelectorAll(".CheckBox");

      if (input.current.checked) {
        allBoxes.forEach((box) => {
          box.checked = true;
        });
      } else {
        allBoxes.forEach((box) => {
          box.checked = false;
        });
      }
    }
  };
  return (
    <>
      <label
        className={`CheckBoxLable ${boxToRight && "box-right"} ${
          lightmode && "lightmode"
        }`}
        htmlFor={i}
      >
        <input
          ref={input}
          onChange={handleChange}
          className="CheckBox"
          type="checkbox"
          name={i}
          id={i}
        />
        <span className="checkmark-box"></span>
        {i}
      </label>
    </>
  );
};

export default CheckBox;
