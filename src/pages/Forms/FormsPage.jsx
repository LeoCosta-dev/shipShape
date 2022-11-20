import { FormsPageStyle } from "./FormsPageStyle";
import { questions } from "../../utils/constants";
import Forms from "../../components/Forms/Forms";
import { useState } from "react";

export default function FormsPage(){

    const [questionNuber, setQuestionNumber] = useState(0)
    const values = Object.values(questions[questionNuber])
    values.shift()
    const description = questions[questionNuber].description
    return(
        <FormsPageStyle>
            <Forms question={description} possibilitys={values} questionNumber={questionNuber} setQuestionNumber={setQuestionNumber} ></Forms>
        </FormsPageStyle>
    )
}