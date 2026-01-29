const Cat = require("../models/Cat.js")

const send_out_cats = async(req,res)=>{
    try{
        const cats = await Cat.find()
        if(cats.length === 0){
            throw Error("There is no cats at this point :p")
        }else{
            console.log(cats)
            res.status(200).json({cats})
        }
    }catch(err){
        console.log(err)
        res.status(400).json({err})
    }
}

module.exports = {
    send_out_cats
}