import React, { Component } from 'react';
import { getData } from '../api';
import Vehicle from './Vehicle';

export default
	class VehicleList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}
	}

	componentDidMount() {
		getData((data) => {
			this.setState({
				data
			})
		});
	}

	render() {
		if (this.state.data) {
			const { vehicles, vehicleDetails } = this.state.data;
			return (
				<div className="vehicles-holder">
					{
						vehicles.map((vehicle, index) => (
							<Vehicle vehicle={vehicle} vehicleDetails={vehicleDetails[index]} />
						))
					}
				</div>
			)
		}

		return (<h1>Loading...</h1>);
	}
}