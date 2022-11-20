import Button from "../../components/Button/Button";
import { HomeStyle } from "./HomeStyle";
import ShipShape from "../../assets/Files/ShipShape_Logo.png"

export default function Home(){
    return(
        <HomeStyle>
            <div>
                <h4 className={HomeStyle.text_h4}>Welcome to ShipShape</h4>
                <h1 className="text-h1">Your dream, our travel</h1>
                <p>Come and look what experiences fit you the best 😉</p>
                <Button texto={"Try now"} />
            </div>
            <img src={ShipShape} alt="logo" />
        </HomeStyle>
    )
}