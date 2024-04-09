import Modal from "../Modal/Modal";

type PropList = {
  buttonPlacement: "left" | "center" | "right";
  title: string;
  text: string;
  buttonText: string;
  closeButton: boolean;
  modal: boolean;
  setModal: any;
};

const ModalBox = ({
  buttonPlacement,
  title,
  text,
  buttonText,
  closeButton,
  modal,
  setModal
}: PropList) => {
  return (
    modal && (
      <div className="ModalBox">
        <Modal
        setModal={setModal}
          buttonPlacement={buttonPlacement}
          title={title}
          text={text}
          buttonText={buttonText}
          closeButton={closeButton}
        />
      </div>
    )
  );
};

export default ModalBox;
