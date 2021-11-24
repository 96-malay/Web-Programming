const express = require('express');
const router = express.Router();
const userData = require('../data/users')

router.get('/',(req,res) => {
    if(req.session.user) {
        // res.render('auth/private',{username:'Malay'}) //req.session.user.username
        res.redirect('/private') //user.username
    }else{
        res.render('auth/login',{page_title:'Login'})
    }
})

router.get('/signup',(req,res) => {
    if(req.session.user){
        // res.render('auth/private',{username:'Malay'}) //user.username
        res.redirect('/private') //user.username
    }else{
        res.render('auth/signup',{page_title:'Signup'})
    }
})
router.post('/signup',async (req,res) => {
    // console.log('this is signup post router')
    const {username,password} = req.body
    try{
        await userData.checkUsername(username)
        await userData.checkPassword(password)
        let result = await userData.createUser(username,password)
        if(result.userInserted){
            // res.render('auth/login')
            res.redirect('/')
        }

     }catch(e){
         res.status(e[0] || 500 ).render('auth/signup',{error_msg:e[1],
                                                        username:username,
                                                        password:password,
                                                        page_title:'Signup'} 
     
                                                    || {error_msg:'Internal Server Error',
                                                        username:username,
                                                        password:password,
                                                        page_title:'Signup'})
     }
   

})


router.post('/login',async (req,res) => {
    // console.log('this is login post router')
    const {username,password} = req.body
    try{
        await userData.checkUsername(username)
        await userData.checkPassword(password)
        let result = await userData.checkUser(username,password)
        if(result.authenticated){
            req.session.user = username
            res.redirect('/private')
        }

     }catch(e){
         res.status(e[0] || 500 ).render('auth/login',{error_msg:e[1],
                                                       username:username,
                                                       password:password,
                                                       page_title:'Login'} 
                                                
                                                   || {error_msg:'Internal Server Error',
                                                       username:username,
                                                       password:password,
                                                       page_title:'Login'})
     }
})

router.get('/private',(req,res) => {
    // console.log('this is private get router')
    if(req.session.user){
        res.render('auth/private',{username:req.session.user,page_title:'Private'})
    }else{
        res.redirect('/')
    }
})
router.get('/logout',(req,res) => {
    // console.log('this is logout get router')
    if(req.session.user){
        req.session.destroy();
    // res.send('Logged out');
        res.render('auth/logout',{page_title:'Logout'})
    }else{
        res.redirect('/')
    }
    

})

module.exports = router