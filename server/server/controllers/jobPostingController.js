const JobsPosting =  require("../models/jobs")

const postJob = async (req, res, next) => {
    try{
    const{title, description, deadline,location, email, mobile } = req.body

   let givenDate =new Date(deadline);
    let date2 = new Date();
    let diffDays =(givenDate.getDate() -   date2.getDate())/ (1000 * 60 * 60 * 24); 

        if(diffDays <= 0){
            throw new Error(`Deadline date should be greater than todays date`)
        }

    let jobContent = {
        title,
        description,
        deadline: givenDate.toUTCString(),
        location,
        email,
        mobile
    }

    const job = new JobsPosting(jobContent)

    await job.save()
    res.status(200).json({message: 'Job posted sucessfully!'})
}catch(err){
 next(err)
}
} 

const allJobs = async(req,res,next) => {
    try{
        let jobs = await JobsPosting.find()
        res.status(200).json(jobs)
    }catch(err){
        next(err)
    }
}


const deleteJob = async(req,res,next)=> {

    try{
        const{id} = req.query
        if(!id) throw new Error("Please provide Job ID!")

        const job = await JobsPosting.findById(id)

        if(job){
            await JobsPosting.deleteOne({ _id: id })
            res.status(200).json({message: "Job deleted sucessfully"})
        }else{
            throw new Error("Invalid Job ID!")
        }
    }catch(err){
        next(err)
    }
}


const updateJobInterest = async(req,res,next) => {
    try{
    const {id} = req.query
    if(!id) throw new Error("please provide jobId")
    const job = await JobsPosting.findById(id)

    if(job){
        const filter = { _id: id };
        const update = { interest: !job.interest };
        await JobsPosting.findOneAndUpdate(filter, update);
        res.status(200).json({message: 'Your interest updated sucessfully'})
    }else{
        throw new Error("Invalid Job ID!")
    }
    
    
    }catch(err){
      next(err)
    }

}

module.exports={
    postJob,
    allJobs,
    deleteJob,
    updateJobInterest
}