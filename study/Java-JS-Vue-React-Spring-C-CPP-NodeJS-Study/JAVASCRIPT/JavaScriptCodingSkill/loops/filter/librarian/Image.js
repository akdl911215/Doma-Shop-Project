const image = [
    {
        path: './me.jpg',
        profile: false,
    },
];
console.log('image : ', image);

const profile = image.find((image) => image.profile) || {
    path: './default.jpg',
};
console.log('profile : ', profile);
