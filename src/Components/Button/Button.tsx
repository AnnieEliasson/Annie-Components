type PropList = {
    name: string;
    modal: boolean;
    setModal: any;
}

const Button = ({name, modal, setModal }: PropList) => {
  return (
    <button onClick={()=>{setModal(!modal)}} className="Button">
        {name}     
    </button>
  );
};

export default Button;
