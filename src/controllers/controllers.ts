import ProductSchema from "../schema/product.schema"
import { Request, Response } from "express"
import { CreateProductType } from "../schema/zodProduct.types"

export const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await ProductSchema.find()
    return res.json(data)
  } catch (error) {
    console.log(error)
  }
}
export const getProduct = async (req: Request, res: Response) => {
  try {
    const data = await ProductSchema.findById(req.params.id)
    return res.json(data)
  } catch (error) {
    console.log(error)
  }
}
export const createProducts = async (
  req: Request<unknown, unknown, CreateProductType>,
  res: Response
) => {
  console.log(req.body)
  try {
    const productExists = await ProductSchema.findOne({ name: req.body.name })
    if (productExists) return res.status(201).json("product already exists")

    const newProduct = new ProductSchema(req.body)
    console.log("newProduct", newProduct)
    const product = await newProduct.save()
    console.log("newProduct", product)
    res.status(200).json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json("eeerrror")
  }
}
export const updateProduct = async (req: Request, res: Response) => {
  try {
    /* Checking if data has modified */
    const data = await ProductSchema.findById(req.params.id)
    const product = {
      name: data?.name,
      price: data?.price,
    }
    const stringify = JSON.stringify(product)
    const stringifyNew = JSON.stringify(req.body)
    if (stringify === stringifyNew) return res.status(200).json("No updated")

    const productUpdated = await ProductSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!productUpdated) return res.status(200).json("No updated")
    return res.status(200).json(productUpdated)
  } catch (error) {
    console.log(error)
  }
}
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productDeleted = await ProductSchema.findByIdAndDelete(req.params.id)
    if (!productDeleted) return res.status(200).json("No updated")
    return res.status(200).json(productDeleted)
  } catch (error) {
    console.log(error)
  }
}
