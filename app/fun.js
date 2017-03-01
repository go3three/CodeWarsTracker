function track() {
    var request = new XMLHttpRequest();
    var input = document.getElementById('dropdown');
    request.onreadystatechange = function(response) {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText)
        } else {}
    };
    request.open('POST', 'http://localhost:8080/getdata', true);
    request.send(input.value);
};


function get_users_data() {

    var myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function() {
    		if (myRequest.readyState === 4) {
            if (myRequest.status === 200) {
  	  	        var userData = JSON.parse(myRequest.responseText);
                var users = userData.values;
                var tableBody = document.getElementById('datatable');
                function template(tpl, data) {
                  Object.keys(data).forEach(function(key){
                    tpl = tpl.replace(
                      new RegExp('\\{\\{\\s*' + key + '\\s*\\}\\}', 'g'),
                      data[key]
                    );
                  });
                  return tpl;
                }
                function renderOptions (database, cb) {
                  var opt = '<td>{{td}}</td>';
                  var rows = '<tr class="trow">{{tds}}</tr>';

                  var data = Object.keys(database).map(function(elm) {
                    return template(opt,{td:elm});
                  }).join('');

                  var btn = document.getElementById('btn');
                  tableBody.innerHTML = template(rows,{tds:data});
                  btn.addEventListener('click', test);

                  cb(undefined, btn.value);
                }
                renderOptions (users, function(undefined,body){
                  console.log(body);
                });
            }
    	  }
    }
    function test() {
      alert("worker");
    }

    myRequest.open("POST", "http://localhost:8080/getdata",true);
    myRequest.send();

}
