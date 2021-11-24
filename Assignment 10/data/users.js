const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const bcrypt = require('bcryptjs');
const saltRounds = 16;


module.exports = {
    async createUser(username, password){
        await this.checkUsername(username)
        await this.checkPassword(password)
        const userCollections = await users()
        const user = await userCollections.findOne({ "username" : { $regex : new RegExp(username, "i") } } )
        if(user) throw [400,'Username already exist']
        const hash = await bcrypt.hash(password, saltRounds);

        const newUser = {
            username,
            hash
        }
        let insertedId = await userCollections.insertOne(newUser)
        if(insertedId.insertedCount === 0 ) throw [500, `Can not create user ${username}`]
        return {userInserted: true}
        
    },
    async checkUser(username, password){
        await this.checkUsername(username)
        await this.checkPassword(password)
        const userCollections = await users()
        const user = await userCollections.findOne({ "username" : { $regex : new RegExp(username, "i") } } )
        if(!user) throw [400,'Either the username or password is invalid']
        let compareRes = await bcrypt.compare(password, user.hash);
        if(!compareRes) throw [400,'Either the username or password is invalid']
        return{authenticated: true}
    },
    async checkUsername(uname) {
        if(!uname) throw [400,'Kindly provide Username']
        if(typeof(uname) !== 'string') throw [400,'Kindly provide string Username']
        // uname = uname.trim()
        if(uname.length === 0) throw [400,'Blank Username']
        let spaceregex = /\s/g
        let spregex = /[^\w]/g
        if(spaceregex.test(uname)) throw [400,'Username can not contain spaces']
        if(spregex.test(uname)) throw [400,'Username can not contain special symbols']
        if(uname.length<4) throw[400,'Username is too short']
        return true
        
    },
    async checkPassword(pwd) {
        if(!pwd) throw [400,'Kindly provide Password']
        if(typeof(pwd) !== 'string') throw [400,'Kindly provide string Password']
        // pwd = pwd.trim()
        if(pwd.length === 0) throw [400,'Blank Password']
        let spaceregex = /\s/g
        if(spaceregex.test(pwd)) throw [400,'Password can not contain space']
        if(pwd.length < 6) throw[400,'Password is too short']
        return true
    }
}