import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NumberQuestionContext } from "../../context/NumberQuestionContext";
import Button from "../Button/Button";
import { FormsStyle } from "./FormsStyle";


export default function Forms({ question, possibilitys, change }) {
    
    const { numberQuestion, setNumberQuestion } = useContext(NumberQuestionContext)

    const [chosenTags, setChosenTags] = useState([])
    const [refusedCities, setRefusedCities] = useState([])
    const [tagValue, setTagvalue]= useState("")
    const navigate = useNavigate()
    
    useEffect(()=>{}, [numberQuestion])

    function next(event){
        event.preventDefault()
        setChosenTags([...chosenTags, tagValue])
        if(numberQuestion === 5){
            navigate("/results")
        }if(numberQuestion >= 9){
            navigate("/results")
        }
        setNumberQuestion(numberQuestion + 1)
    }

    function previous(event){
        event.preventDefault()
        if(numberQuestion === 0){
            navigate("/")
        }
        setNumberQuestion(numberQuestion - 1)
    }

    return (
        <FormsStyle>
            <h2>{question}</h2>
            {possibilitys.map(element => (
                <section>
                    <input type="radio" name="option" value={element} onClick={event=> {setTagvalue(event.target.value)}}/>
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