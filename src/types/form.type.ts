import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";



export type TForms = {
    children: ReactNode, 
    onSubmit:SubmitHandler<FieldValues>, 
    double?: boolean,
}