/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() 
  {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", resetField);
    let twelveButton = document.getElementById("12Font");
    twelveButton.addEventListener("click", twelveFontHandle);
    let twoFourButton = document.getElementById("24Font");
    twoFourButton.addEventListener("click", twoFourHandle);
    let capButton = document.getElementById("all-caps");
    capButton.addEventListener("click", capHandle);

  }
  function handleClick()
  {
    console.log("Button clicked:");
    let text = document.getElementById("input-text");
    shiftCipher(text);
    
  }
  function shiftCipher(text)
  {
    text = text.value.toLowerCase();
    let result = "";
    for(let i = 0; i < text.length; i++)
    {
      if(text[i] < 'a' || text[i] > 'z')
      {
        result += text[i];
      }
      else if(text[i] == 'z')
      {
        result += 'a';
      }
      else //letter is between 'a' and'y'
      {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    document.getElementById("result").innerHTML = result;
  }
  function resetField()
  {
    document.getElementById("input-text").value = '';
  }
  function twelveFontHandle() 
  {
    if(document.getElementById("12Font").checked) 
    {

      document.getElementById('result').style.fontSize = "12pt";
    }
  }
  function twoFourHandle() 
  {
    if(document.getElementById("24Font").checked) 
    {

      document.getElementById('result').style.fontSize = "24pt";
    }
  }
  function capHandle()
  {
    let text = document.getElementById("input-text");
    if(document.getElementById("all-caps").checked) 
    {
      text.style.textTransform = "uppercase";
    }
    if(!document.getElementById("all-caps").checked) 
    {
      text.style.textTransform = "lowercase";
    }
  }
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
