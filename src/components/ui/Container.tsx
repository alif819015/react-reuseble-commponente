import { ReactNode } from "react";

const Container = ({children}:{children:ReactNode}) => {
    return (
        <div className="h-full w-full mx-w-[1250px] mx-auto">
           {children} 
        </div>
    );
};

export default Container;