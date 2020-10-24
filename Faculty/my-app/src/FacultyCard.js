import React from 'react';

function FacultyCard(props){
    return(
        <div className="Content-elements">
            <div className='Photo-part'>
                <img src= {props.item.image} width = '100%' height='100%'/>
            </div>
            <div className='Detail-part'>
                <h2><b>{props.item.name}</b></h2>
                <p>{props.item.post}</p>
                <p>{props.item.qualification}</p>
                <p>{props.item.email} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; {props.item.phone}</p>
            </div>
        </div>
    )
}

export default FacultyCard;