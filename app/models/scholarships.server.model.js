// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'ArticleSchema'
const scholarshipSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
	email: {
		type: String,
		// Validate the email format
    //   match: [/.+\@.+\..+/, "Please fill a valid email address"]
    required: 'must have an email'
	},
    title: {
        type: String,
        required: 'must have a job title'
    },
    requirements: {
        type: String,
        required: 'please fill in skills'
    },

    duration: {
        type: String,
        required: 'please enter duration'
    },

    description: {
        type: String,

    },
    paid : {
        type: String,
        default: null
    },
    
    adminRejected: {
        type: Boolean
    },
    approved: {
        type: Boolean,
        default: false
    },
    
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
scholarshipSchema.index ( { 
    title : "text",
    name : "text",
    description: "text",
    requirements: "text"});
// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('scholarship', scholarshipSchema);