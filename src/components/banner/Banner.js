import React from 'react';
import style from './Banner.module.css';  // Supondo que você tenha o CSS em um arquivo separado chamado Banner.module.css
import bannerDoctors from '../../assets/imgs/bannerDoctors.png'; // Ajuste o caminho conforme necessário

function Banner() {
    return (
        <main className={style.banner}>
            <div className={style.banner__container}>
                <h2 className={style.banner__container__subtitulo}></h2>
                <h1 className={style.banner__container__titulo}>Consultas e Exames Gratuitos em Quem Você Pode Confiar</h1>
                <p className={style.banner__container__text}>
                    O Instituto Polivan é dedicado ao bem-estar da comunidade, proporcionando uma vasta gama de exames médicos gratuitos.
                    Nossa equipe de profissionais da saúde está comprometida em oferecer um atendimento de qualidade, assegurando que você receba o melhor cuidado possível.
                    Visite-nos e descubra um serviço em que você pode confiar.
                </p>
                <a href="#" className={style.banner__container___link} >Veja nosso trabalho</a>
            </div>
            <img className={style.banner__ilustracao} src={bannerDoctors} alt="imagem ilustrativa de 2 doutores" />
        </main>
    );
}

export default Banner;
