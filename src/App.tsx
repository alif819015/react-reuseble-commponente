import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
         {/* <button className="btn btn-secandary">Click</button> */}
     <div className="w-96 py-20 px-10 border border-purple-950">
     <Button></Button>
     </div>
      </div>
    </Container>
  );
}

export default App;
