// fetching https://jsonplaceholder.typicode.com
Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()),
    fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json()),
    { 
        mode: 'no-cors',
        method: 'GET',
        header: {
            'Content-Type': 'application/json',
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
            modal.setAttribute("aria-modal", true);
        }
    })

    // click 'x' or anywhere outside of modal content to close modal
    const closeModal = modal.querySelector(".fa-times");
   
    closeModal.addEventListener("click", function() {
        modal.classList.remove("-open");
        modal.setAttribute("aria-modal", false);
    })

    modal.addEventListener("click", function(event) {
        let elementClicked = event.target;

        if (elementClicked.className === "_modal -open") {
            modal.classList.remove("-open");
            modal.setAttribute("aria-modal", false);
        }
    })

    // filter cards via toolbar click
    const ulFilters = document.querySelector("._filters");
    const filters = ulFilters.children;
    
    for (let i = 0; i < filters.length; i++) {
        filters[i].addEventListener("click", (event) => {
            for (let i = 0; i < filters.length; i++) {
                // once listitem clicked remove classname and aria role attribute
                filters[i].classList.remove("-active");
                filters[i].removeAttribute("aria-current");
            }
            
            let elementClicked = event.target;
            elementClicked.classList.add('-active');

            // set aria role current on clicked listitem
            elementClicked.setAttribute("aria-current", true);
            
            // start off with empty cards html
            cards.innerHTML = '';

            // All
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

            // Animation
            if (elementClicked.innerHTML === 'Animation') {
                cards.innerHTML = `<div class="_card">
                    <div class="_card-body">
                        <img id="1" class="_image" src=${images[0].url} />
                    </div>
                    <div class="_card-details">
                        <div class="_user">
                            <i class="fas fa-user-circle"></i>
                            <span>${data[0][0].username}</span>
                        </div>
                    </div>
                </div> ` 
            }

            // Branding
            if (elementClicked.innerHTML === 'Branding') {
                cards.innerHTML = `<div class="_card">
                    <div class="_card-body">
                        <img id="2" class="_image" src=${images[1].url} />
                    </div>
                    <div class="_card-details">
                        <div class="_user">
                            <i class="fas fa-user-circle"></i>
                            <span>${data[0][1].username}</span>
                        </div>
                    </div>
                </div> ` 
            }

            // Illustration
            if (elementClicked.innerHTML === 'Illustration') {
                cards.innerHTML = `<div class="_card">
                    <div class="_card-body">
                        <img id="3" class="_image" src=${images[4].url} />
                    </div>
                    <div class="_card-details">
                        <div class="_user">
                            <i class="fas fa-user-circle"></i>
                            <span>${data[0][4].username}</span>
                        </div>
                    </div>
                </div> ` 
            }

            // Mobile
            if (elementClicked.innerHTML === 'Mobile') {
                cards.innerHTML = `<div class="_card">
                    <div class="_card-body">
                        <img id="8" class="_image" src=${images[9].url} />
                    </div>
                    <div class="_card-details">
                        <div class="_user">
                            <i class="fas fa-user-circle"></i>
                            <span>${data[0][9].username}</span>
                        </div>
                    </div>
                </div> ` 
            }

            // Print
            if (elementClicked.innerHTML === 'Print') {
                cards.innerHTML = `<div class="_card">
                    <div class="_card-body">
                        <img id="4" class="_image" src=${images[5].url} />
                    </div>
                    <div class="_card-details">
                        <div class="_user">
                            <i class="fas fa-user-circle"></i>
                            <span>${data[0][5].username}</span>
                        </div>
                    </div>
                </div> ` 
            }

            // Product Design
            if (elementClicked.innerHTML === 'Product Design') {
                cards.innerHTML = `<div class="_card">
                    <div class="_card-body">
                        <img id="1" class="_image" src=${images[2].url} />
                    </div>
                    <div class="_card-details">
                        <div class="_user">
                            <i class="fas fa-user-circle"></i>
                            <span>${data[0][2].username}</span>
                        </div>
                    </div>
                </div> ` 
            }

            // Typography
            if (elementClicked.innerHTML === 'Typography') {
                cards.innerHTML = `<div class="_card">
                    <div class="_card-body">
                        <img id="5" class="_image" src=${images[6].url} />
                    </div>
                    <div class="_card-details">
                        <div class="_user">
                            <i class="fas fa-user-circle"></i>
                            <span>${data[0][6].username}</span>
                        </div>
                    </div>
                </div> ` 
            }

            // Web Design
            if (elementClicked.innerHTML === 'Web Design') {
                cards.innerHTML = `<div class="_card">
                    <div class="_card-body">
                        <img id="7" class="_image" src=${images[8].url} />
                    </div>
                    <div class="_card-details">
                        <div class="_user">
                            <i class="fas fa-user-circle"></i>
                            <span>${data[0][8].username}</span>
                        </div>
                    </div>
                </div> ` 
            }    
        })
    }
})

