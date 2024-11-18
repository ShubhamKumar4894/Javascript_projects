// const button= document.querySelector('button');
// const image= document.querySelector('img');
// button.addEventListener('click',function(){

//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response)=>response.json())
//     .then((json)=>{
//         console.log(json.message)
//         image.src=json.message
//     })
// })

// const res= document.querySelector('#resolve');
// const rej= document.querySelector('#reject');
// const p= new Promise((resolve,reject)=>{
//     res.addEventListener('click',()=>{
//         resolve('promise resolve');
//     })
//     rej.addEventListener('click',()=>{
//         reject('promise rejected');
//     })
// })
// p.then(()=>{
//     console.log('hii');
// }).catch(()=>{
//     console.log('rejected');
// })

// fetch('https://dummyjson.com/auth/RESOURCE').then((res)=>{
//     console.log(res.json());
// })

function test(){
    console.log('hello')
    throw 'unreachable';
    console.log('fk')
}
test()