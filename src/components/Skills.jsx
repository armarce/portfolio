import { useState } from 'react';
import skills from '../db/skills.json';
import { forwardRef } from 'react';

const Skills = ({}, ref) => {

    const [idCategory, setIdCategory] = useState(1);

    const categories = skills.categories;

    const items = skills.categories.find(category => category.id === idCategory).items;

    return(
        <div ref={ref} style={{"paddingTop": "60px"}}>
            <h2>Habilidades</h2>
            <section id="skills">
                <ul id="categories">
                    {
                        categories.map(category => (
                            
                                <li key={category.id} onClick={()=> setIdCategory(category.id)} className={category.id === idCategory ? "active": ""}>
                                    <i className={`fa-solid ${category["fa-icon"]}`}></i> 
                                    <span>{category.name}</span>
                                </li>

                            )
                        )
                        
                    }
                </ul>
                <ul id="items">
                    {
                        items.map(item => (

                            <li key={item.name}>
                                <img src={`./logos/${item.logo}`} alt={item.name}/>
                                <span>
                                    {item.name}
                                </span>
                            </li>

                        ))
                    }
                </ul>
            </section>
        </div>

    )

}

export default forwardRef(Skills);