import { Router } from "express"
import {
  getProducts,
  getProduct,
  createProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/controllers"
import { validateSchema } from "../middleware/ValidateSchema.middleware"
import { createProductZod, updateProductZod } from "../schema/zodProduct.types"

const router = Router()

router.get("/", getProducts)
router.post("/create", validateSchema(createProductZod), createProducts)
router.get("/product/:id", getProduct)
router.put("/product/:id", validateSchema(updateProductZod), updateProduct)
router.delete("/product/:id", deleteProduct)

export default router
