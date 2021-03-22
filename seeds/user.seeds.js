const { User } = require('../models');

const userData = [{
        username: 'wolverine',
        password: 'adamantine'

    },
    {
        username: 'cyclop',
        password: 'optic_blast'
    },
    {
        username: 'phoenix',
        password: 'mindcontrol'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;