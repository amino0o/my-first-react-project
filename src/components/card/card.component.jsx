import React from 'react'
import './card.style.css'
export const Card = (props) =>{
    return (
        <div className='card-container'>
            <img src={ `https://robohash.org/${props.monster.id}?set=set1&size=180x180` } alt=''/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>

        </div>
    )

}

export default Card