import svgs from "../../../svgs";
import classes from "../ServiceTemplate.module.scss"
let {flagFillSvg,flagSvg} = svgs(18);

const techDocContent = {
    title: "Разработка технической документации",
    article:`Техническая документация – набор документов, используемых при проектировании (конструировании), изготовлении 
    и использовании объектов техники: зданий, сооружений, промышленных изделий, включая программное и аппаратное 
    обеспечение.
    <br/>
    <h2>Разработка следующих технических документов:</h2>
        <ul>
            <li>${flagFillSvg}  техническое задание (ТЗ) <br/>
            <p class=${classes.liP}>документ, регламентирующий бизнес-цели, общее описание системы, объем работ, границы проекта, а также 
            порядок разработки, оценки и приемки. Данный документ отвечает нам на вопрос «что нужно сделать?» и фактически
             является постановкой задачи.<p/></li>
            <li>${flagFillSvg} руководство пользователя <br/>
            <p class=${classes.liP}>основной документ в составе эксплуатационной документации на автоматизированную систему, назначение которого – 
            предоставить людям помощь в использовании некоторой системы.<p/></li>
            <li>${flagFillSvg} инструкция:<br/>
            <p class=${classes.liP}>документ, который объясняет способы или правила выполнения определенных действий.<p/>
            </li>
            <li class=${classes.listSecondary}>${flagSvg}  пошаговая<br/>
            <p class=${classes.liP}>такие руководства позволяют регламентировать все возможные повторяющиеся процессы. Поставленная задача разбивается
            на несколько этапов, и каждый этап дополняется пояснениями.<p/>
            </li>
            <li class=${classes.listSecondary}>${flagSvg} инструкция по использованию<br/>
            <p class=${classes.liP}>перечень рекомендаций по правильному использованию приборов, например, руководство к сканеру штрих-кодов. Такие мануалы
            будут полезны пользователям непростых устройств – на рабочем месте или в быту.<p/>
            </li>
            <li class=${classes.listSecondary}>${flagSvg} должностная инструкция<br/>
            <p class=${classes.liP}>документ, регулирующий сферу обязанностей для конкретной должности. Также здесь определены права работника,
            требования к квалификации, область ответственности и формы премирования. Должностные инструкции могут быть составлены для любого сотрудника – от уборщицы до генерального директора.<p/>
            </li>

        </ul>
 `
}

export default techDocContent