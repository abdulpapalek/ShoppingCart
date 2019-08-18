# ShoppingCart v1.0
Backend implementation

## Technology used
BackEnd
* NodeJs
* Express
* Ramda - Functional programming JS library
* Joi - property validation

### Get Started
```
npm ci
npm start
```
## Optional
```
npm run lint
```

## Endpoints
Get all the available products
```
GET http://localhost:9000/stock/products
```

Get all items in the shopping cart
```
GET http://localhost:9000/shopping/cart
```

Add an item in the shopping cart
```
POST http://localhost:9000/shopping/cart?name=Axe
```

Remove an item in the shopping cart
```
DELETE http://localhost:9000/shopping/cart?name=Axe
```
