import React from 'react';
import "./styles/homePage-start.css"

export default function Main2() {
    return(
        <div className="homePage">
            <article className='homePage-content grid-layout'>
                <section className='company-about'>
                    <h1 className='grid-items grid-item1'>IT-сервисы для бизнеса</h1>
                        <ul className='grid-item grid-item2'>
                            <li>Разработка мобильных приложений, сервисов для 1С</li>
                            <li>Сопровождение продуктов 1С</li>
                            <li>Автоматизация складских процессов</li>
                        </ul>
                </section>                
            </article>
        </div>
    )
}