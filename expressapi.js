const FaunaService = require("@brianmmdev/faunaservice")
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())

const service = new FaunaService("your_fauna_key")

// Get all tasks
app.get("/tasks", async (req, res) => {
  let records = await service.listRecords("TaskData")
  res.json(records)
})

// Get a single task by id
app.get("/tasks/:id", async (req, res) => {
  let record = await service.getRecordById("TaskData", req.params.id)
  res.json(record)
})

// Create a task
app.post("/tasks", async (req, res) => {
  let data = req.body
  let created = await service.createRecord("TaskData", data)
  res.json(created)
})

// Update a task
app.put("/tasks/:id", async (req, res) => {
  let updates = req.body
  let updated = await service.updateRecord("TaskData", req.params.id, updates)
  res.json(updated)
})

app.delete("/tasks/:id", async (req, res) => {
  await service.deleteRecord("TaskData", req.params.id)
  res.status(200).send()
})

app.listen(3000, () => console.log("API is running!"))