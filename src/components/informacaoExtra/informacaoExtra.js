import React from 'react';
import style from './informacaoExtra.module.css';
import checkImage from '../../assets/imgs/checkImags.svg';
import clockImage from '../../assets/imgs/clock.svg';

function InformacaoExtra() {
    return (
        <section className={style.informacaoExtra}> 
            <ul className={style.informacaoExtra__lista}>
                <li className={style.informacaoExtra__lista__item}>
                    <img className={style.informacaoExtra__lista__item__icon} src={checkImage} alt="check" />
                    <div className={style.informacaoExtra__lista__item__container}>
                        <h2 className={style.informacaoExtra__lista__item__container__titulo}>+10 anos de experiência</h2>
                        <p className={style.informacaoExtra__lista__item__container__text}>
                            Cuidando da sua saúde com excelência e dedicação há mais de 3 anos.
                        </p>
                    </div>
                </li>
                <li className={style.informacaoExtra__lista__item}>
                    <img className={style.informacaoExtra__lista__item__icon} src={clockImage} alt="clock" />
                    <div className={style.informacaoExtra__lista__item__container}>
                        <h2 className={style.informacaoExtra__lista__item__container__titulo}>Atendimento superior</h2>
                        <p className={style.informacaoExtra__lista__item__container__text}>
                            Oferecendo atendimento superior e cuidado dedicado à sua saúde todos os dias.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default InformacaoExtra;
