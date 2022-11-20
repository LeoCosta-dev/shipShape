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
                <h4 className={HomeStyle.text_h4}>Welcome to ShipShape</h4>
                <h1 className="text-h1">Your dream, our travel</h1>
                <p>Come and look what experiences fit you the best 😉</p>
                <Link to='/questions'>
                    <Button texto={"Try now"} />
                </Link>
            </div>
            <img src={ShipShape} alt="logo" />
        </HomeStyle>
    )
}