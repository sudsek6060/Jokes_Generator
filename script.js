
const fetchApi = async function(){
    try {
        
        const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10')
        const data = await res.json();
        
        const jokesArr = (data.jokes);
        
         const n = Math.floor((Math.random() * 11)); 
         const jokeNo = jokeSetup(jokesArr[n]);
        
        displayJoke(jokeNo);
         
    } catch (error) {
        console.log(error);
    }
}

const jokeSetup = function(data){
    
    return{
    setup: data.setup,
    delivery: data.delivery
    }
}

const displayJoke = function(data){
    
    const html = `
    <div>
    <p>// Jokes goes here</p>
    <h4>${data.setup}</h4>
    <p >${data.delivery}</p>
  </div>
    `
    document.querySelector('#joke').innerHTML = html
}
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => fetchApi())