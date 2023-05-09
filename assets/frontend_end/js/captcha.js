var captcha;

function generate() {

    // Clear old input
    document.getElementById("submit").value = "";
 
    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image");
    var uniquechar = "";
 
    const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
    // Store generated input
    captcha.innerHTML = uniquechar;
}
 
function printmsg() {
    debugger;
    const usr_input = document
        .getElementById("submit").value;
     
    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
        
         var s = document.getElementById("key")
            .innerHTML = "";
      return true;
    }
    else {
        var s = document.getElementById("key")
            .innerHTML = "Please enter a valid captcha";
           
        generate();
    }
}

function generate1() {

    // Clear old input
    document.getElementById("submit1").value = "";
 
    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image1");
    var uniquechar = "";
 
    const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
    // Store generated input
    captcha.innerHTML = uniquechar;
}
 
function printmsg1() {
    const usr_input = document
        .getElementById("submit1").value;
     
    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
        
         var s = document.getElementById("key1")
            .innerHTML = "";
      return true;
    }
    else {
        var s = document.getElementById("key1")
            .innerHTML = "Please enter a valid captcha";
           
        generate1();
    }
}

function generate2() {

    // Clear old input
    document.getElementById("submit2").value = "";
 
    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image2");
    var uniquechar = "";
 
    const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
    // Store generated input
    captcha.innerHTML = uniquechar;
}
 
function printmsg2() {
    const usr_input = document
        .getElementById("submit2").value;
     
    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
        
         var s = document.getElementById("key2")
            .innerHTML = "";
      return true;
    }
    else {
        var s = document.getElementById("key2")
            .innerHTML = "Please enter a valid captcha";
           
                   generate2();
    }
}

function start()
{
    generate();
    generate1();
    generate2();
    
}