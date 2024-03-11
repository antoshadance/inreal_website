import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar';
import classes from './ServiceTemplate.module.scss'
import Footer from '../../Footer';
import Carousel from '../../Carousel';
import gsap from 'gsap';
import imgOne from "../../../static1/analytics1.jpg";
import imgTwo from "../../../static1/analytics2.jpg";
let flagFillSvg = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
<path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
</svg>


export default function ServiceTemplate(props) {
  
  useEffect(()=>{
    window.scrollTo(0,0);
    gsap.from(".left_side_article",{
      opacity:0
  })
  gsap.to(".left_side_article",{
      opacity:1,
      duration: 0.5
  })
  },[])

  const [elHidden, setElHidden] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
    sixth: true
  })

  function handleClickLi(e) {
    const elName = e.target.lastChild.getAttribute("name");

    if (elHidden[elName]===true) {
        setElHidden((prevValue)=>{
            return ({...prevValue,[elName]:false})
        })

        gsap.to(".hidden_li_"+elName,{
            height: "fit-content",
            overflow: "visible",
            padding: "1% 1% 1% 2%",
            duration: 0.5
        })
    }

    if (elHidden[elName]===false) {
        setElHidden((prevValue)=>{
            return ({...prevValue,[elName]:true})
        })
        gsap.to(".hidden_li_"+elName,{
            height: 0,
            padding: 0,
            overflow: "hidden",
            duration: 0.5
        })
    }

  }


  return (
    <div>
        <Navbar/>
        <div className={classes.servicePage}>
          <div className={classes.serviceWrapper}>
            <section className={`${classes.serviceDesc} ${"left_side_article"}`}>
              <h1 className={classes.serviceTitle}>Аналитика процессов склада</h1>
              <article className={classes.description}>
              <section>
                <p>Аналитика — это процесс интерпретации данных с целью получения из них значимой информации. 
                Аналитика позволяет найти полезные паттерны, сделать прогноз и извлечь уроки из собранных данных, 
                на основе которых в дальнейшем принимаются бизнес-решения.</p>
                <br/>
                <p>Мы решаем следующие проблемы:
                    <ul>
                        <li class={classes.clickable_li} onClick={handleClickLi}>{flagFillSvg} Склад не справляется с объемом отгрузки товара.
                        <li class={`${classes.hidden_li} hidden_li_first`} name="first">

                        <p>
                        <span>В чем заинтересован клиент?</span>
                        <ul className={classes.dropDownSubLi}>
                        <li>Приём и отгрузка согласно установленным нормам и срокам, одновременное наличие всех групп товара на хранении, отсутствие пересорта.</li>
                        </ul>
                        </p>

                        <p>
                        <span>Как мы можем помочь?</span>
                        <ul className={classes.dropDownSubLi}>
                        <li>Повышение эффективности работы склада путём поиска "узких мест" в бизнес-процессах склада.</li>
                        </ul>
                        </p>

                        <p>
                        <span>Что это дает?</span>
                        <ul className={classes.dropDownSubLi}>
                        <li>Оптимизация процессов склада. </li>
                        <li>Своевременная и качественная доставка товара, оптимальные затраты на содержание складской логистики.</li>
                        </ul>

                        </p>

                        <p>
                          <span>Экономическая выгода</span>
                          <ul className={classes.dropDownSubLi}>
                          <li>Увеличение прибыли за счёт увеличения товарооборота и уменьшения затрат.</li>
                          </ul>
                        </p>

                        </li>
                        </li>
                        


                        <li class={classes.clickable_li} onClick={handleClickLi}>{flagFillSvg} Недостаточно места для товара
                        <li class={`${classes.hidden_li} hidden_li_second`} name="second">
                        
                            <p>
                            <span>В чем заинтересован клиент?</span>
                           
                            <ul className={classes.dropDownSubLi}>
                            <li>Максимальная загруженность склада без ущерба бизнес-процессам.</li>
                            </ul>
                            </p>

                            <p>
                            <span>Как мы можем помочь?</span>

                            <ul className={classes.dropDownSubLi}>
                            <li>Проведение анализа зон хранения, размерности ячеек и хранящегося товара.</li>
                            <li>Предложение возможных вариантов решения проблем, выявленных в ходе анализа.</li>
                            </ul>

                            </p>

                            <p>
                            <span>Что это дает?</span>

                            <ul className={classes.dropDownSubLi}>
                            <li>Оптимизация хранения товара на складе.</li>
                            <li>Повышение товарооборота.</li>
                            </ul>

                            </p>

                            <p>
                            <span>Экономическая выгода</span>

                            <ul className={classes.dropDownSubLi}>
                            <li>Наличие дополнительных складских площадей.</li>
                            <li>Оптимизация хранения на имеющихся складских площадях.</li>
                            </ul>

                            </p>
                            </li>
                            </li>


                            <li class={classes.clickable_li} onClick={handleClickLi}>{flagFillSvg} Товар не собран. Медленно собирают.
                            <li class={`${classes.hidden_li} hidden_li_third`} name="third">
                            <p>
                            <span>В чем заинтересован клиент?</span>

                            <ul className={classes.dropDownSubLi}>
                            <li>Своевременно собран товар;</li>
                            <li>Своевременно доставлен товар клиенту;</li>
                            </ul>

                            </p>

                            <p>
                            <span>Как мы можем помочь?</span>

                            <ul className={classes.dropDownSubLi}>
                            <li>Создание автоматизированного рабочего места (АРМ) с возможностью мониторинга и управления сборкой товара</li>
                            <li>Анализ необходимого количества сотрудников и техники;</li>
                            <li>Оценить производительность труда сотрудников склада;</li>
                            <li>Разработать варианты мотивации сотрудников склада;</li>
                            <li>Разработать KPI: производительность сотрудников, выработка, пропускная способность склада.</li>
                            </ul>

                            </p>

                            <p>
                            <span>Что это дает?</span>

                            <ul className={classes.dropDownSubLi}>
                            <li>Гибкое управление работой склада;</li>
                            <li>Оптимальное количество сотрудников и техники на складе.</li>
                            </ul>

                            </p>

                            <p>
                            <span>Экономическая выгода</span>

                            <ul className={classes.dropDownSubLi}>
                            <li>Сокращение упущенной выгоды за счет увеличения объема отгрузки товара.</li>
                            </ul>

                            </p>

                        </li>
                        </li>


                        <li class={classes.clickable_li} onClick={handleClickLi}>{flagFillSvg}Нет четкого представления как мотивировать сотрудников.
                        <li class={`${classes.hidden_li} hidden_li_fourth`} name="fourth">

                            <p>
                            <span>В чем заинтересован клиент?</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Повысить уровень сервиса;</li>
                            <li>Повысить эффективность работы склада;</li>
                            <li>Создать мотивацию сотрудников на сборку большего количества товара;</li>
                            <li>Снизить текучесть персонала;</li>
                            <li>Определить нормативные значения сотрудника;</li>
                            <li>Повысить производительность сотрудников;</li>
                            <li>Оценивать индивидуальную эффективность каждого сотрудника - выделение наиболее/наименее эффективных сотрудников;</li>
                            <li>Нормировать количество сотрудников в зависимости от объемов сборки;</li>
                            </ul>
                            </p>

                            <p>
                            <span>Как мы можем помочь?</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Разработать систему мотивации на основании аналитики за прошлые периоды, 
                            а так же отслеживать показатели эффективности сотрудников в реальном времени.</li>
                            </ul>
                            </p>

                            <p>
                            <span>Что это дает?</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Увеличение производительности сотрудников склада.</li>
                            </ul>
                            </p>

                            <p>
                            <span>Экономическая выгода</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Уменьшение затрат на ФОТ.</li>
                            </ul>
                            </p>

                        </li>
                        </li>

                        <li class={classes.clickable_li} onClick={handleClickLi}>{flagFillSvg}Наличие ошибок в учетной системе.
                        <li class={`${classes.hidden_li} hidden_li_fifth`} name="fifth">
                            <p>
                            <span>В чем заинтересован клиент?</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Отсутствие ошибок в учетной системе.</li>
                            </ul>
                            </p>

                            <p>
                            <span>Как мы можем помочь?</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Аналитически выявить ошибки, исправить их. 
                                Далее при помощи инструмента мониторинга отслеживать 
                                появление новых ошибок (например, неправильно завели наименование товара),
                                 можно сравнивать то что заказывал отдел закупа с тем что оприходовали на склад.</li>
                            </ul>
                            </p>

                            <p>
                            <span>Что это дает?</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Повышение оперативности работы во всех отделах за счёт сокращения количества ошибок.</li>
                            </ul>
                            </p>

                            <p>
                            <span>Экономическая выгода</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Сокращение упущенной выгоды</li>
                            </ul>
                            </p>
                        </li>
                        </li>

                        <li class={classes.clickable_li} onClick={handleClickLi}>{flagFillSvg}Недостача товара на складе.
                        <li class={`${classes.hidden_li} hidden_li_sixth`} name="sixth">
                            <p>
                            <span>В чем заинтересован клиент?</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Минимизация потерь.</li>
                            </ul>
                            </p>

                            <p>
                            <span>Как мы можем помочь?</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Провести анализ причин списаний товара.</li>
                            </ul>
                            </p>

                            <p>
                            <span>Что это дает?</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Предупреждение хищений и потерь товара.</li>
                            </ul>
                            </p>

                            <p>
                            <span>Экономическая выгода</span>
                            <ul className={classes.dropDownSubLi}>
                            <li>Сокращение потерь.</li>
                            </ul>
                            </p>
                        </li>
                        </li>

                    </ul>
                </p>
                </section>
                <br/>
                <section>
                            <ul>
                            <p>Основные этапы: </p>
                            <li>{flagFillSvg}Поиск причин;</li>
                            <li>{flagFillSvg}предложение вариантов решения;</li>
                            <li>{flagFillSvg}внедрение.</li>
                            </ul>
                            <br/>
                            <ul>
                            <p>Преимущества складской логистической аналитики: </p>
                            <li>{flagFillSvg}Возможность выявить и устранить недостатки в работе складской логистики.</li>
                            <li>{flagFillSvg}Повышение эффективности и производительности складской логистики.</li>
                            <li>{flagFillSvg}Снижение затрат на складскую логистику за счет оптимизации процессов.</li>
                            <li>{flagFillSvg}Улучшение качества обслуживания клиентов.</li>
                            <li>{flagFillSvg}Улучшение планирования и управления складскими операциями.</li>
                            <li>{flagFillSvg}Модуль биллинга(мониторинг работы сотрудников).</li>
                            </ul>
                </section>
              </article>
            </section>
            <Carousel img1={imgOne} img2={imgTwo} img3={imgTwo} />
          </div>
        </div>
        <Footer/>
    </div>
  )
}
