const Post = require('../models/post');

module.exports = {
  async getAll (req, res) {
    let posts = await Post.find({})
    res.send(posts)
  },
  async getSinglPost(req,res){
    try{
      const id = req.params.id;
      const post = await Post.findOne({
        _id : id
      });
      res.send(post);
    } catch (err) {
      res.status(500).send({
        error: err
      })
    }
    
    res.send("post2")
  },
  async createPost(req,res){
    let postDate = new Date(); 
    req.body.date = postDate.getDate() + "-" + postDate.getMonth() + "-" + postDate.getFullYear();
    try{
      const newPost = await Post.create(req.body);
      res.send(newPost);
    } catch (err) {
        res.status(400).send({
        error: err
      })
    }  
  }
}