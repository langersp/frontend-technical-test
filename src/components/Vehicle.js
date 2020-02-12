import React, { Component } from 'react';

const Vehicle = props => (
    <div className="vehicle">
        <img src={`https://raw.githubusercontent.com/connect-group/frontend-technical-test/master${props.vehicle.media[0].url}`} width="100%" alt={`${props.vehicle.id} ${props.vehicle.modelYear}`} />
        <div className="vehicle__text">
            <h2 className="vehicle__name">{`${props.vehicle.id} ${props.vehicle.modelYear}`}</h2>
            <p className="vehicle__price">From {props.vehicleDetails.price}</p>
            <p className="vehicle__description">{props.vehicleDetails.description}</p>
        </div>
    </div>
);

export default Vehicle;
