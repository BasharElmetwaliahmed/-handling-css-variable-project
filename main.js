const inputsfeild=document.querySelectorAll("input");
function changeHandler(e){
    const dataSize=this.dataset.sized||'';
    
    document.documentElement.style.setProperty(`--${this.name}`,`${e.target.value}${dataSize}`)
}
inputsfeild.forEach(inputField=>{
    inputField.addEventListener('change',changeHandler)
})
inputsfeild.forEach(inputField=>{
        inputField.addEventListener('mousemove',changeHandler)

})