# Maya Real Estate v0.1.1 - the server

## The Idea:

- mayaRealEstate is a simple app that wants to be just like Haya Real Estate ... when it grows up.

## Getting started

### Preview:

- https://6150e42a07a454a921aff2be--adoring-northcutt-ab976a.netlify.app

### Local instalation:

- clone the repo <$ https://github.com/SilviuDN/haya-real-estate.git>

#### server side ( on PORT 5000 ):

- npm i
- npm run dev

#### client side ( localhost:3000 ):

- npm i
- npm start

## Data persistency:

- MongoAtlass for the db
- Cloudinary for the images

## Environment variables:

- PORT=5000 (local)
- DB_REMOTE --> remote DB connection
- MONGODB_URI --> local DB connection
- DOMAIN_LOCAL=http://localhost:3000
- SESS_SECRET
- CLOUDINARY_NAME
- CLOUDINARY_KEY
- CLOUDINARY_SECRET
- NETLIFY_BASE_URL

## Backend dependencies:

    "bcrypt": "^5.0.1",
    "cloudinary": "^1.27.0",
    "connect-mongo": "^4.6.0",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "hbs": "^4.1.2",
    "mongoose": "^6.0.7",
    "morgan": "^1.10.0",
    "multer": "^1.4.3",
    "multer-storage-cloudinary": "^4.0.0",
    "serve-favicon": "^2.5.0"

## Frontend dependencies:

    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.4",
    "bootstrap": "^5.1.1",
    "react": "^17.0.2",
    "react-bootstrap": "^1.6.4",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"

## Models:

- User:

  - email: {type: String, unique: true,},
  - password: {type: String,},
  - role: {type: String, enum: ['admin', 'user', 'agent'], default: 'user',},
  - name: {type: String,},
  - surname: {type: String,},
  - properties: [{type: Schema.Types.ObjectId, ref: 'Property'}],

- Property:

  - owner: {type: Schema.Types.ObjectId, ref: 'User', required: true,},

  - type:{type: String, enum: ['piso', 'chalet'] },
  - name: {type: String,},
  - status: {type: String,
  - enum: ['segunda mano', 'obra nueva', 'pendiente inscripción', 'disponible', 'vendido', 'proindiviso', 'tapiado', 'inmueble con cargas', 'inmueble en situación - especial'],},
  - description: {type: String,},
  - autonomousCommunity: {type: String,},
  - city: {type: String,},
  - location: {
  - type: {
    type: String,
    },
  - coordinates: [Number],
    },

  - size: {type: Number,},
  - rooms: {type: Number,},
  - bathrooms: {type: Number,},

  - image: {type: String,},

  - price: {type: Number,},
  - discountedPrice: {type: Number,},
  - discount: {type: Number,},

## Routes:

### auth.routes:

#### GET:

/auth/logout
/auth/isLoggedIn

#### POST:

/auth/signup
/auth/login

### properties.routes:

#### GET:

/properties/
/properties/:property_id

#### POST:

/properties/new

#### PUT:

/properties/edit/:property_id

#### DELETE:

/properties/:property_id

### UPLOAD.routes:

#### POST:

/upload/image

## Enjoy!
