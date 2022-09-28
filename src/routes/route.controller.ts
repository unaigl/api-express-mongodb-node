import { RequestHandler } from "express";
import Profile from "./model";

// get, create, update, delete from Profile scheme that it's been created using Mongoose

// GET HOME
export const getHomePage: RequestHandler = async (req, res) => {
  // devolver un html compuesto con "ejs"
  const profiles = await Profile.find();
  if (!profiles) return res.status(301).json("Home has not data to render");
  // // agregar logica
  // const names = profiles.map(
  //   (p) => `My name is ${p.name}, I'm ${p.age} and I work as ${p.job}`
  // );
  console.log(profiles);
  return res.json(profiles);
};

// GET //TODO:
export const getProfile: RequestHandler = async (req, res) => {
  const profile = Profile.findOne({ name: req.params.id });
  // console.log("_id", req.params.id);
  console.log("_id", profile);
  // if (!profile) return res.status(301).json("profile does not exist");
  // console.log(profile);
  // return res.json(profile);
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
export const updateProfile: RequestHandler = (req, res) => {
  console.log(req.params, req.body);
  return res.json("updateProfile");
};

// DELETE
export const deleteProfile: RequestHandler = (req, res) => {
  return res.json("deleteProfile");
};
