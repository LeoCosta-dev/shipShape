import { createContext, useState } from "react";

export const NumberQuestionContext = createContext();

export const NumberQuestionProvider = ({children})=>{
    const [numberQuestion, setNumberQuestion] = useState(0)
    return(
        <NumberQuestionContext.Provider value={{ numberQuestion, setNumberQuestion }}>{ children }</NumberQuestionContext.Provider>
    )
};