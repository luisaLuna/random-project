let counterContainer = document.querySelector(".counter-container");
let secondContainer = document.querySelector(".sec");
let thrContainer = document.querySelector(".thr");
let counters = document.querySelectorAll(".counter");

// Adding styles with js: 
counterContainer.style.display = "flex";
counterContainer.style.alignItems = "center";
counterContainer.style.flexDirection = "column";
counterContainer.style.margin = "40px";
secondContainer.style.display = "flex";
secondContainer.style.alignItems = "center";
secondContainer.style.flexDirection = "column";
secondContainer.style.margin = "40px";
thrContainer.style.display = "flex";
thrContainer.style.alignItems = "center";
thrContainer.style.flexDirection = "column";
thrContainer.style.margin = "40px";

// Incrementing counter: 

counters.forEach(counter => {
    counter.innerText = '0'
    
    let updateCounter = () => {
        let target = Number(counter.getAttribute('data-target'));
        let c = Number(counter.innerText);
        let increment = target / 200;
        if (c < target) {
            counter.innerText = `${c + increment}`
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
         }

    }

    updateCounter()
})






