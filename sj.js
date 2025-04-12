// console.log("Suresh")
// const name = 'suresh'
// const uid = 4381166968
// let state = 'rajasthan'
// var chity = 'siwada'
// const contry = 'india'
// const mobilenomber = 8955690466
// const password = '989678'

// console.table([name, uid, state, chity, contry, mobilenomber, password]);

// const password = '989678' because all kewobrds anything with in side allwyse 

// null = Object 
// undefined = undefined that sit 

// and deta types => 1 Symbol 2 Object 3 null 4 undefined 5 BigInt 6 Boolean 
//  this is deta types 

// Select DOM elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to handle scroll events
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY; // Current scroll position
        let offset = section.offsetTop - 150; // Adjust for header height
        let height = section.offsetHeight; // Section height
        let id = section.getAttribute('id'); // Section ID

        // Add 'active' class to nav link of the currently visible section
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active')); // Remove 'active' from all links
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active'); // Highlight current link
        }
    });
};

// Function to handle menu icon click (for toggling mobile menu)
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle icon class
    navbar.classList.toggle('active'); // Toggle navbar class
};
