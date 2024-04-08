import "./App.scss";
import ModalBox from "./Components/Modal/ModalBox/ModalBox";

function App() {

  const handleClickModal = () => {
    const modalBox = document.querySelector(".ModalBox") as HTMLElement;
    const modal = document.querySelector(".Modal") as HTMLElement;
    modalBox.classList.add("show-box");
    modal.classList.add("show-modal");
  };

  return (
    <>
      <h1>hello</h1>

      <ModalBox
        buttonPlacement={"left"}
        title={"En rubrik av något slag"}
        text={"här kommer text, hej å hå, kämpa på!"}
        buttonText={"Tryck på knappen"}
        closeButton={false}
      />

      <button onClick={handleClickModal}>Modal</button>
    </>
  );
}

export default App;
