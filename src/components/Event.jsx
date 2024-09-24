import React from 'react';

const Event = (props) => {
  return (
    <div className={`Event ${props.color}`}>
      <img src={props.image} alt={`${props.name}`} className="event-image" />
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>{props.location}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer"> {/* Use props.link for external URL */}
        <button className="event-button">Learn More</button>
      </a>    
    </div>
  );
};

export default Event;
