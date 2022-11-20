import { ButtonStyle } from "./ButtonStyle";

export default function Button({texto, borda, classe, click, link, target, id}){
    return (
        <ButtonStyle id={id} style={{border: `${borda}`}} className={classe} onClick={click}><a href={link} target={target} >{texto}</a></ButtonStyle>
    )
}