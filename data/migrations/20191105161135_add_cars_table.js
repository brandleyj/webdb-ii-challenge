exports.up = function(knex) {
	return knex.schema.createTable("cars", function(table) {
		table.increments();

		table.string("VIN", 255).notNullable();
		table.string("make").notNullable();
		table.string("model").notNullable();
		table.float("mileage").notNullable();

		table.string("transmission");
		table.string("title");
		table.timestamps(true, true);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("cars");
};
