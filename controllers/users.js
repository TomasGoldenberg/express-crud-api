const { v4: uuidv4 } = require('uuid');

let users = []

const createUser = (req,res)=>{
    const preUser= req.body;
    const userId = uuidv4();

    const user ={...preUser, 
        id:userId
    }

    users.push(user);

    res.send(`User ${user.firstName} Created, a new ${user.job} in the group`)
}

const getUsers = (req,res)=>{ 
    console.log(users)
    res.send(users);
}

const getUser = (req,res)=>{
    const {id}   = req.params;
 
    const user = users.find(user => user.id === id);
 
     res.send(`${user.firstName} age is ${user.age}job is ${user.job}!  `)
 }

 const deleteUser = (req,res)=>{
    const {id} = req.params;

    users = users.filter((user) => user.id !== req.params.id);

    res.send(`The user: ${id} has been removed`);
}

const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName,lastName, age , job} = req.body;

    
    const user = users.find(user => user.id === id);

    

    if(firstName){
        user.firstName = firstName
    }

    if(lastName){
        user.lastName = lastName
    }

    if(age){
        user.age = age
    }

    if(job){
        user.job = job
    }
    
    res.send(`${user.id} has updated `)


}
module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}