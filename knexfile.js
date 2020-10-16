const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/users";


module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: { filename: './data/african.db3' },
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
		pool: {
			afterCreate: (conn, done) => {
				// runs after a connection is made to the sqlite engine
				conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
			},
		},
	},

	testing: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './data/testing/african-test.db3',
		},
		migrations: {
			directory: './data/testing/migrations',
		},
		seeds: {
			directory: './data/testing/seeds',
		},
		pool: {
			afterCreate: (conn, done) => {
				// runs after a connection is made to the sqlite engine
				conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
			},
		},
	},

	production: {
		client: 'pg',
		useNullAsDefault: true,
    connection: pgConnection,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
		pool: {
			afterCreate: (conn, done) => {
				// runs after a connection is made to the sqlite engine
				conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
			},
		},
	},
};
