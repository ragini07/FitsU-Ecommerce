const modal = document.querySelector(".modal");
const showModalBtn = document.querySelector(".showBtn");
const closeModalButtons = document.querySelectorAll(".close-modal");


showModalBtn.addEventListener('click',() => {
    modal.style.display = "block";
})

closeModalButtons.forEach(closeModalButton => {
    closeModalButton.addEventListener('click',() => {
        modal.style.display = "none";
    })
} )

window.addEventListener('click',(e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
})



function openTab(e, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.classList.add("active")
  }