import { createContext } from "react";
import cn from "../../utils/cn";
import { TForms } from "../../types";
export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);
export const Form = ({ children, onSubmit, double = false }: TForms) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "border border-gray-300 rounded-lg shadow-sm w-full mx-auto p-5",
          {
            "mx-w-7xl": double,
            "max-w-md": !double,
          }
        )}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
