import express from 'express'
import {create,read,update,deleted} from '../controllers/categoryController.js'
const router = express.Router();

router.post("/",create)
router.get("/",read)
router.put("/",update)
router.delete("/",deleted)

export default router;