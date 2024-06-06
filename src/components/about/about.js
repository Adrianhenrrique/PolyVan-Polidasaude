import style from './about.module.css';
import imgenOnibus from '../../assets/imgs/imagenOnibus.png';

function About() {
    return(
        <section className={style.about} id='about'>
            <img className={style.about__ilustration} src={imgenOnibus} alt='onibus poli da saúde'/>
            <div className={style.about__content}>
                <h3 className={style.about__content__subtitle}>Sobre nós</h3>
                <h2 className={style.about__content__title}>Um instituto dedicado com a missão principal de ajudar</h2>
                <p className={style.about__content__texte}>O Instituto Polivan, conhecido como Poli da Saúde, é comprometido com o bem-estar da comunidade. Oferecemos exames médicos gratuitos e atendimento de alta qualidade com uma equipe qualificada. Confie sua saúde a quem entende de cuidado.</p>
            </div>
        </section>
    )
}

export default About;