// function ghhgfhgfghfghfgh () {
//     var request = new XMLHttpRequest();
//     console.log("fun.js");
//
//     var input = document.getElementById('dropdown');
//     request.onreadystatechange = function(response) {
//         if (request.readyState === 4 && request.status === 200) {
//             // console.log(request.responseText)
//         } else {}
//     };
//     request.open('POST', 'http://localhost:8080/getdata', true);
//     request.send(input.value);
// };

function template(tpl, data) {
  Object.keys(data).forEach(function(key){
    tpl = tpl.replace(
      new RegExp('\\{\\{\\s*' + key + '\\s*\\}\\}', 'g'),
      data[key]
    );
  });
  return tpl;
}

function get_users_data() {

    var myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function() {
    		if (myRequest.readyState === 4) {
            if (myRequest.status === 200) {
  	  	        var userData = JSON.parse(myRequest.responseText);
                var users = userData.values;
                var tableBody = document.getElementById('datatable');
                var btn = document.getElementById('btn');
                var result = renderOptions(users);
                tableBody.innerHTML = result;
                console.log("res: ",result);
            }
    	  }
    }

    myRequest.open("POST", "http://localhost:8080/display",true);
    myRequest.send();

}

function renderOptions (database) {
  var rows = '<tr>{{tds}}</tr>';
  var body = '<div>{{trs}}</div>'
  var data = Object.keys(database).map(function(elm) {
    var values = database[elm];
    var store = "";
    var counter = 0;
    return values.map(function(elem){
      counter++;
      store = store+"<td>"+elem+"</td>";
      if(counter % values.length == 0){
        return template(rows,{tds:store});
      }
    });
  }).join('');
  return template(body,{trs:data});
}
