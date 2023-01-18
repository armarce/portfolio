import { forwardRef } from "react";

const About = ({}, ref) => {

    return (

        <div ref={ref} style={{"paddingTop": "60px"}}>
            <h2>Sobre mi</h2>
            <section id="about-me">
                <img src="./myprofile.jpg" />
                <p>
                    Comencé mi viaje en el desarrollo web en el año 2006 por simple curiosidad,
                    en ese entonces PHP estaba de moda y un amigo me compartió un curso llamado
                    "Memorias de un aprendiz de PHP", ese curso fué mi punto de partida con CSS, HTML, PHP y MySQL.
                    Con esa mínima base mi primer proyecto fué crear una réplica de la popular página Fotolog, posteriormente trabajé en otros proyectos propios.
                    <br />
                    <br />
                    No siempre me dediqué al desarrollo web de forma profesional ya que soy del rubro de química, ejerciendo la docencia por dos años.
                    <br />
                    <br />
                    Durante el 2022 me propuse cambiar al Stack JS/React/Node ingresando en un bootcamp,
                    durante mi estadía en este bootcamp descubrí mi vocación por la enseñanza en programación.
                </p>
            </section>
        </div>

    )

}

export default forwardRef(About);