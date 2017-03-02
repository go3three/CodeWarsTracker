var b=require('../google.js');


module.exports=function (req,res){
  b.getdata(function(body) {
      obj = JSON.parse(body)
      var user = [];
      var phone = [];
      var h = transform(obj.values);
      h = h.sort(compare);
res.end(h)

  })
}

function compare(a, b) {
    if (a.user < b.user)
        return -1;
    if (a.user > b.user)
        return 1;
    return 0;
}
