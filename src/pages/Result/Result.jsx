import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { ResultStyle } from './ResultStyle';
import aviao  from "../../assets/Files/aviao.jpg"


export default function Results (props){

    return (
        <ResultStyle>
            <h1>Seu destino perfeito é</h1>
            <img src={aviao} alt='Imagem de avião em cor laranja' />
            <h1>{props.nome_da_cidade}</h1>
            <h1>Risco COVID: {props.risco_covid}</h1>

            <div>
                <Button link={'https://www.youtube.com/watch?v=s1JPZZdzCOE%27%7D'} texto={'Tour pelo metaverso'}/>
                <Link to={'./'}><Button texto={'Tentar novamente'} /></Link>
            </div>
        </ResultStyle>
    );
}