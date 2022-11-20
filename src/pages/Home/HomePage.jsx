import Button from "../../components/Button/Button";
import { HomeStyle } from "./HomeStyle";
import ShipShape from "../../assets/Files/ShipShape_Logo.png"
import { Link } from "react-router-dom";
import { NumberQuestionContext } from "../../context/NumberQuestionContext";
import { useContext } from "react";


export default function Home(){
    const { setNumberQuestion } = useContext(NumberQuestionContext) 
    setNumberQuestion(0)
    return(
        <HomeStyle>
            <div>
                <h4 className={HomeStyle.text_h4}>Bem vindo ao ShipShape.</h4>
                <h1 className="text-h1">Seu sonho, nossa viagem!</h1>
                <p>Venha viver a experiência feita sob medida para você. 😉</p>
                <Link to='/questions'>
                    <Button texto={"Testar agora"} />
                </Link>
            </div>
            <img src={ShipShape} alt="logo" />
        </HomeStyle>
    )
}