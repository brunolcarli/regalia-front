
function json(response) {
    return response.json()
};


function get_price_per_carYear(){

    return fetch("https://regalia.brunolcarli.repl.co/graphql/", {
        "method": "POST",
        "headers": {
            "cookie": "csrftoken=nYl1yuCwFAFc45QkOHBrnF8r9S3yGVUTsV5MuO5CcVpMGz3WggVlHpvOv6Ck54cc",
            "Content-Type": "application/json"
        },
        "body": "{\"query\":\"query {\\n\\tbmwOffers{\\n\\t\\tcarYear\\n\\t\\tprice\\n\\t}\\n}\"}"
    })
    .then(json)
    .then(response => {
        return response['data']['bmwOffers'];
    })
    .catch(err => {
        console.error(err);
    });
}


function get_km_per_carYear(){

    return fetch("https://regalia.brunolcarli.repl.co/graphql/", {
        "method": "POST",
        "headers": {
            "cookie": "csrftoken=nYl1yuCwFAFc45QkOHBrnF8r9S3yGVUTsV5MuO5CcVpMGz3WggVlHpvOv6Ck54cc",
            "Content-Type": "application/json"
        },
        "body": "{\"query\":\"query {\\n\\tbmwOffers{\\n\\t\\tcarYear\\n\\t\\tkm\\n\\t}\\n}\"}"
    })
    .then(json)
    .then(response => {
        return response['data']['bmwOffers'];
    })
    .catch(err => {
        console.error(err);
    });
}


function get_price_per_km(){

    return fetch("https://regalia.brunolcarli.repl.co/graphql/", {
        "method": "POST",
        "headers": {
            "cookie": "csrftoken=nYl1yuCwFAFc45QkOHBrnF8r9S3yGVUTsV5MuO5CcVpMGz3WggVlHpvOv6Ck54cc",
            "Content-Type": "application/json"
        },
        "body": "{\"query\":\"query {\\n\\tbmwOffers{\\n\\t\\tprice\\n\\t\\tkm\\n\\t}\\n}\"}"
    })
    .then(json)
    .then(response => {
        return response['data']['bmwOffers'];
    })
    .catch(err => {
        console.error(err);
    });
}
