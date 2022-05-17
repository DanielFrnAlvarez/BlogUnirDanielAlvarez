// Function to capture the URL path
let capture_url = () => {
    const url_text = document.getElementById('url_text_div');
    url_text.innerHTML = `La URL actual es:  ${location.href}`;
}
window.onload = capture_url;

// Function to load the requested URL
let load_content = () => {
    document.getElementById('state_container').innerHTML = '';
    document.getElementById('content_container').innerHTML = '';
    document.getElementById('headers_container').innerHTML = '';
    document.getElementById('status_container').innerHTML = '';
    let request = new XMLHttpRequest(),
    method = 'GET',
    url = document.getElementById('url_input').value + '?nocache='+Math.random();


    request.onreadystatechange  = () => {
        const states = ['No iniciado', 'Conexión con servidor establecida', 'Recibida petición en servidor', 'Enviando información', 'Completado'];
        let state = document.getElementById('state_container');
        state.innerHTML += `${states[request.readyState]}` + '<br>'; 

        if(request.readyState == 4) {
            if(request.status == 200){
                let request_content_container = document.getElementById('content_container'); 
                request_content_container.innerHTML = request.responseText.transforSpecialChar();

                let headers = document.getElementById('headers_container');
                headers.innerHTML = request.getAllResponseHeaders().transforSpecialChar();
            
                let request_status = document.getElementById('status_container');
                request_status.innerHTML = request.status + "<br/>" + request.statusText;
            }
        }
    };
    request.open(method, url, true);
    request.send(null);

    
}

String.prototype.transforSpecialChar = function() {
    return unescape(escape(this).
                      replace(/%0A/g, '<br/>').
                      replace(/%3C/g, '&lt;').
                      replace(/%3E/g, '&gt;'));
  }