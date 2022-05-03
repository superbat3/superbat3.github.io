function bigger() 
{
    alert("Hello, world!");
    document.getElementById("hungry").style.fontSize = "24px";
    
}
 
 
 function bold() 
 {
    var text = document.getElementById("hungry");
    text.style.fontWeight = "bold";
    text.style.color= "blue";
    text.style.textDecoration= "underline";
 }
 
 
 function unbold() 
 {
    var text = document.getElementById("hungry");
    text.style.fontSize = "initial";
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration= "none";
 }
 
 
 function moo() 
 {
    var suffix = '-Moo',
    text = document.getElementById('hungry');
    text.style.textTransform="uppercase";
    text.value = text.value.split('.').join('') + suffix;
 }