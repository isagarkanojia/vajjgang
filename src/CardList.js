import React from 'react'
import Card from './Card'

const CardList = ({ vajjgang }) => {
    return (
        <div>
            {vajjgang.map((member, i) => {
                return (
                    <Card key={i} name={vajjgang[i].name}
                        alias={vajjgang[i].alias}
                    />);
            }
            )}
        </div>
    );
}

export default CardList;