const form = document.getElementById('datos');

form.addEventListener('submit', (event) => {
    event.preventDefault()

        const data = new FormData (event.target);
        const dataObject = Object.fromEntries(data)

        console.log(dataObject)
    fetch('https://team-8-back.onrender.com/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObject)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
    })
})

 