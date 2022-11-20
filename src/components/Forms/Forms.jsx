import Button from "../Button/Button";
import { FormsStyle } from "./FormsStyle";

export default function Forms({ question, possibilitys, SetQuestionNumber, questionNumber }) {
    function next(event){
        event.preventDefault()
        const newQuestionNumber = questionNumber++
        SetQuestionNumber(newQuestionNumber)
    }

    function previous(event){
        event.preventDefault()
        const newQuestionNumber = questionNumber--
        SetQuestionNumber(newQuestionNumber)
    }

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
                <Button texto={"Voltar"} click={previous}/>
                <Button texto={"Próximo"} click={next}/>
            </div>
        </FormsStyle>
    )
}