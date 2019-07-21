const isLogged = (req, res, next) => {
  if(req.session.currentUser){
    next()
  }else{
    res.redirect('/auth/login')
  }
}
module.exports=isLogged