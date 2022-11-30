## Backend

| Tool        | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| Node.js     | JavaScript runtime built on Chrome's V8 JavaScript engine           |
| Express     | Node.js web application framework                                   |
| MongoDB     | Document-oriented database which stores data in JSON-like documents |
| Passport.js | Authentication middleware for Node.js                               |

## Endpoints

### User

| Protocol | Endpoint          | Require login | Example                     |
| -------- | ----------------- | ------------- | --------------------------- |
| POST     | `/login`          | no            |                             |
| POST     | `/signup`         | no            | [Create user](#create-user) |
| GET      | `/user/basicinfo` | no            |                             |

### Bike

| Protocol | Endpoint               | Require login | Example                     |
| -------- | ---------------------- | ------------- | --------------------------- |
| GET      | `/bikes`               | no            |                             |
| POST     | `/bike`                | no            | [Create bike](#create-bike) |
| GET      | `/bike/:id`            | no            |                             |
| GET      | `/bike/last/:quantity` | no            |                             |
| PATCH    | `/bike/rent`           | yes           | [Rent bike](#rent-bike)     |
| PATCH    | `/bike/return`         | yes           | [Return bike](#return-bike) |

## Examples

### Create user

POST: /signup

```json
{
  "name": "Michael Almeida",
  "username": "michaelalmeida",
  "password": "123",
  "language": "EN",
  "country": "Germany",
  "city": "Cologne",
  "email": "michaelralmeida@gmail.com"
}
```

### Create bike

POST: /bike

Body expected:

```json
{
  "name": "Bike ECO",
  "location": {
    "latitude": "123",
    "longitude": "123"
  },
  "description": {
    "year": 2022,
    "color": "#EEEEEE"
  }
}
```

### Rent bike

PATCH: /bike/rent

Body expected:

```json
{
  "bikeId": "6386642c41f08d6776c7e964",
  "userId": "6383945d51e04081d6808742",
  "username": "userfortest"
}
```

### Return bike

PATCH: /bike/return

Body expected:

```json
{
  "bikeId": "6386642c41f08d6776c7e964",
  "userId": "6383945d51e04081d6808742"
}
```
