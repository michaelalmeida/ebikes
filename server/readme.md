## Endpoints

### User

`POST /login`
`POST /signup`
`GET user/basicinfo`
`PATCH /user/rent` isLoggedIn

### Bike

`GET /bike`
`POST /bike` isLoggedIn
`GET /bike/:id`
`GET /bike/last/:quantity`
`PATCH /bike/rent` isLoggedIn
`PATCH /bike/return` isLoggedIn

### Examples

#### Create bike - POST: /bike

• body expected:

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
