import React from 'react'
import './Card.css'

const Card = (props) =>{
    return(
        <div className="card-container" >
            <img className="avatar" src={`https://avatars.dicebear.com/v2/male/:${props.name}.svg`}  alt="member-avatar" ></img>
            <div>
                <h2>{props.name}</h2>
                <h4>{props.alias}</h4>
            </div>
        </div>
    )
}

export default Card