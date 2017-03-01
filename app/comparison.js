var getdataFirstTime = require('./getdataFirstTime.js');
var googleusers = require('./getdata.js');
var userdata=require('./userdata.js');
    var array=[];

getdataFirstTime(function(user,score){

  user=user.sort();
  console.log(user);
var l=1;
  user.forEach(function(elm){
    // console.log(elm);
userdata(elm,function(data){
 var obj=JSON.parse(data);
 array.push(obj);
 if(l===user.length){

  array=array.sort(compare);

 array.forEach(function(e){

   var thenewscore= e.ranks.languages.javascript.score;
   console.log("new score :",thenewscore);
 })

}

l++;
});

})

})
module.exports = {

}



function compare(a, b) {

    if (a.username < b.username)
        return -1;
    if (a.username > b.username)
        return 1;
    return 0;
}
