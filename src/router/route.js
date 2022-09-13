const express = require("express");
const Employees = require("../db/conn");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));

route.get("/create", (req,res)=>{
    res.render("index",{
        title:"Create Data",
    });
});

route.post("/create", async (req,res)=>{
    try {
        if (req.body._id == "") {
            const createData = new Employees({
                fullname:req.body.fullname,
                email:req.body.email,
                phone:req.body.phone,
                city:req.body.city,
            })
            const saveData = await createData.save();
            res.redirect("/");
        } else {
            const updateData = await Employees.findOneAndUpdate({_id:req.body._id},req.body,);
            res.redirect("/")
        }
    } catch (error) {
        res.send(error);
    }
});

route.get("/",async(req,res)=>{
    try {
        const readData = await Employees.find();
    res.render("list",{
        read:readData,
        
    });
    } catch (error) {
        res.send(error);
    }
});

route.get("/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const finddatabyid = await Employees.findById(_id);
        res.render("index",{
            edit:finddatabyid,
            title:"Update Data"
        })
    } catch (error) {
        res.send("error");
    }
});

route.get("/create/:id",async (req,res)=>{
    const _id = req.params.id;
    const deleteData = await Employees.findByIdAndDelete(_id);
    res.redirect("/");
});


module.exports=route;