import Gun from 'gun';

export const gun = Gun({
    peers: [
        'https://eight-pointer-server.herokuapp.com/gun'
    ]
});
