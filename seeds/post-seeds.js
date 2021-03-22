const { Post } = require('../models');

const postData = [{
    user_id:1,
    title: 'One Night in Beijing',
    content: 'Dumpling and Noodle',
},
{
    user_id: 2,
    title: 'One Night in Singapore',
    content: 'Laksa and Chicken rice'
    
},
{
    user_id: 2,
    title: 'One Night in Hong Kong',
    content: 'Claypot rice and Wonton noodle'
    
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;