

function resolve_price_per_carYear(){
    return get_price_per_carYear().then(data => {
        let dataset = [];
        for (let i in data) {
            dataset.push({
                'x': data[i]['carYear'],
                'y': data[i]['price']
            });
        };
        return dataset;
    });
}


function resolve_km_per_carYear(){
    return get_km_per_carYear().then(data => {
        let dataset = [];
        for (let i in data) {
            dataset.push({
                'x': data[i]['carYear'],
                'y': data[i]['km']
            });
        };
        return dataset;
    });
}


function resolve_price_per_km(){
    return get_price_per_km().then(data => {
        let dataset = [];
        for (let i in data) {
            dataset.push({
                'x': data[i]['km'],
                'y': data[i]['price']
            });
        };
        return dataset;
    });
}


function resolve_car_year(){
    return get_km_per_carYear().then(data => {
        let dataset = [];
        for (let i in data) {
            dataset.push(data[i]['carYear']);
        };
        let counts = {}
        for (i in dataset){
            if (dataset[i] in counts){
                counts[dataset[i]] = counts[dataset[i]] + 1}
            else{
                counts[dataset[i]] = 1
            }
        }
        return counts;
    });
}



function resolve_average_car_year_price(){
    return get_price_per_carYear().then(data => {
        let dataset = {};
        for (let i in data) {
            if (data[i]['carYear'] in dataset){
                dataset[data[i]['carYear']].push(data[i]['price'])
            } else {
                dataset[data[i]['carYear']] = [data[i]['price']]
            }
        };
        return dataset;
    });
}

function resolve_bmw_offers(){
    return get_bmw_offers().then(data => {
        let dataset = [];
        for (let i in data) {
            let row = [
                data[i]['price'],
                data[i]['carYear'],
                data[i]['km'],
                data[i]['power'],
                data[i]['color'],
                data[i]['carModel'],
                data[i]['url']
            ];
            dataset.push(row);
        };
        return dataset;
    });
}


function resolve_avg_gas_prices(){
    return get_gas_avg_prices().then(data => {
        pinhais_data = [];
        cwb_data = [];
        dates = [];

        for (let i in data) {
            if (data[i]['region'] == 'Pinhais'){
                pinhais_data.push(data[i]['gasolineAveragePrice']);
                dates.push(data[i]['dateReference']);
            }
            else if (data[i]['region'] == 'Curitiba'){
                cwb_data.push(data[i]['gasolineAveragePrice']);
            }
        }
        return {'pinhais': pinhais_data, 'cwb': cwb_data, 'dates': dates};

    })
}
