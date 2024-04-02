const mongoose = require("mongoose");

//Based upon how far the job listing is from the deadline, the           
// cards should have a color. For simplicity, the listing which 
// are due in more than 21 days should be green, less than 14 days 
// should be yellow and less than 3 days should be red

//  The listing should contain: title, description, location, deadline, contact phone number and contact email




const jobs = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    deadline: {
      type: Date,
      required: true
    },
    interest: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobsPosting", jobs);
