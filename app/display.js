var b=require('./getFirstTime.js');


module.exports=function (req,res){
  b.getdata(function(body) {
      obj = JSON.parse(body)

      var data = JSON.stringify(obj);
      res.end(data);
  })
}

function compare(a, b) {
    if (a.user < b.user)
        return -1;
    if (a.user > b.user)
        return 1;
    return 0;
}
