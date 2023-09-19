//your JS code here. If required.
let level = document.getElementById('level');
let c = 1;
        
while (level !== null && level.tagName.toLowerCase() !== 'html' ) {
  level = level.parentElement; // Update the 'level' variable to its parent node
  c++;     
}   
 
alert(c);           