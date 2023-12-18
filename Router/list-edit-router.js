const express = require("express");
const listViewRouter = require("./list-view-router");
const listEditRouter = express.Router();

let listTask = require("../Public/list-Task.json")
const listTaksCompleted = require('../Public/list-Task-Completed.json');
const listTaksIncompleted = require('../Public/list-Task-Incompleted.json');

listEditRouter.route('/task/:id').post ((req,res) =>{

    const nuevaTarea = req.body;

    listTask.push(nuevaTarea)

    res.status(201).send(nuevaTarea)

}).delete((req, res) =>{

    const id = req.params.id;

    listTask = listTask.filter(tarea => tarea.id !== id);

    res.sendStatus(204);

}).put((req,res)=>{
    const {id, descripcion ,estado} = req.query;

    const taskUpdate = listTask.map((tareas) =>{
        if (tareas.id == id) {
            return {... id, descripcion: descripcion}
        }else{
            return id
        }
    })
})

module.exports = listEditRouter;