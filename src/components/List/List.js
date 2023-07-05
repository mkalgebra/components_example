import "./List.css"

export default function List(){
    const items = ['Ja', 'Ti', 'Mi']

    return(
        <ul className={'c-list'}>
           {items.map(i=>{return <li>{i}</li>})}
        </ul>
    )
}