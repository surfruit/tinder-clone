import React, { useState } from 'react';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
          name: 'Elon Musk',
          url: "https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_1.jpg",  
        }
    ]);


    return (
        <div className='TinderCards'>
            {people.map((person) => (
                <h1>{person.name}</h1>
            ))}
        </div>
    )
}

export default TinderCards
