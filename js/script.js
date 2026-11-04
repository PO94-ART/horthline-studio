// Find the navigation elements
const menuButton =
    document.querySelector(".menu-button");

const navigation =
    document.querySelector(".main-navigation");

const menuIcon =
    menuButton.querySelector("i");

const navigationLinks =
    document.querySelectorAll(".main-navigation a");


// Open the mobile navigation
function openMenu() {
    navigation.classList.add("menu-open");

    document.body.classList.add("menu-is-open");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");

    const firstNavigationLink =
        navigation.querySelector(".nav-list a");

    firstNavigationLink.focus();
}


// Close the mobile navigation
function closeMenu() {
    navigation.classList.remove("menu-open");

    document.body.classList.remove("menu-is-open");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-xmark");
}


// Open or close the navigation
function toggleMenu() {
    const menuIsOpen =
        navigation.classList.contains("menu-open");

    if (menuIsOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}


// Run toggleMenu when the button is selected
menuButton.addEventListener(
    "click",
    toggleMenu
);


// Close the menu when Escape is pressed
document.addEventListener(
    "keydown",
    function (event) {
        if (
            event.key === "Escape" &&
            navigation.classList.contains("menu-open")
        ) {
            closeMenu();
            menuButton.focus();
        }
    }
);


// Close the menu when a link is selected
navigationLinks.forEach(
    function (link) {
        link.addEventListener(
            "click",
            closeMenu
        );
    }
);


// Reset the menu when moving to desktop
window.addEventListener(
    "resize",
    function () {
        if (window.innerWidth >= 800) {
            closeMenu();
        }
    }
);