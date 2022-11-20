import { FormsPageStyle } from "./FormsPageStyle";
import { questions } from "../../utils/constants";
import Forms from "../../components/Forms/Forms";

export default function FormsPage(){
    const values = Object.values(questions[0])
    values.shift()
    const description = questions[0].description
    return(
        <FormsPageStyle>
            <Forms question={description} possibilitys={values} ></Forms>
        </FormsPageStyle>
    )
}