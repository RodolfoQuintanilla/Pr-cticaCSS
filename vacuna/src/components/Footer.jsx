import style from '../style/Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.fondo}>
            <div className={style.uno}>
                <h1>Vacunación</h1>
                <p>Nuestro objetivo es ayudar a los <br />
                    mundo libre de la<br />
                    pandemia en curso</p>
            </div>

            <div className={style.dos}>
                <div>
                    <ul>
                        <li> <h2>About</h2> </li>
                        <li>About</li>
                        <li>Features</li>
                        <li>News </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li> <h2>About</h2> </li>
                        <li>About</li>
                        <li>Features</li>
                        <li>News </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li> <h2>About</h2> </li>
                        <li>About</li>
                        <li>Features</li>
                        <li>News </li>
                    </ul>
                </div>

            </div>

        </footer>
    );
};

export default Footer;