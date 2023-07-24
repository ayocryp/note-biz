// import React from "react";
import { useState } from "react";

const Component = () => {

    const cards = useState([
        {
            title: "card-1",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, facere.`
        },
        {
            title: "card-2",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, facere.`
        },
        {
            title: "card-3",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, facere.`
        },
    ])

    return (
        <div className="Container">
            <h1>Cards</h1>
            <div className="Cards">
                {
                    cards.map((card, i) => (
                        <div key={i} className="card">
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>))
                }

            </div>
        </div>
    )

}

export default Component;