const buttons = document.querySelectorAll(".wrapper .btns a")

buttons.forEach((button)=>{
    button.onclick = (e)=>{
        
        let x = e.clientX - button.offsetLeft
        let y = e.clientY - button.offsetTop

        let ripple = document.createElement("span")

        console.log(button.offsetLeft);
        ripple.style.left = x + 'px'
        ripple.style.top = y + 'px'
        button.appendChild(ripple)

        setTimeout(()=>{
            ripple.remove()
        }, 600)
    }
})