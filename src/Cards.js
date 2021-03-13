import React from 'react';
import "./Cards.css";

const Cards = (props) => {
    return (
        <>
            <div className="card">
                <h2>{`Name: ${props.name}`}</h2>
                <h2>{`UserName: ${props.username} `}</h2>
                <h2>{`PhoneNumber: ${props.phone}`}</h2>
                <h2>{`Email: ${props.email} `}</h2>
                <h2>{`CompanyName: ${props.company}`}</h2>
            </div>  
        </>
    )
}

export default Cards;
