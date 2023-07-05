import './Image.css'

export default function Image(){
    const link = 'https://www.algebra.hr/visoko-uciliste/wp-content/uploads/sites/2/2022/05/5080703-Algebra-ispred-zgrade-1.jpg'

    return (
        <img className={'c-image'} src={link}/>
    )
}