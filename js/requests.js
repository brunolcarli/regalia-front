

function query_api(){
    return fetch("https://regalia.brunolcarli.repl.co/regalia", {
        "method": "GET",
        "headers": {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.error(err);
    })
    .then(response => {return response;})
};
