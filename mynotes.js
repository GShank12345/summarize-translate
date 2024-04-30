
// window.alert("window",window);

// window.moveTo(0, 0);
var d = new Date()
var yourname = ""
var i = 0
var value="";
var x=" ";

var flowers = ["flower/flower-1.png","flower/flower-2.png","flower/flower-3.png","flower/flower-4.png","flower/flower-5.png","flower/flower-6.png","flower/flower-7.png","flower/flower-8.png","flower/flower-9.png","flower/flower-10.png"]



var i1 =  Math.floor(Math.random() * flowers.length);
var  mess=flowers[i1];
var mess1 = "English"

var ffm = []
// change Feb 8
var url1 = 'https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans'


window.document.write("<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label><b>Language : </b></label>&nbsp;")
window.document.write("<input type='radio' id='color1' name='color' value='English' checked><label for='English'><b>English</b></label>&nbsp;&nbsp;")

var color1 = window.document.getElementById('color1');

color1.onclick = function()
    {
        // window.document.body.style.backgroundColor = 'lightblue'
         mess1 = color1.value


    }

window.document.write("<input type='radio' id='color112' name='color' value='French'><label for='French'><b>French</b></label>&nbsp;&nbsp;")

var color112 = window.document.getElementById('color112');

color112.onclick = function()
{
   // window.document.body.style.backgroundColor = color112.value
      mess1 = color112.value

}

window.document.write("<input type='radio' id='color11' name='color' value='Spanish' ><label for='Spanish'><b>Spanish</b></label>&nbsp;&nbsp;")


var color11 = window.document.getElementById('color11');

color11.onclick = function()
{
  //  window.document.body.style.backgroundColor = color11.value
    mess1 = color11.value

}
window.document.write("<input type='radio' id='color12' name='color' value='Portuguese'><label for='Portuguese'><b>Portuguese</b></label>&nbsp;&nbsp;")

var color12 = window.document.getElementById('color12');
color12.onclick = function()
{
   // window.document.body.style.backgroundColor = color12.value
    mess1 = color12.value
   // alert(mess1)
}
window.document.write("<input type='radio' id='color111' name='color' value='German'><label for='German'><b>German</b></label>&nbsp;&nbsp;")

var color111 = window.document.getElementById('color111');
color111.onclick = function()
{
    mess1 = color111.value

}

window.document.write("<input type='radio' id='colorch' name='color' value='Chinese'><label for='Chinese'><b>Chinese</b></label>&nbsp;&nbsp;")

var colorch = window.document.getElementById('colorch');
colorch.onclick = function()
{
    mess1 = colorch.value

}

window.document.write("<input type='radio' id='colorhi' name='color' value='Hindi'><label for='Hindi'><b>Hindi</b></label>&nbsp;&nbsp;")

var colorhi = window.document.getElementById('colorhi');
colorhi.onclick = function()
{
    mess1 = colorhi.value

}

window.document.write("<input type='radio' id='colorta' name='color' value='Tamil'><label for='Tamil'><b>Tamil</b></label>&nbsp;&nbsp;")

var colorta = window.document.getElementById('colorta');
colorta.onclick = function()
{
    mess1 = colorta.value

}

window.document.write("<input type='radio' id='colorte' name='color' value='Telugu'><label for='Telugu'><b>Telugu</b></label>&nbsp;&nbsp;")

var colorte = window.document.getElementById('colorte');
colorte.onclick = function()
{
    mess1 = colorte.value

}
/// new


// window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<style>.dcolorn{width:15%;text-align:center;bold;text-color:black;}</style><h4><label class='dcolorn'><b>Enter Name:</b></label>&nbsp&nbsp<input type='text' id='entername' placeholder='Enter your name' title='enter-name' class='dcolorn' onclick='entername()'></input><br>")


        
       window.document.write("<br><h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Summarize text in the selected language " + String(d).substring(0,16) + "</h1>&nbsp;&nbsp;")

        // window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<body onload='enableEditMode()'><style>.dcolor{width:10%;text-align:center}</style><button onclick='bold' title='bold' id='bold'><i class='fa fa-bold'></i></button><textarea id='demo' rows='20' cols='110'></textarea>")
        
        window.document.write("<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Select a File to Load:&nbsp;&nbsp;<input type='file' id='fileToLoad'><button id='loadFileAsText' onclick='loadfile()'>Load Selected File</button></b><br><br>")
        
        
        var fileload = document.getElementById('loadFileAsText');
        
        window.document.write(";<iframe name='demo' id='demo' style='color:black;width:75%;' height='300'></iframe><img id='flower-id' width='150' height='150' alt='flowers' src=" + mess + "></img><script id='scriptcr' src='./crypto-js/crypto-js.js'></script><script src='textarea.js'></script></body>'")
        var textframe = window.document.getElementById('demo');
        
        window.document.getElementById("demo").style.backgroundColor = "lightblue";
        // file upload
        fileload.onclick = function loadfile() {
            // alert("entered")
            var filename = document.getElementById("fileToLoad").value
            var fileext = filename.split('.').pop();
            if (fileext == "txt") {
                var fileToLoad = document.getElementById("fileToLoad").files[0];
                
                var fileReader = new FileReader();
                fileReader.onload = function(fileLoadedEvent){
                    var textFromFileLoaded = fileLoadedEvent.target.result;
                    demo.document.body.innerHTML = textFromFileLoaded;
                };
                
                fileReader.readAsText(fileToLoad, "UTF-8");
            }
            else
            {
                window.alert("Please upload only .txt file. ")
            }
        }
        // file upload
        
        var textpage = window.document.getElementById('demo');
      //  var mess = window.document.getElementById('flower-img');

        var cryptcr = window.document.getElementById('scriptcr').src;
    

        
// yourname = document.getElementById('entername').value;
