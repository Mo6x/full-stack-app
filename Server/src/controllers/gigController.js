import Gig from "../models/gigModel.js";
import createError from "../utils/createError.js";


// YOU CAN CREATE A GIG ONLY IF YOU ARE A SELLER
export const createGig = async (req, res, next)  => {
     if(!req.isSeller)
     return next(createError(403, "Only sellers can create a gig!"));

     const newGig = new Gig({
        userId: req.userId,
        ...req.body,
     });

     try {
        const savedGig = await newGig.save();
        res.status(201).json(savedGig);
     } catch(err) {
        next(err);
     };
};

// YOU CAN ONLY DELETE YOUR OWN GIG
export const deleteGig = async (req, res, next)  => {
     try{
        const gig = await Gig.findById(req.params.id);
        if(gig.userId !== req.body);
        return next(createError(403, "You can delete only your gig!"));
        
        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).send("Gig has been deleted!");
     } catch (err) {
        next(err);
     }
};

// FIND SINGLE GIG
export const getGig = async (req, res, next)  => {
    try {
       const gig = await Gig.findById(req.params.id);
       if(!gig) next(createError(404, "Gig not found!"));
       res.status(200).send(gig);
    } catch(err){
        next(err);
    };
};

// FIND MULTIPLE GIGS
export const getGigs = async (req, res, next)  => {
    const q = req.query;
    const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),   
    ...((q.min || q.max) && {
        price: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    };
    try{
        const gigs = await Gig.find(filters);
        res.status(200).send(gigs);
    } catch(err) {
        next(err);
    };
};
