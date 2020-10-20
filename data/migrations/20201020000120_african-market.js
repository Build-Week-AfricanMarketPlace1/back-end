exports.up = function (knex) {
	return knex.schema
		.createTable('users', (users) => {
			users.increments();
			users.string('username', 255).unique().notNullable();
			users.string('email_address', 255).unique().notNullable();
			users.string('password', 255).notNullable();
			users.string('country', 255);
			users.string('image_url', 255);
		})
		.createTable('categories', (categories) => {
			categories.increments();
			categories.string('category_name', 128).unique().notNullable();
		})
		.createTable('items', (items) => {
			items.increments();
			items.string('item_name', 128).unique().notNullable();
			items.string('image_url');
			items.float('price').notNullable().unsigned();
			items.string('description');
			items.string('country');
			items.string('city');
			items.string('address');
			items.integer('zip_code');
			items.timestamp('created_at').defaultTo(knex.fn.now());
			items.integer('user_id').notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
			items
				.integer('category_id')
				.notNullable()
				.references('categories.id')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		});
};
exports.down = function (knex) {
	return knex.schema.dropTableIfExists('users').dropTableIfExists('categories').dropTableIfExists('items');
};