import express from "express";
import * as authController from "../controllers/authController.js";

const router = express.Router();

router.route("/signup").post(authController.createUser);
router.route("/login").post(authController.userLogin);
router.route("/logout").get(authController.userLogout);
router.route("/dashboard").get(authController.userDashboardPage);


export default router;