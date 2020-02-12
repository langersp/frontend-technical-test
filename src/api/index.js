/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

export const getData = (cb) => {
	fetch('http://localhost:9988/api/vehicle')
		.then(res => res.json())
		.then(async data => {
			const vehicleDetails = await Promise.all(data.vehicles.map(vehicle => {
				return fetch(`http://localhost:9988/api/vehicle/${vehicle.id}`)
					.then(res => res.json())
			}));

			const vehicleData = {
				vehicles: data.vehicles,
				vehicleDetails
			}

			cb(vehicleData);
		})
}