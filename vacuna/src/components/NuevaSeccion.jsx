import styles from '../style/NuevaSeccion.module.css'
import Aztra from '../img/AZ.png'
import Fizer from '../img/fizer.png'
import Moderna from '../img/moderna.png'
import Sinovac from '../img/sinovac.png'

const NuevaSeccion = () => {
    return (
        <section>
            <img className={styles.az} src={Aztra} alt="Aztra" />
            <img src={Sinovac} alt="Sinovac" />
            <img src={Fizer} alt="Fizer" />
            <img src={Moderna} alt="Moderna" />
        </section>
    );
};

export default NuevaSeccion;