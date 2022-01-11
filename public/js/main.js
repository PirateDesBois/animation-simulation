//text-tape
// let plop = (cible,vitesse) => {
//   let visible = document.querySelector(cible)
//   let contenu = visible.innerText
//   let phrase = ""
//   let i = 0
//   let blop = setInterval(() => {
//       console.log("hello");
//       phrase = phrase.concat(contenu[i])
//       visible.innerText = phrase
//       if (i == contenu.length -1) {
//           clearInterval(blop)
//       }
//       i++ 
//   }, vitesse/contenu.length);
// }
// plop(".intro_code",7000)

document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "Welcome on my Website", "To continue, press Enter button"];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector(".intro_code").innerHTML = text.substring(0, i+1) ;
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});


//animation sur le bouton
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector(".cursor").setAttribute("class","none");
  let i = 0
  setInterval(() => {
      tableau[tableau_random[i]].setAttribute("class","display-anim")
      i++
  }, 10000/tableau.length);
  };
})

let tableau = document.querySelectorAll("code")

console.log(tableau);
// Création d'un tableau avec tout les nombres randoms 
let tableau_random = []
for (let i = 0; i < tableau.length; i++) {
  tableau_random.push(i)
}
let shuffleArray = (tableau_random) => {
  tableau_random.sort(()=> Math.random() - 0.5);
}
shuffleArray(tableau_random);

console.log(tableau_random);




// test-1////////////////////////////////////////////////////////////////
// function WordShuffler(holder,opt){
//     var that = this;
//     var time = 0;
//     this.now;
//     this.then = Date.now();
    
//     this.delta;
//     this.currentTimeOffset = 0;
    
//     this.word = null;
//     this.currentWord = null;
//     this.currentCharacter = 0;
//     this.currentWordLength = 0;
  
//     var options = {
//       fps : 20,
//       timeOffset : 5,
//       textColor : '#000',
//       fontSize : "50px",
//       useCanvas : false,
//       mixCapital : false,
//       mixSpecialCharacters : false,
//       needUpdate : true,
// //couleurs ////////////////////////////////////
//       colors : [
//         '#00fdbedf','#7eeb7adf','#af32e9df',
//         '#b5b2b8df','#eaec4fdf','#ff0000df',
//       ]
//     }
  
//     if(typeof opt != "undefined"){
//       for(key in opt){
//         options[key] = opt[key];
//       }
//     }

//     this.needUpdate = true;
//     this.fps = options.fps;
//     this.interval = 1000/this.fps;
//     this.timeOffset = options.timeOffset;
//     this.textColor = options.textColor;
//     this.fontSize = options.fontSize;
//     this.mixCapital = options.mixCapital;
//     this.mixSpecialCharacters = options.mixSpecialCharacters;
//     this.colors = options.colors;
  
//      this.useCanvas = options.useCanvas;
// // caractères //////////////////////////////////
//     this.chars = [
//       'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
//     ];
// // caractères spéciaux ///////////////////////////////////////
//     this.specialCharacters = [
//       '!','§','$','%',
//       '&','/','(',')',
//       '=','?','_','<',
//       '>','^','°','*',
//       '#','-',':',';','~'
//     ]
  
//     if(this.mixSpecialCharacters){
//       this.chars = this.chars.concat(this.specialCharacters);
//     }
  
//     this.getRandomColor = function () {
//       var randNum = Math.floor( Math.random() * this.colors.length );
//       return this.colors[randNum];
//     }
  
//     //if Canvas
   
//     this.position = {
//       x : 0,
//       y : 50
//     }
  
//     //if DOM
//     if(typeof holder != "undefined"){
//       this.holder = holder;
//     }
  
//     if(!this.useCanvas && typeof this.holder == "undefined"){
//       console.warn('Holder must be defined in DOM Mode. Use Canvas or define Holder');
//     }
  
//     this.getRandCharacter = function(characterToReplace){    
//       if(characterToReplace == " "){
//         return ' ';
//       }
//       var randNum = Math.floor(Math.random() * this.chars.length);
//       var lowChoice =  -.5 + Math.random();
//       var picketCharacter = this.chars[randNum];
//       var choosen = picketCharacter.toLowerCase();
//       if(this.mixCapital){
//         choosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
//       }
//       return choosen;
//     }
  
//     this.writeWord = function(word){
//       this.word = word;
//       this.currentWord = word.split('');
//       this.currentWordLength = this.currentWord.length;
  
//     }
  
//     this.generateSingleCharacter = function (color,character) {
//       var span = document.createElement('span');
//       span.style.color = color;
//       span.innerHTML = character;
//       return span;
//     }
  
//     this.updateCharacter = function (time) {
      
//         this.now = Date.now();
//         this.delta = this.now - this.then;

//         if (this.delta > this.interval) {
//           this.currentTimeOffset++;
        
//           var word = [];
  
//           if(this.currentTimeOffset === this.timeOffset && this.currentCharacter !== this.currentWordLength){
//             this.currentCharacter++;
//             this.currentTimeOffset = 0;
//           }
//           for(var k=0;k<this.currentCharacter;k++){
//             word.push(this.currentWord[k]);
//           }
  
//           for(var i=0;i<this.currentWordLength - this.currentCharacter;i++){
//             word.push(this.getRandCharacter(this.currentWord[this.currentCharacter+i]));
//           }

//           if(that.useCanvas){
//             c.clearRect(0,0,stage.x * stage.dpr , stage.y * stage.dpr);
//             c.font = that.fontSize + " sans-serif";
//             var spacing = 0;
//             word.forEach(function (w,index) {
//               if(index > that.currentCharacter){
//                 c.fillStyle = that.getRandomColor();
//               }else{
//                 c.fillStyle = that.textColor;
//               }
//               c.fillText(w, that.position.x + spacing, that.position.y);
//               spacing += c.measureText(w).width;
//             });
//           }else{
  
//             if(that.currentCharacter === that.currentWordLength){
//               that.needUpdate = false;
//             }
//             this.holder.innerHTML = '';
//             word.forEach(function (w,index) {
//               var color = null
//               if(index > that.currentCharacter){
//                 color = that.getRandomColor();
//               }else{
//                 color = that.textColor;
//               }
//               that.holder.appendChild(that.generateSingleCharacter(color, w));
//             }); 
//           }
//           this.then = this.now - (this.delta % this.interval);
//         }
//     }
  
//     this.restart = function () {
//       this.currentCharacter = 0;
//       this.needUpdate = true;
//     }
  
//     function update(time) {
//       time++;
//       if(that.needUpdate){
//         that.updateCharacter(time);
//       }
//       requestAnimationFrame(update);
//     }
  
//     this.writeWord(this.holder.innerHTML);
//     console.log(this.currentWord);
//     update(time);
//   }

//   var headline = document.getElementById('headline');
//   var text = document.getElementById('text');
//   var shuffler = document.getElementById('shuffler');
  
//   var headText = new WordShuffler(headline,{
//     textColor : '#fff',
//     timeOffset : 18,
//     mixCapital : true,
//     mixSpecialCharacters : true
//   });
  
//   var pText = new WordShuffler(text,{
//     textColor : '#fff',
//     timeOffset : 2
//   });

// fin test-1/////////////////////////////////////////////////////