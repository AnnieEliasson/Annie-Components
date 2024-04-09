import "./App.scss";
import CheckBoxes from "./Components/CheckBoxes/CheckBoxes";
import ItemScrollBar from "./Components/ItemScrollBar/ItemScrollBar";
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
      <h3>ItemScrollBar</h3>
      <ItemScrollBar items={["🍕", "🍔", "🍟", "🍗", "🍖", "🍝"]} />

      <h3>CheckBoxes</h3>

      <CheckBoxes
        items={["Testar", "Lite", "Checkboxes", "Testing", "Ninja Turtles"]}
        boxToRight={true}
        lightmode={false}
        checkAll={true}
      />

      <ModalBox
        buttonPlacement={"left"}
        title={"En rubrik av något slag"}
        text={"här kommer text, hej å hå, kämpa på!"}
        buttonText={"Tryck på knappen"}
        closeButton={true}
      />
      <button onClick={handleClickModal}>Modal</button>
    </>
  );
}

export default App;
