const { Comment } = require('../models');

const commentData = [{
    comment_text: " One Night in Beijing",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "One night in Singapore",
        user_id: 2,
        post_id: 2
},
{
    comment_text: "One Night in Hong Kong",
        user_id: 3,
        post_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;