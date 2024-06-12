import visual from '../../assets/imgs/Visual.svg';
import whatsappIcon from '../../assets/imgs/whatsappIcon.svg';
import style from './Services.module.css'

function Services() {
    return (
        <section className={style.services} id='services'>
            <div className={style.services__main}>
                <div className={style.services__main__left}>
                    <h3 className={style.services__main__left__subtitle}>Serviços</h3>
                    <h2 className={style.services__main__left__title}>Serviços de Saúde Gratuitos com Excelência Profissional</h2>
                    <p className={style.services__main__left__text}>Oferecemos cuidados médicos gratuitos com uma equipe qualificada, garantindo saúde de qualidade para todos.</p>
                    <a href='https://wa.me/5511957718846?text=Oi' className={style.services__main__left__link}> <img src={whatsappIcon} alt='icon do whatsapp'/>Comece Aqui </a>
                </div>
                <img className={style.services__main__right} src={visual} alt="exemplo de exames"/>
            </div>
        </section>
    )
}

export default Services;