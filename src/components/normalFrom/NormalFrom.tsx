import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { z } from "zod";
import {zodResolver} from '@hookform/resolvers/zod'

const SignUpSchema = z.object({
  name: z.string().min(1, {message: "Name is Requered"}),
  email: z.string().email().min(1, {message: "Email is Requered"}),
  password: z.string().min(8, "Your Password is to Short"),
});

const NormalFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:zodResolver(SignUpSchema)
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "border border-gray-300 rounded-lg shadow-sm w-full mx-auto p-5",
        {
          "mx-w-7xl": double,
          "max-w-md": !double,
        }
      )}
    >
      <div
        className={cn("grid grid-cols-1 justify-items-center gap-5", {
          "md:grid-cols-2": double,
        })}
      >
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
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="w-full"
            type="text"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="w-full"
            type="password"
            id="password"
            {...register("password", {minLength:8})}
          />
          {errors.password && (
            <span className="text-xs text-red-500">{errors.password.message}</span>
          )}
        </div>
        {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Password
          </label>
          <select name="" id="">
            <option value="">one</option>
            <option value="">two</option>
            <option value="">three</option>
            <option value="">fore</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Password
          </label>
          <textarea></textarea>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Password
          </label>
          <input className="" type="checkbox" {...register("name")} />
        </div> */}
      </div>
      <div
        className={cn("grid grid-cols-1 justify-items-center p-5 gap-5 my-4", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
          <Button className="w-full md:w-fit" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NormalFrom;
