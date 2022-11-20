import Button from "../Button/Button";
import { FormsStyle } from "./FormsStyle";

export default function Forms({ question, possibilitys }) {
    return (
        <FormsStyle>
            <h2>{question}</h2>
            {possibilitys.map(element => (
                <section>
                    <input type="radio" name="option" />
                    <label htmlFor="option">{element}</label>
                </section>
            )
            )}
            <div>
                <Button texto={"Voltar"}/>
                <Button texto={"Próximo"}/>
            </div>
        </FormsStyle>
    )
}