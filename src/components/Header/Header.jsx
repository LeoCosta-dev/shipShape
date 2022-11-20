import { HeaderStyle } from "./Header-style";
import tynyLogo from "../../assets/Files/tinyLogo.png"
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <HeaderStyle>
            <Link to="/">
                <img src={tynyLogo} alt="tiny logo" />
            </Link>
            <Link to="/questions">
                <Button texto={"Testar agora"} />            
            </Link>
        </HeaderStyle>
    )
}