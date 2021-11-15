# Brolan

## Live Demo

[Click here](https://brolan.damien-mathieu.fr/) 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start 

Modify this lines in `app.js`:

```app.use(
    session({
        key: "exemple",
        secret: "YourSecretHere",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    user: 'admin',
    host: 'localhost',
    password: '',
    database: 'brolan',
});
```

And for the cors librairy if you want to use it 

```app.use(
    cors({
        origin: ['https://example.com'],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
```

Finally, run these commands at the root of your project:

`run ./app.js`

`yarn start`

