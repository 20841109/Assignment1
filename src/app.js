// ## app.js ##
//
// This is where we set up our web application using Express. We create the
// app and set up routes which will respond to requests from the client's
// web browser.

const path = require('path');
const express = require('express');

// Create a new Express app
const app = express();

// Serve up our static assets from 'dist' (this includes our client-side
// bundle of JavaScript). These assets are referred to in the HTML using
// <link> and <script> tags.
app.use('/assets', express.static(path.resolve(__dirname, '..', 'dist')));

// Set up the index route
app.get('/', (req, res) => {
  // The HTML is pretty barebones, it just provides a mount point
  // for React and links to our styles and scripts.
  const htmlContent = `
    

<html>
<style>
		.idle
			{
				background-color:#e7e7e7
			}
		.selected
			{
				background-color:#008CBA
			}
      

</style>

    <body>

		Clicked cell is :<a class ="selected" id="clicked"> </a><br>
    move:<a id="counter"></a>

<br>
</body>


<table border=1>
<colgroup>
<col style="width: 30px">
<col style="width: 30px">
<col style="width: 30px">
<col style="width: 30px">
<col style="width: 30px">
<col style="width: 30px">
</colgroup>
<thead>
  <tr>
    <td></td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
  </tr>
</thead>
<tbody>
  <tr>
    
    <td >1</td>
    <td ><input type="button" id="A1" value="  " ></td>
    <td ><input type="button" id="B1" value="  " ></td>
    <td ><input type="button" id="C1" value="  " ></td>
    <td ><input type="button" id="D1" value="  "></td>
    <td ><input type="button" id="E1" value="  "></td>
  </tr>
  <tr>
    <td >2</td>
    <td ><input type="button"   id ="A2" value="  "></td>
    <td ><input type="button" id="B2" value="  "></td>
    <td ><input type="button" id="C2" value="  "></td>
    <td ><input type="button" id="D2" value="  "></td>
    <td ><input type="button" id="E2" value="  "></td>
  </tr>
  <tr>
    <td >3</td>
    <td ><input type="button" id="A3" value="  " ></td>
    <td ><input type="button" id="B3" value="  " ></td>
    <td ><input type="button" id="C3" value="  "></td>
    <td ><input type="button" id="D3" value="  "></td>
    <td ><input type="button" id="E3" value="  "></td>
  </tr>
  <tr>
    <td >4</td>
    <td ><input type="button" id="A4" value="  "></td>
    <td ><input type="button" id="B4" value="  "></td>
    <td ><input type="button" id="C4" value="  "></td>
    <td ><input type="button" id="D4" value="  "></td>
    <td ><input type="button" id="E4" value="  "></td>
  </tr>
  <tr>
    <td >5</td>
    <td ><input type="button" id="A5" value=" "></td>
    <td ><input type="button" id="B5" value=" "></td>
    <td ><input type="button" id="C5" value=" "></td>
    <td ><input type="button" id="D5" value=" "></td>
    <td ><input type="button" id="E5" value=" "></td>
  </tr>
</tbody>
</table>		
<br>

<script>
 
    	
   var countervalue=0;
   var onClicked=(myfunction) => {
    countervalue++;
     
      x=myfunction.target.id;
      if(countervalue%2==0){
      document.getElementById(x).style.backgroundColor = '#008CBA';
      
      document.getElementById('clicked').innerHTML=myfunction.target.id;
      document.getElementById('counter').innerHTML=countervalue;
      document.getElementById(x).value="0";

      
      }
      else
      {
        document.getElementById(x).style.backgroundColor = 'red';
      document.getElementById('clicked').innerHTML=myfunction.target.id;
      document.getElementById('counter').innerHTML=countervalue;
      document.getElementById(x).value="X";
      
      }

}
window.addEventListener('click', onClicked);
		
  </script>
</body>
</html>
`;

  // Respond with the HTML
  res.send(htmlContent);
});

// Export the Express app
module.exports = app;
