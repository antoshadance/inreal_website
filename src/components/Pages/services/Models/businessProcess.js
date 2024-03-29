import svgs from "../../../svgs";
import classes from "../ServiceTemplate.module.scss"
let {flagFillSvg} = svgs(18);

const businessProcessContent = {
    title:`Описание бизнес-процессов предприятия / проектов`,
    article:`   <section>
                <p>Бизнес-процесс — это повторяющаяся последовательность действий, которые выполняются на предприятии для достижения 
                ценного конечного продукта. Например, у производственной компании есть
                такие процессы — изготовление, контроль качества, обслуживание оборудования.</p>
                <br/>
                <p>Описание по технологиям:
                    <ul>
                        <li>${flagFillSvg}  AS IS («как есть») <br/>
                        Помогает зафиксировать эффективные технологии</li>
                        <li>${flagFillSvg} TO BE («как должно быть») <br/>
                        Помогает улучшить неэффективные</li>
                    </ul>
                </p>
                </section>
                
                <section>
                <h2>Способы описания:</h2>

                    <ul>
                    <li>${flagFillSvg}  Текстовый формат<br/>
                    <p class=${classes.liP}>Текстовый регламент описывает пошаговую последовательность действий, кто должен их выполнять и какие правила 
                    соблюдать. Такой формат идеально подходит для простых процессов, а также подробных инструкций с высокой 
                    степенью детализации.</p></li>
                    <li>${flagFillSvg}  Табличный формат<br/>
                    <p class=${classes.liP}>Таблица помогает хорошо структурировать данные при описании процесса. Если в строках описываются действия, 
                    то в столбцах можно указать исполнителей и время для выполнения. С помощью таблицы удобно описывать сложные 
                    процессы, в которых участвуют разные отделы и сотрудники.</p></li>
                    <li>${flagFillSvg}  Графический формат<br/>
                    <p class=${classes.liP}>Представляет собой наглядные блок-схемы и диаграммы. Графический формат идеально подходит для визуализации 
                    сложных процессов и их взаимосвязей. Популярным способом графического описания бизнес-процессов является 
                    нотация (система символов или знаков, используемых для представления информации).</p></li>
                    </ul>            
                
                </section>
    
    `
}

export default businessProcessContent;