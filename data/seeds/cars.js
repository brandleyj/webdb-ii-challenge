exports.seed = function(knex, Promise) {
	return knex("cars")
		.truncate()
		.then(function() {
			return knex("cars").insert([
				{
					VIN: "4S3BHMF65R3386940",
					make: "Honda",
					model: "Civic",
					mileage: 12000,
					transmission: "V6",
					title: "yes"
				},
				{
					VIN: "4S3BGTF65R3383450",
					make: "Toyota",
					model: "Camry",
					mileage: 100000,
					transmission: "V6",
					title: "no"
				}
			]);
		});
};
