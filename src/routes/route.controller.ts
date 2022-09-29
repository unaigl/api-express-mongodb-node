import { RequestHandler } from "express";
import Profile from "./model";

// get, create, update, delete from Profile scheme that it's been created using Mongoose
// Profile.find() // Profile.FindOne({id: 1}) // Profile.findById( 1 )

// GET HOME
export const getHomePage: RequestHandler = async (req, res) => {
  // devolver un html compuesto con "ejs"
  const profiles = await Profile.find();
  if (!profiles) return res.status(301).json("Home has not data to render");
  // agregar logica
  const names = profiles.map(
    (p) =>
      `My name is ${p.name}, I'm ${p.age} and I work as ${p.job} with ${p._id} id`
  );
  // console.log(profiles);
  return res.json(names);
};

// GET //TODO:
export const getProfile: RequestHandler = async (req, res) => {
  const profile = await Profile.findById(req.params.id); // sin parentesis, sino devuelve otro objeto complejo
  if (!profile) return res.status(301).json("profile does not exist");
  return res.json(profile);
};

// CREATE
export const createProfile: RequestHandler = async (req, res) => {
  const name = await Profile.findOne({ name: req.body.name });
  if (name) return res.status(303).json("Profile username not available");

  const profile = new Profile(req.body);
  const saveProfile = await profile.save();
  return res.json(saveProfile);
};

// UPDATE
export const updateProfile: RequestHandler = async (req, res) => {
  const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!profile) return res.status(301).json("Profile not found");
  return res.json(profile);
};

// DELETE
export const deleteProfile: RequestHandler = async (req, res) => {
  const profile = await Profile.findByIdAndDelete(req.params.id);
  if (!profile) return res.status(301).json("Profile not found");
  return res.json(profile);
};
