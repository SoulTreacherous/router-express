const express = require("express");
const app = express();
const listViewRouter = require("./Router/list-view-router");
const listEditRouter = require("./Router/list-edit-router")
const listTaksCompleted = require("./Public/list-Task-Completed.json")
const listTaksIncompleted = require("./Public/list-Task-Incompleted.json")
const port = 3000;

app.use('/tareas',listViewRouter)
app.use('/tareas',listEditRouter)

app.get('/',(req,res)=>{
    res.send("por enlace directo.")
})






app.listen(port, (req,res) =>{
    console.log("servidor Ejecutado..")
})