import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { ResultStyle } from './ResultStyle';
import aviao  from "../../assets/Files/aviao.jpg"
import { NumberQuestionContext } from '../../context/NumberQuestionContext';
import { useContext } from 'react';


export default function Results ({nome_da_cidade, risco_covid}){
    const { numberQuestion } = useContext(NumberQuestionContext)

    return (
        <ResultStyle>
            <h1>Seu destino perfeito é</h1>
            <img src={aviao} alt='Imagem de avião em cor laranja' />
            <h1>{numberQuestion === 6 ? "Barcelona" : "Nova Iorque"}</h1>
            <h1>Risco COVID: {numberQuestion === 6 ? "Moderate" : "Medium"}</h1>

            <div>
                <Button link={'https://www.youtube.com/watch?v=s1JPZZdzCOE%27%7D'} texto={'Tour pelo metaverso'} target={"blank"} />
                <Link to={numberQuestion <= 6 ? '/questions' : '/'}><Button texto={'Tentar novamente'} /></Link>
            </div>
        </ResultStyle>
    );
}