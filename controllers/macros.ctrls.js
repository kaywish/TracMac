const db = require("../models")


const index = (req, res) => {
    db.food.find({}, (error, holidays) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json({
        holidays,
        
      });
    });
  };

const create =(req,res) => {
    db.food.create(req.body, (error, createdFood) =>{
        if(error) return res.status(400).json({ error: error.message})
        console.log("error message",error)
        return res.status(200).json(createdFood)
    })
}


const destroy = (req, res) => {
    db.food.findByIdAndDelete(req.params.id, (error, deletedHoliday) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json({
        message: `Holiday ${deletedHoliday.name} deleted successfully`
      });
    });
  };

module.exports={
    index,
    create,
    destroy,
    
}