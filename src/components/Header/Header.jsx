import { HeaderStyle } from "./Header-style";
import tynyLogo from "../../assets/Files/tinyLogo.png"
import Button from "../Button/Button";

export default function Header(){
    return (
        <HeaderStyle>
            <img src={tynyLogo} alt="tiny logo" />
            <Button texto={"Try now"} />
        </HeaderStyle>
    )
}