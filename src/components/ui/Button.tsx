import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

// `bg-red-500 px-3 py-2 rounded-md ${className} ${
//     variant == "outline" ? "border border-purple-900" : ""
//   }`

type TRef = HTMLButtonElement;
type TVariant = "solid" | "outline" | "gost";
type TButtonOption = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOption;

const Button = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", children, ...rest }, ref) => {
    const getVeriant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "gost":
          return "btn-gost";

        default:
          return "btn-solid";
      }
    };

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(getVeriant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
