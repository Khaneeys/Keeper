const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(
  DB,
  {useNewUrlParser: true}
);

const noteSchema = {
  title: String,
  content: String
};

const Note = mongoose.model("Note",noteSchema);

const app = express();


app.use(cors());
app.use(express.json());

app.get('/note',(req,res)=>{
  Note.find({},function(err,foundNotes){
    res.send(foundNotes);
  });
});

app.post("/note/add",(req,res) => {
    let newNote = new Note({
      title:req.body.title,
      content:req.body.content
    });
  newNote.save();
  });

app.delete("/note/:id",(req,res) => {
  Note.findByIdAndDelete(req.params.id,function(err){
    if(!err){
      console.log("Successfully deleted");
    }else{
      console.log(err);
    }
  })
})


app.listen(4000, () => {
  console.log("Serve started on port 4000")
});
