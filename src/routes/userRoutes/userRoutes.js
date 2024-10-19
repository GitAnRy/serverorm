//создадим экземпляр класса роутер
const express = require(`express`);
const router = express.Router();

//импортируем обработчики маршрутов
const listUsers = require(`./listUser`);
const createUser = require(`./createUser`);
const getUser = require(`./getUser`);
const updateUser = require(`./updateUser`);
const deleteUser = require(`./deleteUser`);

//добаляем необходимый функционал к роутеру
router.get(`/`, listUsers);
router.post(`/`, createUser);
router.get(`/:id`, getUser);
router.put(`/:id`, updateUser);
router.delete(`/:id`, deleteUser);

//экспортируем роутер
module.exports = router;