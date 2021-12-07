var img1= document.getElementById('img1');
img1.onclick = function(){
    var img1 = document.getElementById('img1').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src', img1);
};

var img2= document.getElementById('img2');
img2.onclick = function(){
    var img2 = document.getElementById('img2').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src', img2);
};

var img3= document.getElementById('img3');
img3.onclick = function(){
    var img3 = document.getElementById('img3').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src', img3);
    
};
var img4= document.getElementById('img4');
img4.onclick = function(){
    var img4 = document.getElementById('img4').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src', img4);
};






// var mainImage = document.getElementById('mainImage');
// // var srcAttributeValue = mainImage.getAttribute('src');
// // alert(srcAttributeValue);
// mainImage.setAttribute('src',' img4.jpg');




// var homeBtn = document.getElementById('homeBtn');
// homeBtn.onclick= function(){
//  document.getElementById('heading').innerHTML='This is Heading';
//  document.getElementById('paragraph').innerHTML='This is paragraph';

// };
// var aboutBtn = document.getElementById('aboutBtn');
// aboutBtn.onclick= function(){
//  document.getElementById('heading').innerHTML='This is about hading';
//  document.getElementById('paragraph').innerHTML='This is about paragraph';

// };
// var contactBtn = document.getElementById('contactBtn');
// contactBtn.onclick= function(){
//  document.getElementById('heading').innerHTML='This is contact hading';
//  document.getElementById('paragraph').innerHTML='This is contact paragraph';

// };






// var redBtn = document.getElementById('redBtn');
// redBtn.onclick = function(){
// var divOne = document.getElementById('divOne');
// divOne.className= 'class-one new-one';


// };
// // var greenBtn = document.getElementById('greenBtn');
// // greenBtn.onclick = function(){
// // var divOne = document.getElementById('divOne');
// // divOne.style.backgroundColor = 'green';


// // };
// // var blueBtn = document.getElementById('blueBtn');
// // blueBtn.onclick = function(){
// // var divOne = document.getElementById('divOne');
// // divOne.style.backgroundColor = 'blue';


// // };
// // var defaultBtn = document.getElementById('defaultBtn');
// // defaultBtn.onclick = function(){
// // var divOne = document.getElementById('divOne');
// // divOne.style.backgroundColor = 'white';


// // };








// var btnElement = document.getElementById('btn');
// btnElement.onclick = function(){
//  var startingNumber = document.getElementById('StartingNumber').value; 
//  var endingNumber = document.getElementById('EndingNumber').value; 
//  var res =' ';
//  for (var i=startingNumber; i<=endingNumber; i++ ){
//      res = res+i+' ,';
//  }
//  document.getElementById('result').innerHTML = res;
// };