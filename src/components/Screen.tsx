import * as React from "react";

export interface IComponentsProp { value: string, onMousedown:any }
export const Screen = (props: IComponentsProp) => {

     return (
         <div className="top">
             <span className="clear" onMouseDown={() => props.onMousedown("c")}>C</span>
             <div className="screen">{props.value}</div>
         </div>
    );
}
