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
