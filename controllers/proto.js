

const getPosts = (req, res, next) => {
    res.status(200)
    .json({
        posts: [ 
            {
                title: "The Unbreakable",
                year: 2000 ,
                producer: " M. Night Shyamalan"
            },

            {
                title: "Split",
                year: 2016 ,
                producer: "M. Night Shyamalan"
            }
        ]
    });

};



const postPost = (req, res, next) => {

    const title = req.body.title;
    const year = req.body.year;
    const producer = req.body.producer;
    

    res.status(201)
    .json({
        message: "Post submited successfully",
        post: { 
            id: new Date().toISOString, 
            title: title, 
            year: year,
            producer: producer
        }
    });
};



module.exports = {
    getPosts,
    postPost
}