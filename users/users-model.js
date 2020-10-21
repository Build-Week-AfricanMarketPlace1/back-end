const db = require('../data/dbConfig.js');

module.exports = {
	add,
	addItem,
	find,
	findBy,
	findById,
	findItemByUserId,
	update,
	remove,
};

async function add(user) {
	const [id] = await db('users').insert(user, 'id');
	return db('users').where({ id }).first();
}

function addItem(item, user_id) {
	return db('items').insert({ ...item, user_id });
}

function findItemByUserId(id) {
	return db('items')
		.join('users', 'items.user_id', '=', 'users.id')
		.join('categories', 'items.category_id', '=', 'categories.id')
		.where('items.user_id', id)
		.select(
			'items.id as id',
			'name',
			'image_url',
			'price',
			'description',
			'country',
			'city',
			'address',
			'zip_code',
			'created_at',
			'user_id',
			'category_id'
		);
}

function find() {
	return db('users');
}

function findBy(filter) {
	return db('users').where(filter);
}

function findById(id) {
	db('users').where({ id }).first();
}

function update(changes, id) {
	return db('users').where({ id }).update(changes);
}

function remove(id) {
	return db('users').where({ id }).del();
}
