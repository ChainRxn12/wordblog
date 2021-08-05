// create commentData seeds

const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Cat ipsum dolor sit amet, one of these days im going to get that red dot',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Ha! this may save us a visit to Brixton Road, whispered Holmes.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Dream of the minds eye are creatures of the cosmos Sea of Tranquility the carbon in our apple pies two ghostly',
        user_id: 3,
        post_id: 3
    },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;