import mongoose from "mongoose";
import slugify from "slugify";
const {
    Schema
} = mongoose;

const courseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
});
courseSchema.pre("validate", function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    })
    next()
});

const Course = mongoose.model("Course", courseSchema);
export default Course;