// app.js
const FaunaService = require('@brianmmdev/faunaservice');

// Initialize the service
const service = new FaunaService("your_fauna_key");

(async () => {
  // let task1 = {
  //   name: "Get tomatoes from the store",
  //   isComplete: false
  // }

  // let task2 = {
  //   name: "Make a chili for the party",
  //   isComplete: false
  // }

  // let task3 = {
  //   name: "Build a pet clothes app",
  //   isComplete: false
  // }

  // await service.createRecord("TaskData", task1)
  // await service.createRecord("TaskData", task2)
  // let output = await service.createRecord("TaskData", task3)
  // console.log(output)

  // let allRecords = await service.listRecords("TaskData")
  // console.log(allRecords)

  // let record = await service.getRecordById("TaskData", "292255935388189186")
  // console.log(record)

  // let updates = {
  //   isComplete: true
  // }
  // let updated = await service.updateRecord("TaskData", "292255935388189186", updates)
  // console.log(updated)

  // await service.deleteRecord("TaskData", "292255935388189186")

})()