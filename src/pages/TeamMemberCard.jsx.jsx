import React from 'react';

function TeamMemberCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <ul>
        <li>
          <strong>Ubicación:</strong> {props.location}
        </li>
        <li>
          <strong>Email:</strong> {props.email}
        </li>
      </ul>
    </div>
  );
}

export default TeamMemberCard;
