import React from "react";
import './Container.css';
import Author from "../Author/Author";

export default class Container extends React.Component{
   render(){
    return (
        <>
            <span className={'c-container'}>This is Sparta!</span>
            <Author/>
        </>
    )
   }
}