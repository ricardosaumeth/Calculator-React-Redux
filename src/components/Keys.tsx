import * as React from "react";

export interface IComponentsProps { onMouseDown: any}
export const Keys = (props: IComponentsProps) => {
    return (
        <div className="keys">
            <span onMouseDown={() => props.onMouseDown("7")}>7</span>
            <span onMouseDown={() => props.onMouseDown("8")}>8</span>
            <span onMouseDown={() => props.onMouseDown("9")}>9</span>
            <span className="operator" onMouseDown={() => props.onMouseDown("+")}>+</span>
            <span onMouseDown={() => props.onMouseDown("4")}>4</span>
            <span onMouseDown={() => props.onMouseDown("5")}>5</span>
            <span onMouseDown={() => props.onMouseDown("6")}>6</span>
            <span className="operator" onMouseDown={() => props.onMouseDown("-")}>-</span>
            <span onMouseDown={() => props.onMouseDown("1")}>1</span>
            <span onMouseDown={() => props.onMouseDown("2")}>2</span>
            <span onMouseDown={() => props.onMouseDown("3")}>3</span>
            <span className="operator" onMouseDown={() => props.onMouseDown("÷")}>÷</span>
            <span onMouseDown={() => props.onMouseDown("0")}>0</span>
            <span onMouseDown={() => props.onMouseDown(".")}>.</span>
            <span className="eval" onMouseDown={() => props.onMouseDown("=")}>=</span>
            <span className="operator" onMouseDown={() => props.onMouseDown("x")}>x</span>
        </div>
    );
}
