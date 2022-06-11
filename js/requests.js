
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


function filter_bmw_offers(filter_name, filter_value){
    /* Full GraphQL query (All fields) with filter */
    var query = `{\"query\":\"query {\\n\\tbmwOffers(${filter_name}: ${filter_value}){\\n\\t\\tprice\\n\\t\\turl\\n\\t\\tcarModel\\n\\t\\tcarYear\\n\\t\\tkm\\n\\t\\tpower\\n\\t\\tcolor\\n\\t\\tsellerName\\n\\t}\\n}\"}`;
    return fetch("https://regalia.brunolcarli.repl.co/graphql/", {
        "method": "POST",
        "headers": {
            "cookie": "csrftoken=nYl1yuCwFAFc45QkOHBrnF8r9S3yGVUTsV5MuO5CcVpMGz3WggVlHpvOv6Ck54cc",
            "Content-Type": "application/json"
        },
        "body": query
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


function filter_report(){

    var filter_name = document.getElementById('ReportFilterSelection').value;
    var filter_value = document.getElementById('ReportTableFilterInput').value;

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    filter_bmw_offers(filter_name, filter_value).then(data => {
        document.getElementById("ReportTable").innerHTML =
        '<table id="ReportTable" class="table table-striped table-dark">';
        document.getElementById("ReportTable").innerHTML += `
            <thead><tr>
                <th scope="col">Valor R$</th>
                <th scope="col">Ano</th>
                <th scope="col">Km</th>
                <th scope="col">Potência</th>
                <th scope="col">Cor</th>
                <th scope="col">Modelo</th>
            </tr></thead><tbody>`;
        for (let i in data) {
            document.getElementById("ReportTable").innerHTML += `
                <tr>
                    <td>${formatter.format(data[i]['price'] * 1000)}</td>
                    <td>${data[i]['carYear']}</td>
                    <td>${data[i]['km']}</td>
                    <td>${data[i]['power']}</td>
                    <td>${data[i]['color']}</td>
                    <td>${data[i]['carModel']}</td>
                </tr>`;
            }
        document.getElementById("ReportTable").innerHTML += "</tbody></table>";
    });
}