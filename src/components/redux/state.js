let state = {

    profilePage: {
        posts: [
            { id: 0, message: 'hi', like: 34 },
            { id: 1, message: 'how are you?', like: 97 },
            { id: 2, message: 'h?', like: 9 },
            { id: 3, message: 'ou?', like: 15 }

        ]
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'szrga' },
            { id: 3, name: 'guka' },
            { id: 4, name: 'uia' },
        ],
    
        messages: [
            { id: 1, message: 'hi' },
            { id: 2, message: 'how are you?' },

        ]
    }
  /*  sidebar: {}*/
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        like: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;