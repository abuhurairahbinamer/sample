class BlogsDetailsDTO{
    constructor(blog){
        this._id=blog._id
        this.authorId=blog.author._id,        
        this.content=blog.content,
        this.createdAt=blog.createdAt
        this.title=blog.title,
        this.photo=blog.photoPath
        this.authorName=blog.author.name;
        this.authorUsername=blog.author.username;
        
    }
}

module.exports=BlogsDetailsDTO;