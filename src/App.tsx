// import { FormEvent, useState } from "react";
// import Button from "./components/ui/Button";
import NormalFrom from "./components/normalFrom/NormalFrom";
import Container from "./components/ui/Container";
// import Modal from "./components/ui/Modal";

function App() {
  //   const [modal, setModal] = useState(false);
  //   const handleModalClose = () => {
  //     setModal((prev) => !prev);
  //   };

  // const handleSubmit =(e:FormEvent)=>{
  //   e.preventDefault()
  // console.log('Click')
  // if(true){
  //   handleModalClose()
  // }
  // }

  return (
    <Container>
      {/* <div className="h-screen w-full flex justify-center items-center">
        <button className="btn btn-secandary">Click</button>
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h3>This is Modal Tatile</h3>
            <Modal.CloseButton />
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <button type="submit">Submit</button>
          </form>
        </Modal>
      </div> */}
      <NormalFrom />
    </Container>
  );
}

export default App;
