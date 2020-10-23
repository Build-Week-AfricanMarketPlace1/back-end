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

**POST** - new user - ***base-url/api/auth/register***

For registration:
```
{
    "username": "testusername",
    "email": "email@email.com",
    "password": "password"
}
```

**POST** - login user - ***base-url/api/auth/login***

Login:
```
{
    "username": "testusername",
    "password": "password"
}
```

**GET** - specific user - ***base-url/api/users/:id***

**PUT** - update specific user - ***base-url/api/users/:id***

**DELETE** - delete specific user - ***base-url/api/users/:id***


### Items

**POST** - add new item - ***base-url/api/users/:id/items***

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

**GET** - all items - ***base-url/api/users/:id/items***

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

**GET** - specific item - ***base-url/api/items/:id***

**PUT** - update specific item - ***base-url/api/items/:id***

**DELETE** - delete specific item - ***base-url/api/items/:id***


### Categories

**POST** - add new category- ***base-url/api/categories***

**GET** - all categories - ***base-url/api/categories***

**GET** - specific category - ***base-url/api/categories/:id***

GET - all items from 

**PUT** - update specific category - ***base-url/api/categories/:id***

**DELETE** - delete specific category - ***base-url/api/categories/:id***


## Author

👤 **Britney Parkerson & Paulo Alexandre**

* Github: [@Build-Week-AfricanMarketPlace1](https://github.com/Build-Week-AfricanMarketPlace1)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Build-Week-AfricanMarketPlace1/back-end/issues). You can also take a look at the [contributing guide](https://github.com/Build-Week-AfricanMarketPlace1/back-end/blob/master/CONTRIBUTING.md).



## 📝 License

Copyright © 2020 [Britney Parkerson & Paulo Alexandre](https://github.com/Build-Week-AfricanMarketPlace1).<br />
This project is [ISC](https://github.com/Build-Week-AfricanMarketPlace1/back-end/blob/master/LICENSE) licensed.