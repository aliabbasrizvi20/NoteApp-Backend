const express=require("express")
const router=express.Router();
const Note=require("../models/notes")
const authMiddleware=require("../middleware/auth")

    // Get all routes only for registered users
   
        router.get('/',authMiddleware, async(req,res)=>{
            try{

                const notes=await Note.find({user: req.user.id}).sort({createdAt:-1})
                res.json({success:true, notes})
            }
            catch(err){
                res.status(500).json({success:false, message:err.message})
            }
        });


        // Create a new note

        
        router.post('/',authMiddleware, async (req,res)=>{
            try{
                const {text,color,bold,italic,underline,isPinned}=req.body
                const newNote=await Note.create({
                    user:req.user.id,
                    text,
                    color,
                    bold,
                    italic,
                    underline,
                    isPinned 
                })
                res.status(201).json({success:true, note:newNote})
            }
            catch(err){
                res.status(500).json({success:false, message:err.message})
            }
        });

        // Update a note

        router.put('/:id',authMiddleware,async(req,res)=>{
            try{
                const note=await Note.findOneAndUpdate(
                    {_id:req.params.id, user:req.user.id},
                    req.body
                );
                if(!note) return res.status(404).json({success:false,message:"Note not found"})
                    res.json({success:true, note})
            }catch(err){
                res.status(500).json({success:false, message:err.message})
            }
        });

        // Delete a note

        router.delete("/:id",authMiddleware,async(req,res)=>{
            try{
                const note= await Note.findOneAndDelete(
                    {_id:req.params.id, user:req.user.id});
                    
                    if(!note) return res.status(404).json({success:false,message:"Note not found"})
                        res.json({success:true,message:"Note Deleted"})
            }catch(err){
                res.status(500).json({success:false, message:err.message})
            }
        })
        module.exports=router;