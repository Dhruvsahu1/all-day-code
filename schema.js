const userSchema = new mongoose.Schema({
    email: String
    password: String
    purchaseCourse:[{
        type:mongoose.schema.Types.objectId,ref:'course'
    }]

});
const purchaseCourse = new mongoose.Schema({
    title: String
    price: 5999
});

const user = mongoose.model('User',userSchema);
const course = mongoose.model('Course',CourseSchema);