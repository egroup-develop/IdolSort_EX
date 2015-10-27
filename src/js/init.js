var IsFinished = false;
var Members = new Array(); 

//リロードの度に初期化
window.onload = function(){
  /*** ここからangularに書き換えてゆく ***/
  angular.module('myApp', []).controller('myController', function(){
    var myCon = this;

    myCon.str = "<div id=\"battleNumber\">" +
                "<\/div>" +
                "<div id=\"matome\">" +
                  "<div id=\"leftCell\">" +
                  "<\/div>" +
                  "<div id=\"centerCell\">" +
                    "<button>引き分け<\/button>" +
                  "<\/div>" +
                  "<div id=\"rightCell\">" +
                  "<\/div>" +
                "<\/div>" +
                "<div id=\"resultField\">" +
                  "<p>好きな方（または引き分け）をクリックで選択してください。<\/p>" +
                "<\/div>" +
                "<div id=\"taisen\">" +
                "<\/div>";
  });
  /****************************************/
  
  var str = "<div id=\"battleNumber\">" + 
            "<\/div>" +
            "<div id=\"matome\">" + 
              "<div id=\"leftCell\">" + 
              "<\/div>" +
              "<div id=\"centerCell\">" +
                "<button>引き分け<\/button>" +
              "<\/div>" +
              "<div id=\"rightCell\">" + 
              "<\/div>" +
            "<\/div>" + 
            "<div id=\"resultField\">" + 
              "<p>好きな方（または引き分け）をクリックで選択してください。<\/p>" + 
            "<\/div>" + 
            "<div id=\"taisen\">" + 
            "<\/div>";

  document.getElementById("mainField").innerHTML = str;
  document.getElementById("centerCell").onclick = function(){
    if (IsFinished==false){sortList(0);}
  }

  document.getElementById("leftCell").onclick = function(){
    if (IsFinished==false) sortList(-1);
  }

  document.getElementById("rightCell").onclick = function(){
    if (IsFinished==false) sortList(1);
  }

  //リストの初期化
  for (var i=0; i<Names.length; i++) {
    Members[i] = new Person(i,0);
  }

  //ソートの初期化
  initSort();
}
