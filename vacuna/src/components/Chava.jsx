import Morra from '../img/Morra.png'
import styles from '../style/Chava.module.css'

const Chava = () => {
    return (
        <div className={styles.datos}>
            <div>

                <img className={styles.imagenes} src={Morra} alt="Morra" />
            </div>
            <div>
                <h2 className={styles.Titulo}>Preparativos antes de la vacuna</h2>
                <p>
                    El éxito de las vacunas está fuertemente influenciado por la
                    fuerza del sistema inmunológico del cuerpo. Por lo tanto, hay
                    varias cosas que se pueden intentar para hacer el COVID-19
                    trabajo de vacunas:
                </p>
            </div>
        </div>
    );
};

export default Chava;