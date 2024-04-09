import { useState } from "react";
import "./App.scss";
import CheckBoxes from "./Components/CheckBoxes/CheckBoxes";
import ItemScrollBar from "./Components/ItemScrollBar/ItemScrollBar";
import ModalBox from "./Components/Modal/ModalBox/ModalBox";



function App() {
  

  const [modal, setModal] = useState(false)

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
        modal={modal}
        setModal={setModal}
        buttonPlacement={"left"}
        title={"En rubrik av något slag"}
        text={"här kommer text, hej å hå, kämpa på!"}
        buttonText={"Tryck på knappen"}
        closeButton={true}
      />
      <button onClick={()=>{setModal(!modal)}}>Modal</button>
    </>
  );
}

export default App;
