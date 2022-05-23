var arrayAnimali  = ['🍇', '🍑', '🐾', '🦄', '🥑', '🍒', '🐝','🐬','🍇', '🍑', '🐾', '🦄', '🥑', '🍒', '🐝','🐬'];


  var arrayConfronto = [];
  
  document.body.onload = fame();
  
  var interval;
  var iconsFind = document.getElementsByClassName("find");
  var mode = document.getElementById('mode');
  var timer = document.querySelector(".timer");
 
  
  function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = a[currentIndex];
      a[currentIndex] = a[randomIndex];
      a[randomIndex] = temporaryValue;
    }
    return a;
  }
  
  function riprova(){
    mode.classList.remove("active");
    startGame();
  }
  
  function startGame(){
    clearInterval(interval);
    arrayConfronto = [];
  
    var arrayShuffle = shuffle(arrayAnimali);
  
    var lista = document.getElementById('griglia');
    while (lista.hasChildNodes()) {  
      lista.removeChild(lista.firstChild);
    }
  
    for(var i = 0; i < 16; i++){    
      var box = document.createElement('div');
      var element = document.createElement('div');
      element.className = 'icon';
      document.getElementById('griglia').appendChild(box).appendChild(element);
      element.innerHTML = arrayShuffle[i];
    }
  
  
    startTimer();
  
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
  
    for (var i = 0; i < icons.length; i++){
      icons[i].addEventListener("click", displayIcon);
      icons[i].addEventListener("click", openMode);
    }
  }
  
  
  function displayIcon(){
  
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
  
    this.classList.toggle("show");
    arrayConfronto.push(this);
  
    var len = arrayConfronto.length;
    if(len === 2){
      if(arrayConfronto[0].innerHTML === arrayConfronto[1].innerHTML){
        arrayConfronto[0].classList.add("find","disabled");
        arrayConfronto[1].classList.add("find","disabled");
        arrayConfronto = [];               
      } else {
        icons.forEach(function(item){
          item.classList.add('disabled');
        });
        setTimeout(function(){
          arrayConfronto[0].classList.remove("show");
          arrayConfronto[1].classList.remove("show");
          icons.forEach(function(item){
            item.classList.remove('disabled');
            for(var i = 0; i < iconsFind.length; i++){
                iconsFind[i].classList.add("disabled");
              }
          });
          arrayConfronto = [];
        },700); 
       }
    }
  }
  
  
  function openMode(){  
    if (iconsFind.length == 16){
      clearInterval(interval);
      mode.classList.add("active");
      document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
      closeMode();
    }
  }
  
  function closeMode(){  
    closeicon.addEventListener("click", function(e){
      mode.classList.remove("active");
      startGame();
    });
  }
  
  
  function startTimer(){

    var s = 0; var  m = 0; var h = 0;
  
    interval = setInterval(function(){
    timer.innerHTML = 'Tempo: ' + m + " minuti " + s + " secondi";
      s++;
      if(s == 60){
        m++;
        s = 0;
      }
      if(m == 60){
        h++;
        m = 0;
      }
    },1000);
  }