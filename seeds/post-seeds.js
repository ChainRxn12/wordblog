const { Post } = require('../models');

const postData = [
    {
        title: 'Bacon ipsum dolor amet',
        post_content: 'shank ribeye leberkas, bresaola swine turducken venison prosciutto ground round pork meatball tenderloin fatback jowl. Shankle pastrami pork loin',
        user_id: 1
    },
    {
        title: 'Ham hock ground',
        post_content: 'Shoulder fatback pork belly shankle pig corned beef.',
        user_id: 2
    },
    {
        title: 'Pastrami picanha',
        post_content: 'drumstick landjaeger porchetta strip steak rump cupim',
        user_id: 3
    },
    {
        title: 'Cupcake ipsum dolor sit amet.',
        post_content:'Donut chupa chups bonbon jelly dessert. Jujubes candy canes tootsie roll cheesecake',
        user_id: 4
    },
    {
        title: 'Icing brownie',
        post_content: 'Cheesecake cheesecake soufflé jelly brownie brownie candy sweet roll sugar plum.',
        user_id: 5
    },
    {
        title: 'I love cheese',
        post_content: 'when the cheese comes out everybodys happy pepper jack mascarpone.',
        user_id: 6
    },
    {
        title: 'The big cheese',
        post_content: 'Manchego cheese and wine fromage cream cheese lancashire smelly cheese port-salut feta.',
        user_id: 7
    },
    {
        title: 'Im baby wolf',
        post_content: 'Mixtape cornhole before they sold out jean shorts. Tote bag polaroid salvia',
        user_id: 8
    },
    {
        title: 'Prism pok pok',
        post_content: 'Brunch tofu YOLO meh.',
        user_id: 9
    },
    {
        title: 'Plaid 8-bit hexagon thundercats.',
        post_content: 'Migas tofu selvage art party freegan, humblebrag dreamcatcher brunch tumeric try-hard bitters.',
        user_id: 10
    },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;