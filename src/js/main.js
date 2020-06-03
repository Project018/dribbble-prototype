// fetching https://jsonplaceholder.typicode.com
Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()),
    fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json()),
    { 
        mode: 'no-cors',
        header: {
            'Access-Control-Allow-Origin': '*'
        }
    }
])
  .then(data => {
    // get 10 items from data instead of 5000
    const images = data[1].slice(0, 10);

    // display data length cards for home screen
    const cards = document.querySelector("._cards");

    for (let i = 0; i < data[0].length; i++) {
        cards.innerHTML += `<div class="_card">
        <div class="_card-body">
            <img id="${[i]}" class="_image" src=${images[i].url} />
        </div>
        <div class="_card-details">
            <div class="_user">
                <i class="fas fa-user-circle"></i>
                <span>${data[0][i].username}</span>
            </div>
        </div>
    </div> `
    }

    // clicking on img shows modal with bigger card
    const modal = document.querySelector("._modal");
    const modalShot = modal.querySelector("._modal-shot");

    cards.addEventListener('click', function(event) {
        let elementClicked = event.target;

        if (elementClicked.className === "_image") {
            modal.classList.add("-open");
            modalShot.innerHTML = elementClicked.parentNode.innerHTML;
        }
    })

    // click 'x' or anywhere outside of modal content to close modal
    const closeModal = modal.querySelector(".fa-times");
   
    closeModal.addEventListener("click", function() {
        modal.classList.remove("-open");
    })

    modal.addEventListener("click", function(event) {
        let elementClicked = event.target;

        if (elementClicked.className === "_modal -open") {
            modal.classList.remove("-open");
        }
    })
})

