import Modal from "../Modal/Modal";

type PropList = {
  buttonPlacement: "left" | "center" | "right";
  title: string;
  text: string;
  buttonText: string;
  closeButton: boolean;
};

const ModalBox = ({
  buttonPlacement,
  title,
  text,
  buttonText,
  closeButton,
}: PropList) => {
  return (
    <div className="ModalBox">
      <Modal
        buttonPlacement={buttonPlacement}
        title={title}
        text={text}
        buttonText={buttonText}
        closeButton={closeButton}
      />
    </div>
  );
};

export default ModalBox;
