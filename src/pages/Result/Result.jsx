import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { ResultStyle } from './ResultStyle';
import aviao  from "../../assets/Files/aviao.jpg"
import { NumberQuestionContext } from '../../context/NumberQuestionContext';
import { useContext, useEffect, useState } from 'react';
import { covidRisk } from '../../request/request';


export default function Results ({nome_da_cidade, risco_covid}){
    const { numberQuestion } = useContext(NumberQuestionContext)
    const [covidLevelRisk, setCovidLevelRisk] = useState("") 

    useEffect(()=>{
        const country = numberQuestion === 6 ? "ES" : "US"
        covidRisk(country)
        .then(response => setCovidLevelRisk(response))
        .catch(e=>console.log(e.message)) 
    }, [])

    return (
        <ResultStyle>
            <h1>Seu destino perfeito é</h1>
            <img src={aviao} alt='Imagem de avião em cor laranja' />
            <h1>{numberQuestion === 6 ? "Barcelona" : "Nova Iorque"}</h1>
            <h1>Risco COVID: { covidLevelRisk }</h1>

            <div>
                <Button link={'https://www.youtube.com/watch?v=s1JPZZdzCOE%27%7D'} texto={'Tour pelo metaverso'} target={"blank"} />
                <Link to={numberQuestion <= 6 ? '/questions' : '/'}><Button texto={'Tentar novamente'} /></Link>
            </div>
        </ResultStyle>
    );
}