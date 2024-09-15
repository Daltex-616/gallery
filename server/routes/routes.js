const express = require("express")
const multer = require("multer")
const path = require("path")

const router = express.Router()

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname,"../images"),
    filename:(req,file,cb) =>{
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const fileUpload = multer({
    storage:diskstorage
}).single("image")

router.use('/', (req,res)=>{
    res.send("gholi")
})

router.post('/images/post', fileUpload ,(req,res)=>{
    console.log(req.file)

})

module.exports = router