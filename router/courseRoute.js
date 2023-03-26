import express from "express";
import * as CourseController from "../controllers/courseController.js";

const router = express.Router();

router.route("/").post(CourseController.createCourse);
router.route("/").get(CourseController.getAllCourse);
router.route("/:slug").get(CourseController.getACourse);

export default router;