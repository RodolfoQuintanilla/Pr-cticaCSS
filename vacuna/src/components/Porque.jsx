import React from 'react';
import styles from '../style/Porque.module.css'

const Porque = () => {
    return (
        <div className={styles.contenedor}>
            <h1>¿Por qué debo vacunarme?</h1>
            <p>

                Para evitar cualquier duda sobre el contagio del COVID-19 <br />
                vacuna, identifique los siguientes 4 beneficios de COVID-19 <br />
                vacunación:
            </p>
            <div className={styles.cuadros}>
                <div className={styles.cuadro}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-ui-radios" viewBox="0 0 16 16">
                        <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                    <h2>Minimizar el
                        propagación de virus</h2>
                    <p>
                        La vacuna ha sido probada
                        eficaz para evitar que alguien
                        de infectarse con
                        Coronavirus
                    </p>
                </div>
                <div className={styles.cuadro}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z" />
                    </svg>
                    <h2>Formando Anticuerpos</h2>
                    <p>
                        Se ha demostrado que la vacuna contra el COVID-19
                        ayudar a formar anticuerpos
                        respuesta para el sistema inmunológico
                    </p>
                </div>
                <div className={styles.cuadro}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>

                    <h2>Resultados de traducción
                        Proteger</h2>
                    <p>

                        gente cercana
                        Los beneficios del COVID-19
                        vacunación son la vacuna
                        que obtenemos también puede ayudar
                        proteger a las personas que nos rodean
                    </p>
                </div>
                <div className={styles.cuadro}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-graph-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07Z" />
                    </svg>
                    <h2>Creando grupo de
                        inmunidad</h2>
                    <p> La vacunación contra el COVID-19 también es
                        beneficioso para crear grupo
                        inmunidad o inmunidad colectiva.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Porque;