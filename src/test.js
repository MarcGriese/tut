
let data = fetch(
    'http:/localhost:8080/user'
    ).then((response) => {
        return response.json()
    }).then((data) => {
        return data
    })



console.log(data)



// console.log(user)

// !async function(){
//     let data = await fetch('http:/localhost:8080/user')
//         .then((response) => response.blob())
//         .then(data => {
//             return data;
//         })
//         .catch(error => {
//             console.error(error);
//         });
    
//     console.log(data);
//     }();