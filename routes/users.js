const express = require("express");
const {createUser,getUsers,getUser,deleteUser,updateUser} = require("../controllers/users.js")




const router = express.Router();

//todas las rutas posteriores tienen un /users/ detras suyo
router.get("/",getUsers);


router.post("/",createUser);


router.get("/:id",getUser)


router.put("/:id",updateUser)


router.delete("/:id",deleteUser)

module.exports = router;