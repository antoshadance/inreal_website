import svgs from "../../../svgs";
// let {flagFillSvg, numberOneSvg,numberTwoSvg,numberThreeSvg,numberFourSvg} = svgs;
let {flagFillSvg,numberOneSvg,numberTwoSvg,numberThreeSvg,numberFourSvg} = svgs(22);

const webAppContent = {
    title: "Разработка мобильных приложений",
    article: `  <section>
                    <p>Разработка приложений для портативных устройств, таких,
                    как КПК, смартфоны или сотовые телефоны. </p>
                    <br/>
                    <p>Процесс создания и выпуска мобильных приложений часто 
                    понимается как серия шагов или этапов. На этих этапах процесса разработки мобильного приложения 
                    задействовано множество разных людей и специалистов внутри организации, включая бизнес, маркетинг, 
                    дизайн и инженерию.</p>
                </section>
                
                <section>
                
                    <ul><h2>Этапы разработки мобильных приложений:</h2>
                        <li>${flagFillSvg} стратегия;</li>
                        <li>${flagFillSvg} планирование;</li>
                        <li>${flagFillSvg} проектирование;</li>
                        <li>${flagFillSvg} разработка;</li>
                        <li>${flagFillSvg} тестирование</li>
                        <li>${flagFillSvg} выпуск.</li>
                    </ul>
                
                </section>

                <section>
                <p>
                    <ul><h2>Какие задачи решает мобильное приложение?</h2>
                    <li>${numberOneSvg} Повышение лояльности существующей клиентской базы.</li>
                    <li>${numberTwoSvg} Предоставление уникального сервиса.</li>
                    <li>${numberThreeSvg} Привлечение новых клиентов.</li>
                    <li>${numberFourSvg} Оптимизация и автоматизация бизнес-процессов.</li>
                    </ul>
                </p>
                </section>
                `
}
export default webAppContent;