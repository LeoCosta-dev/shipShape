import { FormsStyle } from "./FormsStyle";

export default function Forms({ question, possibilitys }) {
    return (
        <FormsStyle>
            {question}
            {possibilitys.map(element => (
                <div>
                    <input type="radio" name="option" />
                    <label htmlFor="option">{element}</label>
                </div>
            )
            )}
        </FormsStyle>
    )
}