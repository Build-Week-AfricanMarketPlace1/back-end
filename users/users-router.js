const express = require('express');
const router = express.Router();

const Users = require('../users/users-model.js');

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

function validateUser(req, res, next) {
	if (req.body && Object.keys(req.body).length > 0) {
		next();
	}
	if (!req.body) {
		next({ code: 400, message: 'missing category data' });
	}
	if (!req.body.text) {
		next({ code: 400, message: 'missing required text field' });
	}
}

module.exports = router;
