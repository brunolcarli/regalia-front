
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
        "body": "{\"query\":\"query {\\n\\tbmwOffers(price_Gte: 1){\\n\\t\\tcarYear\\n\\t\\tprice\\n\\t}\\n}\"}"
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
        "body": "{\"query\":\"query {\\n\\tbmwOffers(km_Lte: 300000, km_Gte: 1000, price_Gte: 1){\\n\\t\\tcarYear\\n\\t\\tkm\\n\\t}\\n}\"}"
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
        "body": "{\"query\":\"query {\\n\\tbmwOffers(km_Lte: 300000, km_Gte: 1000, price_Gte: 1){\\n\\t\\tprice\\n\\t\\tkm\\n\\t}\\n}\"}"
    })
    .then(json)
    .then(response => {
        return response['data']['bmwOffers'];
    })
    .catch(err => {
        console.error(err);
    });
}


function get_bmw_offers(){
    /* Full GraphQL query (All fields) */

    return fetch("https://regalia.brunolcarli.repl.co/graphql/", {
        "method": "POST",
        "headers": {
            "cookie": "csrftoken=nYl1yuCwFAFc45QkOHBrnF8r9S3yGVUTsV5MuO5CcVpMGz3WggVlHpvOv6Ck54cc",
            "Content-Type": "application/json"
        },
        "body": "{\"query\":\"query {\\n\\tbmwOffers(km_Lte: 300000, km_Gte: 1000, price_Gte: 1){\\n\\t\\tprice\\n\\t\\turl\\n\\t\\tcarModel\\n\\t\\tcarYear\\n\\t\\tkm\\n\\t\\tpower\\n\\t\\tcolor\\n\\t\\tsellerName\\n\\t}\\n}\"}"
    })
    .then(json)
    .then(response => {
        return response['data']['bmwOffers'];
    })
    .catch(err => {
        console.error(err);
    });
}


function get_gas_avg_prices(){

    return fetch("https://regalia.brunolcarli.repl.co/graphql/?=", {
        "method": "POST",
        "headers": {
            "cookie": "csrftoken=nYl1yuCwFAFc45QkOHBrnF8r9S3yGVUTsV5MuO5CcVpMGz3WggVlHpvOv6Ck54cc",
            "Content-Type": "application/json"
        },
        "body": "{\"query\":\"query{\\n\\tgasPrices{\\n\\t\\tregion\\n\\t\\tgasolineAveragePrice\\n\\t\\tdateReference\\n\\t}\\n}\"}"
    })
    .then(json)
    .then(response => {
        return response['data']['gasPrices'];
    })
    .catch(err => {
        console.error(err);
    });
}
