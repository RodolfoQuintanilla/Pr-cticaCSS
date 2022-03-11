import styles from '../style/Chavo.module.css'
import Morro from '../img/morro.png';

const Chavo = () => {
    return (
        <div className={styles.general} >
            <div className={styles.contenido}>
                <h2>Contacto de emergencia</h2>
                <p>Comuníquese con uno de los contactos a continuación si usted o su familia se sienten
                    no se encuentra bien y tiene síntomas similares a los de la COVID-19, haga
                    asegúrese de cuidarse también antes de informarnos:</p>

                <div className={styles.todo}>

                    <div className={styles.cuadrito}>
                        <div className={styles.titulos}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <div>
                                <h3 className={styles.tex1}>Telefono</h3>
                                <p className={styles.numeros}>5555555555</p>
                            </div>
                        </div>
                        <div className={styles.cajon}>
                            <button className={styles.boton}>Llanar</button>
                        </div>

                    </div>

                    <div className={styles.cuadrito}>
                        <div className={styles.titulos}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <div>
                                <h3 className={styles.tex1}>Telefono</h3>
                                <p className={styles.numeros}>5555555555</p>
                            </div>
                        </div>
                        <div className={styles.cajon}>
                            <button className={styles.boton}>Llanar</button>
                        </div>

                    </div>

                    <div className={styles.cuadrito}>
                        <div className={styles.titulos}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <div>
                                <h3 className={styles.tex1}>Telefono</h3>
                                <p className={styles.numeros}>5555555555</p>
                            </div>
                        </div>
                        <div className={styles.cajon}>
                            <button className={styles.boton}>Llanar</button>
                        </div>

                    </div>
                    <div className={styles.cuadrito}>
                        <div className={styles.titulos}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <div>
                                <h3 className={styles.tex1}>Telefono</h3>
                                <p className={styles.numeros}>5555555555</p>
                            </div>
                        </div>
                        <div className={styles.cajon}>
                            <button className={styles.boton}>Llanar</button>
                        </div>

                    </div>

                </div>
            </div>


            <div>
                <img src={Morro} alt="Morro" className={styles.imagenes} />
            </div>

        </div>
    );
};

export default Chavo;