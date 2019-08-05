function btnClick(element) {
    console.log(element);
    //element.style.backgroundColor='red';
    // element.innerHTML='Clicked!';
}

function btnClickReceiveEvent(event) {
    console.log(event);
    //element.style.backgroundColor='red';
    // element.innerHTML='Clicked!';
}


function mouseOver()
{
    var el=document.getElementById('paragraf1');
    el.style.backgroundColor='#27ae60';
    el.innerHTML="test";
}

function mouseOut(element)
{
    // document.body.bgColor=a.value;
    element.style.backgroundColor='#d35400'; 
}

function selectedChange()
{
    var select=document.getElementById('select-1');
    document.body.bgColor=select.value;
   console.log(select,select.value);
}

function changeFontSize()
{
    var select=document.getElementById('select-2');
    document.body.style.fontSize=select.value;
}

function changeClass(e)
{
    e.className = '';
    e.classList.add(e.value);
}

function changeWebSite(e)
{
  console.log(e.value);   
  window.location.href=e.value; 
}

function inputFocus(e)
{
e.style.backgroundColor='#f1c40f';
}

function inputBlur(e)
{
    e.style.backgroundColor='white';  
}

function keyDown(e){
    console.log('keyDown',e.key+'('+e.which+')');
}

function keyUp(e){
    console.log('keyUp',e.key+'('+e.which+')');
}

function keyPress(e){
    console.log('keyPress',e.key+'('+e.which+')');
}

function bodyLoaded()
{
    console.log('a');
}

function formSubmit()
{
    console.log('Form Submit oldu');
}

