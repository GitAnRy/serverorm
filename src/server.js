require(`dotenv`).config();

//экспортируем и инициализируем экспресс
const express = require(`express`);
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3000;
const router = require(`./routes/router`);

app.use(`/`, function(req, res, next) {
    console.log(`Url - `, req.originalUrl);
    next();
});

//назначаем обработчик маршрутов
app.use(`/`, router);

//запускаем сервер
app.listen(PORT, () => {
    console.log("Server is runningon port " + PORT);
});