// enabling previous style if possible

if (localStorage.getItem('viewMode') != null) {
    switch (localStorage.getItem('viewMode')) {
        case 'lightMode':
            changeStyleSheet('lightMode');
            break;
        case 'darkMode':
            changeStyleSheet('darkMode');
            break;
        case 'highContrastMode':
            changeStyleSheet('highContrastMode');
    }
}


// function to change the stylesheet


var lightModeButton = document.getElementById('lightMode');
var darkModeButton = document.getElementById('darkMode');
var highContrastButton = document.getElementById('highContrast');

function changeStyleSheet(sheet) {
    switch (sheet) {
        case 'lightMode':
            document.getElementById('pagestyle').setAttribute('href', 'css/basic.css');
            document.getElementById('logo').setAttribute('src', 'resources/page-icon-dark.png');
            document.getElementById('menuIcon').setAttribute('src', 'resources/menu-icon-dark.png');
            document.getElementById('gotop').setAttribute('src', 'resources/gotop_purple.png');

            document.getElementById('navbar').classList.remove('navbar-expand-xxl');
            document.getElementById('navbar').classList.add('navbar-expand-xl');

            localStorage.setItem('viewMode', 'lightMode');
            break;
        case 'darkMode':
            document.getElementById('pagestyle').setAttribute('href', 'css/dark.css');
            document.getElementById('logo').setAttribute('src', 'resources/page-icon-light.png');
            document.getElementById('menuIcon').setAttribute('src', 'resources/menu-icon-light.png');
            document.getElementById('gotop').setAttribute('src', 'resources/gotop_purple.png');

            document.getElementById('navbar').classList.remove('navbar-expand-xxl');
            document.getElementById('navbar').classList.add('navbar-expand-xl');

            localStorage.setItem('viewMode', 'darkMode');
            break;
        case 'highContrastMode':
            document.getElementById('pagestyle').setAttribute('href', 'css/highcontrast.css');
            document.getElementById('logo').setAttribute('src', 'resources/page-icon-light.png');
            document.getElementById('menuIcon').setAttribute('src', 'resources/menu-icon-light.png');
            document.getElementById('gotop').setAttribute('src', 'resources/gotop_red.png');

            document.getElementById('navbar').classList.remove('navbar-expand-xl');
            document.getElementById('navbar').classList.add('navbar-expand-xxl');

            

            localStorage.setItem('viewMode', 'highContrastMode');
            break;
    }
}

lightModeButton.addEventListener('click', function() { changeStyleSheet('lightMode') });
darkModeButton.addEventListener('click', function() {changeStyleSheet('darkMode') });
highContrastButton.addEventListener('click', function() {changeStyleSheet('highContrastMode')});


// changing the style of dropdown buttons


const buttons = document.getElementsByClassName('btn');

document.addEventListener('click', function(event) {
    if (Array.from(buttons).indexOf(event.target) >= 0) {
        for (let i = 0; i < buttons.length; i++) {
            if (event.target == buttons[i] && !buttons[i].classList.contains('active')) {
                buttons[i].classList.add('active');
            } else if (event.target == buttons[i]) {
                buttons[i].classList.remove('active');
            }
        } 
    } else {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].id != "summary")
            buttons[i].classList.remove('active');
        }
    }
});


// hiding navbar on scroll


var scrollPos = 0;
var navbar = document.getElementById('navbar');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    navbar.classList.remove('hideNav');
    navbar.classList.add('showNav');
  } else {
    if (document.getElementById('dropdownMenuButton1').classList.contains('show')) {
        document.getElementById('dropdownMenuButton1').classList.remove('show', 'active');
        document.getElementById('dropdownMenuButton1').setAttribute('aria-expanded', 'false');
        document.getElementsByClassName('dropdown-menu')[0].classList.remove('show');
        document.getElementsByClassName('dropdown-menu')[0].setAttribute('data-bs-popper', 'none');
    }

    navbar.classList.remove('showNav');
    navbar.classList.add('hideNav');
  }
  scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);


// go to top button activity (only after passing header position)


var gotop = document.getElementById('gotop');

window.addEventListener('scroll', showGoTopButton);

function showGoTopButton() {
    if (window.scrollY > document.getElementById('content').scrollTop) {
        gotop.classList.remove('hidden');
    } else {
        gotop.classList.add('hidden');
    }
}

document.getElementById('gotopbutton').addEventListener('click', function () {
    window.scrollTo(0,0); 
});



// to show table details on media 'print'

window.matchMedia('print').addEventListener('change', function () {
    if (document.getElementById('details') != null) {
        document.getElementById('details').setAttribute('open', "");
    }
})