import { AiOutlineClose } from "react-icons/ai";

type PropList = {
    buttonPlacement: "left" | "center" | "right";
    title: string;
    text: string;
    buttonText: string;
    closeButton: boolean;
}

const Modal = ({buttonPlacement, title, text, buttonText, closeButton}: PropList) => {

    const handleClick = () => {
        const modalBox = document.querySelector(".ModalBox") as HTMLElement
        modalBox.classList.remove("show-box")
        const modal = document.querySelector(".Modal") as HTMLElement
        modal.classList.remove("show-modal")
    }

  return (
    
        <div className="Modal">
        <AiOutlineClose className='x-btn' onClick={handleClick} />
            <h3>{title}</h3>
            <p>{text}</p>

            <div className={buttonPlacement}>
            <button>{buttonText}</button>
            {closeButton? <button className="close" onClick={handleClick}>Close</button> : ""}
            </div>
        </div>
  )
}

export default Modal