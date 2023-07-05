import "./HelloComponent.css"
import List from "../List/List"

export default function HelloComponent(){
    return (
        <>
            <div className={"c-hello-component"}>
                <span className={"c-hello-component-title"}>Bok</span>
                <p className={"c-hello-component-body"}>svim polaznicima</p>
                <List/>
            </div>
        </>
    )
}