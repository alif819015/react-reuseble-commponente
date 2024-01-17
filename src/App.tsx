// import { FormEvent, useState } from "react";
// import Button from "./components/ui/Button";
// import NormalFrom from "./components/normalFrom/NormalFrom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/reusebleForm";
import Container from "./components/ui/Container";
import { z } from "zod";
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

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TTestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TTestSchema>

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
      {/* <NormalFrom /> */}
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <Input
            type="email"
            label="Email"
            register={register("email")}
            errors={errors}
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
