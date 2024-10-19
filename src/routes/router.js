//создаем экземпляр класса роутер
const express = require(`express`);
const router = express.Router();

//импортируем маршруты
const userRoutes = require(`./userRoutes/userRoutes`);

//добавляем необходимы функционал к роутеру
router.use(`/users`, userRoutes);

//экспортируем роутер
module.exports = router;