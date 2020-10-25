const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
	const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : '';

	if (token) {
		jwt.verify(token, secret, (err, decodeToken) => {
			if (err) {
				res.status(401).json({ message: 'You shall not pass!' });
			} else {
				req.decodeToken = decodeToken;
				next();
			}
		});
	} else {
		res.status(401).json({ message: 'invalid or missing credentials' });
	}
};