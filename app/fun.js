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
