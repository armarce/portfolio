import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Toggle, useTheme } from "react-hook-theme";
import "react-hook-theme/dist/styles/style.css";

export const Nav = ({handleClick, sectionAbout, sectionSkills, sectionProjects}) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const showSettings = e => {

        e.preventDefault();

    }

    console.log(menuIsOpen);

    return (

        <nav>
            <a href="#" id="logo">
                <span className="red">Marce</span>dev
            </a>
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="#/" onClick={()=> handleClick(sectionAbout)}>Sobre mi</a>
                </li>
                <li>
                    <a href="#/" onClick={()=> handleClick(sectionSkills)}>Habilidades</a>
                </li>
                <li>
                    <a href="#/" onClick={()=> handleClick(sectionProjects)}>Portafolio</a>
                </li>
                <li>
                    <a href="./CV_Armando_Ibarra.pdf">CV</a>
                </li>
                <li>
                    <div className="toggle">
                        <Toggle />
                    </div>
                </li>
            </ul>
            <Menu right outerContainerId={"root"} width={'100%'} isOpen={ menuIsOpen } onOpen={() => setMenuIsOpen(true)}>
                <a className="bm-item" href="/">Inicio</a>
                <a className="bm-item" href="#/" onClick={()=> { handleClick(sectionAbout); setMenuIsOpen(false)} }>Sobre mi</a>
                <a className="bm-item" href="#/" onClick={()=> { handleClick(sectionSkills); setMenuIsOpen(false)}}>Habilidades</a>
                <a className="bm-item" href="#/" onClick={()=> { handleClick(sectionProjects); setMenuIsOpen(false)}}>Portafolio</a>
                <a href="./CV_Armando_Ibarra.pdf">CV</a>
                <div className="toggle">
                    <Toggle />
                </div>
            </Menu>
        </nav>


    )

}