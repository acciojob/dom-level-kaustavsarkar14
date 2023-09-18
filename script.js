//your JS code here. If required.
const level = document.getElementById('level');
let c = 1;
        
while (level.parentNode !== null) {
  level = level.parentNode; // Update the 'level' variable to its parent node
  c++;
}   
 
alert(c);     