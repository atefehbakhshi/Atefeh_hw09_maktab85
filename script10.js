'use strict'
const menu = document.querySelector('#menu');
const div = document.createElement('div');
menu.addEventListener('click', () => {
    document.body.style.cssText = `
    overflow: auto;
    `
    div.style.cssText = `
    display:block;
    height:100vh;
    width:100vw;
    background-color:red;
    position:absolute;
    top:0;
    left:0;
    opacity:0.6;
    transition: transform .3s cubic-bezier(0,.52,0,1);
    `
    document.body.append(div);
    console.log('first')
})