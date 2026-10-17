// Call back hell********************************************
//1
// function getUser(userId, success, error) {
//     success({ id: 101 });
// }

// // getUser()
// // error =function(){}
// // error(message)
// // error = function(err) {
// //     handleError(err);
// // }
// //2
// function getProfile(userId, success, error) {
//     success({ id: 201 });
// }
// //3
// function getPosts(profileId, success, error) {
//     success([{ id: 301 }]);
// }

// //4
// function getComments(postId, success, error) {
//     success([{ id: 401 }]);
// }


// // 5
// function getLikes(commentId, success, error) {
//     success(100);
// }


// // 6
// function handleError(err) {
//     console.log("Error:", err);
// }


// // getuser -> function --> getProfile -- > function ->. post 
// // getuser(id, function(){}, function(){})

// getUser(1, function(user) {

//     getProfile(user.id, function(profile) {

//         getPosts(profile.id, function(posts) {

//             getComments(posts[0].id, function(comments) {

//                 getLikes(comments[0].id, function(likes) {

//                     console.log(likes);

//                 }, function(err) {
//                     handleError(err);
//                 });

//             }, function(err) {
//                 handleError(err);
//             });

//         }, function(err) {
//             handleError(err);
//         });

//     }, function(err) {
//         handleError(err);
//     });

// }, function(err) {
//     handleError(err);
// });


// promise   ********************************************************


// function getUser(userId) {
//     return Promise.resolve({ id: 101 });
// }

// function getProfile(userId) {
//     return Promise.resolve({ id: 201 });
// }

// function getPosts(profileId) {
//     return Promise.resolve([{ id: 301 }]);
// }

// function getComments(postId) {
//     return Promise.resolve([{ id: 401 }]);
// }

// function getLikes(commentId) {
//     return Promise.resolve(100);
// }

// function handleError(err) {
//     console.log("Error:", err);
// }


// // promise chaning^^^^^^^^^^^^
// getUser(1)
//     .then(function(user) {
//         return getProfile(user.id);
//     })
//     .then(function(profile) {
//         return getPosts(profile.id);
//     })
//     .then(function(posts) {
//         return getComments(posts[0].id);
//     })
//     .then(function(comments) {
//         return getLikes(comments[0].id);
//     })
//     .then(function(likes) {
//         console.log(likes);
//     })
//     .catch(function(err) {
//         handleError(err);
//     });

// promise
// fectch()******************************************************
fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => {
//         console.log('Status:', response.status);
//         return response.json();
//     })
//     .then(user => {
//         console.log('User:', user.name);

//         return fetch(
//             `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
//         );
//     })
//     .then(response => response.json())
//     .then(posts => {
//         console.log('Posts:', posts.length);

//         return posts.filter(post => post.userId === 1);
//     })
//     .then(filteredPosts => {
//         console.log('Filtered Posts:', filteredPosts);
//     })
//     .catch(error => {
//         console.error('Chain failed:', error.message);
//     })
//     .finally(() => {
//         console.log('Chain complete');
//     });



// async***************************************************************

async function loadUserData(id) {
    try {
        const userRes = await fetch(`/api/users/${id}`);
        const user = await userRes.json();
        const postRes = await fetch(`/api/posts?userId=${user.id}`);
        const posts = await postRes.json();
        return { user, posts };
    } catch (err) {
        console.error('Failed:', err.message);
    }
}

