'use strict'

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const myName = document.getElementById("myname");

openMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    openMenu.classList.add('invisible');
    closeMenu.classList.toggle('hidden');
    closeMenu.classList.toggle('flex');
    myName.classList.add('invisible');
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    openMenu.classList.remove('invisible');
    closeMenu.classList.toggle('hidden');
    myName.classList.remove('invisible');
});