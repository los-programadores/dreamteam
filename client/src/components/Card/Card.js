import React from 'react';
const CardStyle = {
    width: "18rem"
};

function Card(props){
 
    return (
    <div className="card" style={CardStyle}>
        <img className="card-img-top" src="" alt="template"></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.content}</p>
          <a href="/home" className="btn btn-primary">{props.hire}</a>
        </div>
       
    </div>
    );
    }

export default Card;
