/**
 * 今後, アイドルを追加する場合はNames配列に名前を追加し, 
 * imgs/直下にIDに紐づいた.jpgファイルを追加するだけ
 */

var Names = new Array(
"最上もが", "夢眠ねむ", "藤咲彩音", "相沢梨紗", "成瀬瑛美", "小松菜奈", "橋本かんな", "久住小春", "佐野ひなこ", "篠崎愛"
);

function toNameFace(n){
  var str = Names[n];
  var temp = "";
  temp = "00"+String(n+1);
  temp = (temp.length==4) ? temp.substr(1,3) : temp.substr(0,3);
  str = "<img src=\"../imgs/"+temp+".jpg\" width=\"300\"><br>"+str;

  return str;
}

//配列index to 名前
function toNameFace0(n){
  var str = Names[n];
 
  return str;
}

//アイドルのIDとスコアのひも付け用オブジェクト. merge.jsとinit.jsで使う.
function Person(id, score){
  this.id  = id;
  this.score = score;
  this.rank  = 0;
}
