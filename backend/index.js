const express = require('express');
const UserRouter = require('./routers/UserRouter');
const UrlRouter = require('./routers/UrlRouter');
const { connectDb } = require('./database/database');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const app = express();
const dotenv = require('dotenv');
// const pm2

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(UrlRouter);

app.get('/', (req, res) => {
    res.send('success');
});

const startServer = async () => {
    await connectDb();
    app.listen(PORT, () => {
        console.log(`server is running at  http://localhost:${PORT}`);
    });
};

startServer();
module.exports = app;
