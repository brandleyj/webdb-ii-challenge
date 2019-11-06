exports.up = function(knex) {
	return knex.schema.createTable("cars", function(table) {
		table.increments();

		table.string("VIN", 255).notNullable();
		table.string("make", 100).notNullable();
		table.string("model", 100).notNullable();
		table.float("mileage", 100).notNullable();

		table.string("transmission", 100);
		table.string("title", 15);
		table.timestamps(true, true);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("cars");
};
