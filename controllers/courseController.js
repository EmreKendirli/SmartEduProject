import Course from "../models/Course.js";
import Category from "../models/Category.js"

const createCourse = async (req, res) => {
    
    try {
        const course = await Course.create(req.body);
        res.status(201).json({
            succeded: true,
            course
        })
    } catch (error) {
        res.status(400).json({
            succeded: false,
            error
        })
    }


}

const getAllCourse =async (req, res) => {
    try {
        const categorySlug = req.query.categories;
        const category = await Category.findOne({slug:categorySlug})
    
        let filter = {};
        if(categorySlug) {
          filter = {category:category._id}
        }
        const courses = await Course.find(filter);
        const categories = await Category.find();
        res.status(200).render("courses",{
            courses,
            categories,
            page_Name: "course"
        })
    } catch (error) {
        res.status(400).json({
            succeded: false,
            error
        })
    }
}

const getACourse =async (req, res) => {
    try {
        const course =await Course.findOne({slug: req.params.slug});
        res.status(200).render("course",{
            course,
            page_Name: "course"
        })
    } catch (error) {
        res.status(400).json({
            succeded: false,
            error
        })
    }
}

export {
    createCourse,
    getAllCourse,
    getACourse
};