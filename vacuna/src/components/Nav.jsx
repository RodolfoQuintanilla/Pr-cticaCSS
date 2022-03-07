import styles from '../style/Nav.module.css';

const Nav = () => {
    return (
        <div className={styles.navegacion}>
            <div className={styles.name}>Vacinacion</div>
            <div className={styles.barra}>
                <a href='#!' className={styles.item}> Datos</a>
                <a href="#!" className={styles.item}>Registro</a>
                <a href="#!" className={styles.item}>NoTicias</a>
                <a href="#!" className={styles.item}>Boton</a>

            </div>
        </div>
    );
};

export default Nav;