const Joi=require('joi');
const Comment=require('../models/comment')
const CommentDTO=require("../dto/comment")
const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;
const commentController={
 async create(req,res,next){
const commentSchema=Joi.object({
  content:Joi.string().required(), 
  author:Joi.string().regex(mongodbIdPattern).required(),
  blog:Joi.string().regex(mongodbIdPattern).required() 
})
const {error}=commentSchema.validate(req.body);
if(error){
    return next(error);
}

const {content,author,blog}=req.body;

const commentForBlog=new Comment({
content,
author,
blog
})
let takenComment;
try {

    await commentForBlog.save();
    
} catch (error) {
    return next(error);
}

return res.status(201).json({message:"comment created"});

},


 async getById(req,res,next){
const CommentIdSchema=Joi.object({
    id:Joi.string().regex(mongodbIdPattern).required()
})

const {error}=CommentIdSchema.validate(req.params);

if(error){
    return next(error);
}

const {id}=req.params;
 let comments
try {
   comments=await Comment.find({blog:id}).populate("author");
} catch (error) {
    return next(error)
}

let commentDto=[];
for (let i=0; i<comments.length; i++){
    const CDTO=new CommentDTO(comments[i]);
    commentDto.push(CDTO);
}

return res.status(200).json({data:commentDto})

  }   
}
module.exports=commentController;