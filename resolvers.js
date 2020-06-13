const user = {
    _id: "1",
    name: "Ali",
    email: 'thealiarain@gmail.com',
    picture: 'https://cloudinary/asdf'
}

module.exports = {
    Query : {
        me: () => user
    }
}