const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const { isValid } = require('../users/users-service.js');

const Users = require('../users/users-model.js');
const Items = require('../items/items-model.js');

const restrictedMiddleware = require('../auth/restricted-middleware.js');

router.post('/:id/items', restrictedMiddleware, async (req, res) => {
	const item = req.body;

	item.user_id = req.params.id;

	try {
		const newItem = await Items.add(item);
		res.status(201).json(newItem);
	} catch (err) {
		res.status(500).json({ message: 'Database error' });
		console.log(err);
	}
});

router.put('/:id', restrictedMiddleware, async (req, res, next) => {
	const user = req.body;

	user.id = req.params.id;

	const rounds = process.env.BCRYPT_ROUNDS ? parseInt(process.env.BCRYPT_ROUNDS) : 10;

	const hash = bcrypt.hashSync(user.password, rounds);
	user.password = hash;

	try {
		if (isValid(user)) {
			const updatedUser = await Users.update(user, user.id);
			res.status(201).json(updatedUser);
		} else {
			next({
				apiCode: 400,
				apiMessage: 'name, email or password missing',
			});
		}
	} catch (error) {
		next({ apiCode: 500, apiMessage: 'error saving new user', ...error });
	}
});

router.get('/:id/items', restrictedMiddleware, (req, res) => {
	const { id } = req.params;

	Items.findById(id)
		.then((items) => {
			if (items) {
				res.status(200).json(items);
			} else {
				res.status(404).json({ message: 'Could not find Items for given User.' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get Items.' });
			console.log(err);
		});
});

router.put('/:id', validateUser, (req, res) => {
	Users.update(req.body, req.params.id)
		.then((user) => {
			if (user) {
				res.status(201).json({ message: `user ${req.params.id} has been changed successfully.` });
			}
		})
		.catch((err) => {
			res.status(400).json({ message: `Could not update the user ${req.params.id}` });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	Users.remove(id)
		.then((deleted) => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res.status(404).json({ message: `Could not find user with given id: ${id}` });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to delete user: ', err });
		});
});

router.delete('/:id/items', restrictedMiddleware, async (req, res) => {
	const item = req.body;

	item.user_id = req.params.id;

	try {
		const delItem = await Items.remove(item.id);
		res.status(200).json(delItem);
	} catch (err) {
		res.status(500).json({ message: 'Database error' });
		console.log(err);
	}
});

function validateUser(req, res, next) {
	if (req.body && Object.keys(req.body).length > 0) {
		next();
	}
	if (!req.body) {
		next({ code: 400, message: 'missing User data' });
	}
	if (!req.body.text) {
		next({ code: 400, message: 'missing required text field' });
	}
}

function validateItem(req, res, next) {
	if (req.body && Object.keys(req.body).length > 0) {
		next();
	}
	if (!req.body) {
		next({ code: 400, message: 'missing item data' });
	}
	if (!req.body.text) {
		next({ code: 400, message: 'missing required text field' });
	}
}

module.exports = router;
