import React from 'react';
import classes from "./Blocks.module.scss"
import Block from './Block.jsx';

export default function Blocks() {
    return (
        <div className={classes.blocksPage}>
            
        <section className={classes.blocksMain}>
        <h1>УСЛУГИ</h1>
            <div className={classes.blocks}>
                <Block title="Разработка мобильных приложений" img="../static/mobApp.jpg" toPage="/services/web-app-development"></Block>
                <Block title="Работа с 1С" img="../static/1c.jpg" toPage="/services/1c-development"></Block>
                <Block title="Аналитика процессов склада" img="../static/analytics.jpg" toPage="/services/analytics"></Block>
                <Block title="Описание бизнес процессов/ проектов предприятия " img="../static/techDoc.jpg" toPage="/services/business-process-description"></Block>
                <Block title="Разработка технической документации" img="../static/techDoctt.jpg" toPage="/services/tech-documentation"></Block>
                <Block title="JavaScript разработка" img="../static/js.jpg" toPage="/services/javascript"></Block>
            </div>
        </section>
        </div>
    )
}