// label btn
const dropdownbtn = document.getElementById("dropdownMenu");
const dropdownitem = document.querySelectorAll(".dropdown-item");

dropdownitem.forEach(item => {
  item.addEventListener("click", () => {
    dropdownbtn.textContent = item.textContent;
  });
});


// save button
const savebtn = document.getElementById("submit");

savebtn.addEventListener("click", () => {
    const data = {
        front: document.getElementById("front").value,
        back: document.getElementById("back").value,
        label: dropdownbtn.textContent.trim(),
    }

    let cards = JSON.parse(localStorage.getItem("cardData"));

    //if nothing exist, start with empty array
    if (!Array.isArray(cards)) cards = [];

    //append new card
    cards.push(data);

    localStorage.setItem("cardData", JSON.stringify(cards));
    // console.log(data);
    window.location.href = '/home.html';

});

