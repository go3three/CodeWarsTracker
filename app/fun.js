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

                function renderOptions (database) {
                  var opt = '<td>{{td}}</td>';
                  var rows = '<tr>{{tds}}</tr>';
                  var body = '<div>{{trs}}</div>'
                  var data = Object.keys(database).map(function(elm) {
                  var values = database[elm];
                  var store = "";
                  var counter = 1;
                  return values.map(function(elem){
                      counter++;
                      store = store+"<td>"+elem+"</td>";
                      if(counter%4 == 1){
                        return template(rows,{tds:store});
                      }
                    });
                  }).join('');
                  var btn = document.getElementById('btn');
                  tableBody.innerHTML = template(body,{trs:data});


                }
                renderOptions (users);
            }
    	  }
    }

    myRequest.open("POST", "http://localhost:8080/getdata",true);
    myRequest.send();

}
