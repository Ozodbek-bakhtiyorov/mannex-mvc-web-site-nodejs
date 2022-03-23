module.exports = (app)=>{
  require('./connect-mongodb')
  const port = process.env.PORT || 5000;
  app.listen(port,err=>err?console.error(err):console.log(`Server has been started on development in Port: ${port} successfully :} ...`.rainbow))
}