import React from 'react';

export function OpportunityCard(props) {
    return (
        <div className="Content-elements">
            <div className='Detail-part'>
                <h2>{props.item.name}</h2>
                <br />
                <p>{props.item.description}</p>
            </div>
        </div>
    );
}
