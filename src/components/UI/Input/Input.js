import React, { useEffect, useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, [])
    // useRef reminder

    const activate = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, ()=>{
        return {
            // In this part of useImparativeHandle, we put in the things we want to access from outside
            // of the component. We wanted to reach activate, so we name it focus for outside and reach it.
            // Basically a translation object between internal functionalities and outside world (parents).
            focusAct: activate
        };
    });

    return (
        <div
            className={`${classes.control} 
            ${props.isValid === false ? classes.invalid : ''}
        `}
        >
            <label htmlFor={`${props.id}`}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur} //?
            />
        </div>)

});

export default Input;