const db = require("../models")


const index= (req,res) => {
    db.Food.find().then ((result ) => {
        res.send(result)
      
    })
    // res.send(" Get route working")
}

const create =(req,res) => {
    db.Food.create(req.body, (error, createdFood) =>{
        if(error) return res.status(400).json({ error: error.message})
        console.log("error message",error)
        return res.status(200).json(createdFood)
    })
}



module.exports={
    index,
    create,
}