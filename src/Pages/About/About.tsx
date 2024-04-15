import ContentLine from "src/Components/ContentLine/ContentLine";
import "./About.css"
import { NavbarProps } from "src/Utils/NavbarProps";


const AboutPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('') 
    return (
        <div className="root-about">
            <div className="superpupercontainer-project">
                <div className="huinia123321">
                    <p className="zvezda321">Главная</p>
                    <p className="tochka321">• </p>
                    <p className="pizda321">О проекте</p>
                </div>
                <div className="projectinfo-container">
                    <h2>Общее описание</h2>
                    <ContentLine />
                    <p className="projectinfo">
                        KarmaStore - это уникальный маркетплейс для продажи услуг в сфере онлайн игр, созданный студентами колледжа при Astana IT University в рамках курсовой работы. <br />
                        Платформа позволяет игрокам и профессиональным геймерам встречаться, чтобы купить или продать игровые услуги, такие как прокачка персонажей, <br />выполнение заданий или тренировки в играх. <br />
                        KarmaStore стремится стать ведущей торговой площадкой в индустрии онлайн игр, где каждая сделка обеспечивает высокое качество сервиса и удовлетворение потребностей игроков. <br />
                    </p>

                    <h2>Функциональность</h2>
                    <ContentLine />
                    <p className="projectinfo">
                        KarmaStore предоставляет широкий спектр функций, направленных на улучшение пользовательского опыта:
                    </p>
                    <div className="projectlist123">
                        <ul>
                            <li className="projectinfo">Многообразие игровых услуг: От прокачки и гайдов до коучинга и выполнения сложных игровых заданий.</li>
                            <li className="projectinfo">Интуитивный интерфейс: Простая и понятная навигация по сайту, которая помогает быстро находить нужные услуги.</li>
                            <li className="projectinfo">Система рейтингов и отзывов: Помогает формировать доверие и прозрачность между пользователями.</li>
                            <li className="projectinfo">Персонализированные профили: Игроки и сервис-провайдеры могут настраивать свои профили, показывая свои навыки и достижения.</li>
                            <li className="projectinfo">Система гарантий: Обеспечение безопасности платежей и качества выполненных услуг через эскроу-систему.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default AboutPage; 