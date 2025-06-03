const btn = document.querySelector('.btn');
console.log(btn)

btn.addEventListener("mouseover", (event) => {
    const xpos=event.pageX-btn.offsetLeft;
    const ypos=event.pageY-btn.offsetTop;
    btn.style.setProperty("--xpos", xpos+"px");
    btn.style.setProperty("--ypos", ypos+"px"); 

});