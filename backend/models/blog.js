const mongoose = require('mongoose')

mongoose.set('strictQuery',false)

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes:{
      type:Number,
      default:0
    },
  })
  
blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


  module.exports = mongoose.model('Blog', blogSchema) //forgot the s on exports for the second time