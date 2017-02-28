var googleusers =require('./getdata.js');
var codewars =require ('./userdata.js');

var a=googleusers(function(u,p){
u.forEach(function(elm){

codewars(elm,function(body){
  data=body.toString();
  data=JSON.parse(data);
  var score=data.ranks.languages.javascript.score;
  var username=data.username;
  console.log(username,score)
})



})
});
