import express from "express";
import * as CourseController from "../controllers/courseController.js";
import * as roleMiddleware from "../middleware/roleMiddleware.js";


const router = express.Router();

router.route("/").post(roleMiddleware.a,CourseController.createCourse);
router.route("/").get(CourseController.getAllCourse);
router.route("/:slug").get(CourseController.getACourse);

export default router;