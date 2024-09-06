
    const form = document.getElementById("comment-form")
    const createlist = document.getElementById("list")
    const unlist = document.createElement('ul')
    unlist.id = "unlist"
    createlist.appendChild(unlist)

    form.addEventListener('submit', handleclick)

    function handleclick(event){
        event.preventDefault()
        const inputext = document.getElementById("comment-input")
        const text = document.createElement("li")
        text.textContent = inputext.value
        unlist.appendChild(text)
        event.target.reset()


    }
    let cont = document.getElementById("counter")
    const plus = document.getElementById("plus")
    plus.addEventListener("click", () => {
        let currentValue = parseInt(cont.textContent);
        cont.textContent = currentValue + 1
    })

    const minus = document.getElementById("minus")
    minus.addEventListener("click", () => {
        let currentValue = parseInt(cont.textContent);
        cont.textContent = currentValue - 1
    })
    

    const heart = document.getElementById("heart")
    heart.addEventListener("click", () =>{
    const likeInput = document.querySelector(".likes")
    const like = document.createElement("li")
    like.textContent = `you liked at ${cont.innerText} seconds`
    likeInput.appendChild(like)

    })

    const pauseButton = document.getElementById("pause")
    pauseButton.addEventListener('click', ()=> {
        cont.textContent =0


    })



     
























