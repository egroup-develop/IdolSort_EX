function showResult() {
  var str = "<table id=\"resultTable\">" + 
              "<tr><th>順位<\/th><th>名前<\/th><\/tr>";

  for (i=0; i<Members.length; i++) {
    str += "<tr><td class = \"score\">" + Members[i].rank + "位<\/td>" + 
           "<td class=\"name\" " + ">" + toNameFace0(Members[i].id) + "<\/td><\/tr>";
  }
  
  str += "<\/table><br>";
  document.getElementById("resultField").innerHTML = str;
}
