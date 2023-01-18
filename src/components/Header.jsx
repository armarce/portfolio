import Typewriter from 'typewriter-effect';

export const Header = () => {

    return (
        <div id="header-container">
            <header>
                <h3>¡Hola mundo!</h3>
                <h1>Soy <span className="red">Armando Ibarra</span></h1>
                <h2>
                    <Typewriter
                        options={{
                            strings: ['desarrollador web fullstack'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 3000
                        }}
                    />
                </h2>
                <p>Entusiasta y apasionado por el desarrollo web, la programación es mi cable a tierra en este mundo tan cambiante.</p>
                <h4>Mis redes</h4>
                <ul id="social">
                    <li>
                        <a href="https://github.com/armarce" target="_blank"><i className="fa-brands fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ar-fernandez/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                </ul>
                <img id="person" src="./person-work.png" />
            </header>
        </div>

    )

}