const express = require("express");
const listViewRouter = express.Router();

const listTaksCompleted = require('../Public/list-Task-Completed.json');
const listTaksIncompleted = require('../Public/list-Task-Incompleted.json');

listViewRouter.route('/completas').get( (req, res) => {
    //send, sendFile, end, json, status, redirect.

    const tareasCompletas = listTaksCompleted.filter(tarea => tarea.estado == "completada"); 

    res.send(tareasCompletas);
})

listViewRouter.get('/incompletas', (req, res) => {
    //send, sendFile, end, json, status, redirect.

    const tareasIncompletas = listTaksIncompleted.filter(tarea => tarea.estado == "incompleta"); 

    res.send(tareasIncompletas);
})




module.exports = listViewRouter;