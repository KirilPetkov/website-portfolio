const hamburgerButton = document.getElementById('hamburger')

//Hamburger button

const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)
