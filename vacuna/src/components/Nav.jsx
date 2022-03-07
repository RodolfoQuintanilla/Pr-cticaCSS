import styles from '../style/Nav.module.css';
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className={styles.navegacion}>
            <div className={styles.name}>Vacinacion</div>

            <div className={styles.barra}>

                <Link to="/" className={styles.item}>Datos</Link>
                <Link to="otos" className={styles.item}>Otors</Link>

            </div>
        </div>
    );
};

export default Nav;