let butt = document.getElementById('change-bg');

function setColor() {
    let coll = setInterval(function() {
        const colors = ['red', 'blue', 'green', 'orange'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor
        
    }, 10)
     
    
}


butt.addEventListener('click', setColor);
