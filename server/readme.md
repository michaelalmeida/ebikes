## Endpoints

### User

| Protocol | Endpoint          | Require login |
| -------- | ----------------- | ------------- |
| POST     | `/login`          | no            |
| POST     | `/signup`         | no            |
| GET      | `/user/basicinfo` | no            |
| PATCH    | `/user/rent`      | yes           |
| PATCH    | `/user/return`    | yes           |

### Bike

| Protocol | Endpoint               | Require login |
| -------- | ---------------------- | ------------- |
| GET      | `/bike`                | no            |
| POST     | `/bike`                | no            |
| GET      | `/bike/:id`            | no            |
| GET      | `/bike/last/:quantity` | no            |
| POST     | `/bike/rent`           | yes           |
| POST     | `/bike/return`         | yes           |

## Examples

#### Create bike - POST: /bike

Body expected:

## Endpoints

### User

| Protocol | Endpoint          | Require login |
| -------- | ----------------- | ------------- |
| POST     | `/login`          | no            |
| POST     | `/signup`         | no            |
| GET      | `/user/basicinfo` | no            |
| PATCH    | `/user/rent`      | yes           |
| PATCH    | `/user/return`    | yes           |

### Bike

| Protocol | Endpoint               | Require login |
| -------- | ---------------------- | ------------- |
| GET      | `/bikes`               | no            |
| POST     | `/bike`                | no            |
| GET      | `/bike/:id`            | no            |
| GET      | `/bike/last/:quantity` | no            |
| POST     | `/bike/rent`           | yes           |
| POST     | `/bike/return`         | yes           |

## Examples

#### Create bike - POST: /bike

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
