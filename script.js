const render = async function(){
    try {
        const joke = await fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
        const data = await joke.json()
        console.log(data.jokes);
    } catch (error) {
        console.log(error);
    }
}
render()