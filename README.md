<h1 align="center">Welcome to back-end 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Build-Week-AfricanMarketPlace1/back-end#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Build-Week-AfricanMarketPlace1/back-end/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Build-Week-AfricanMarketPlace1/back-end/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/Build-Week-AfricanMarketPlace1/back-end" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/Build-Week-AfricanMarketPlace1/back-end#readme)

## Install

```sh
npm install
```

## Development

```sh
npm run server
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## End Points

### Users

**POST** - new user - **_base-url/api/auth/register_**

For registration:

```
{
    "username": "testusername",
    "email": "email@email.com",
    "password": "password"
}
```

**POST** - login user - **_base-url/api/auth/login_**

Login:

```
{
    "username": "testusername",
    "password": "password"
}
```

**GET** - specific user - **_base-url/api/users/:id_**

**PUT** - update specific user - **_base-url/api/users/:id_**

**DELETE** - delete specific user - **_base-url/api/users/:id_**

### Items

**POST** - add new item - **_base-url/api/users/:id/items_**

```
{
    "id": 9,
    "name": "Eggs",
    "image_url": "https://cdn.pixabay.com/photo/2020/09/30/18/09/eggs-5616647_960_720.jpg",
    "price": 2.69,
    "description": "Farm Fresh Eggs",
    "region": "Kenya",
    "city": "Nairobi",
    "address": "123 Market Street",
    "zip_code": "00100",
    "created_at": "2020-10-21 19:09:27",
    "user_id": 3,
    "category_id": 1
}
```

**GET** - all items - **_base-url/api/users/:id/items_**

```
[
    {
        "id": 9,
        "name": "Meat",
        "image_url": "https://cdn.pixabay.com/photo/2020/09/30/18/09/eggs-5616647_960_720.jpg",
        "price": 14.59,
        "description": "Farm Fresh Eggs",
        "region": "Kenya",
        "city": "Nairobi",
        "address": "123 Market Street",
        "zip_code": "00100",
        "created_at": "2020-10-21 19:09:27",
        "user_id": 3,
        "category_id": 1
    },
    {
        "id": 10,
        "name": "Eggs",
        "image_url": "https://cdn.pixabay.com/photo/2020/09/30/18/09/eggs-5616647_960_720.jpg",
        "price": 2,
        "description": "Farm Fresh Eggs",
        "region": "Kenya",
        "city": "Nairobi",
        "address": "123 Market Street",
        "zip_code": "00100",
        "created_at": "2020-10-23 01:52:02",
        "user_id": 3,
        "category_id": 1
    }
]
```

**GET** - specific item - **_base-url/api/items/:id_**

**PUT** - update specific item - **_base-url/api/items/:id_**

**DELETE** - delete specific item - **_base-url/api/items/:id_**

### Categories

**POST** - add new category- **_base-url/api/categories_**
{
"category_name": "Animal Products - Other"
},

**GET** - all categories - **_base-url/api/categories_**
[
    {
        "id": 1,
        "category_name": "Animal Products - Other"
    },
    {
        "id": 2,
        "category_name": "Meat"
    },
    {
        "id": 3,
        "category_name": "Poultry"
    },
    {
        "id": 4,
        "category_name": "Beans"
    },
    {
        "id": 5,
        "category_name": "Cereals-Maize"
    },
    {
        "id": 6,
        "category_name": "Cereals-Other"
    },
    {
        "id": 7,
        "category_name": "Cereals-Rice"
    },
    {
        "id": 8,
        "category_name": "Fruits"
    },
    {
        "id": 9,
        "category_name": "Peas"
    },
    {
        "id": 10,
        "category_name": "Roots & Tubers"
    },
    {
        "id": 11,
        "category_name": "Seeds & Nuts"
    },
    {
        "id": 12,
        "category_name": "Vegetables"
    },
    {
        "id": 13,
        "category_name": "Other"
    }
]

**GET** - specific category - **_base-url/api/categories/:id_**

GET - all items from

**PUT** - update specific category - **_base-url/api/categories/:id_**

**DELETE** - delete specific category - **_base-url/api/categories/:id_**

## Author

👤 **Britney Parkerson & Paulo Alexandre**

- Github: [@Build-Week-AfricanMarketPlace1](https://github.com/Build-Week-AfricanMarketPlace1)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Build-Week-AfricanMarketPlace1/back-end/issues). You can also take a look at the [contributing guide](https://github.com/Build-Week-AfricanMarketPlace1/back-end/blob/master/CONTRIBUTING.md).

## 📝 License

Copyright © 2020 [Britney Parkerson & Paulo Alexandre](https://github.com/Build-Week-AfricanMarketPlace1).<br />
This project is [ISC](https://github.com/Build-Week-AfricanMarketPlace1/back-end/blob/master/LICENSE) licensed.
