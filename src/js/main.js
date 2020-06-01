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

    // display data length cards for home screen
    const cards = document.querySelector("._cards");

    for (let i = 0; i < data[0].length; i++) {
        cards.innerHTML += `<div id="${[i]}" class="_card">
        <div class="_card-body">
            <img class="_image" src=${data[1][i].url} />
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

    // click 'x' to close modal
    const closeModal = modal.querySelector(".fa-times");

    closeModal.addEventListener("click", function() {
        modal.classList.remove("-open");
    })

    // click left or right arrows to slide between cards in modal view

})

