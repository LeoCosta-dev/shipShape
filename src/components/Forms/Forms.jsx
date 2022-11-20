import { useContext, useEffect } from "react";
import { NumberQuestionContext } from "../../context/NumberQuestionContext";
import Button from "../Button/Button";
import { FormsStyle } from "./FormsStyle";


export default function Forms({ question, possibilitys }) {
    
    const { numberQuestion, setNumberQuestion } = useContext(NumberQuestionContext)
    
    useEffect(()=>{}, [numberQuestion])

    function next(event){
        event.preventDefault()
        setNumberQuestion(numberQuestion + 1)
    }

    function previous(event){
        event.preventDefault()
        setNumberQuestion(numberQuestion - 1)
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