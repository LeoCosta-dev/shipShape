import { FormsPageStyle } from "./FormsPageStyle";
import { questions } from "../../utils/constants";
import Forms from "../../components/Forms/Forms";
import { useContext, useState} from "react";
import { NumberQuestionContext } from "../../context/NumberQuestionContext";

export default function FormsPage(){

    const { numberQuestion } = useContext(NumberQuestionContext)

    const values = Object.values(questions[numberQuestion])
    values.shift()
    const description = questions[numberQuestion].description
    return(
        <FormsPageStyle>
            <Forms question={description} possibilitys={values} ></Forms>
        </FormsPageStyle>
    )
}