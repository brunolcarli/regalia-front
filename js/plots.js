
function plot_price_per_carYear(){
    return resolve_price_per_carYear().then(dataset => {
        const ctx = document.getElementById('PricePerCarYearChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'scatter',
            data: {
                labels: ['red', 'green', 'blue'],
                datasets: [{
                label: 'Preço por ano do veículo',
                data: dataset,
                backgroundColor: [
                    'red',
                ],
                borderColor: [
                    'blue'
                ],
                borderWidth: 1
                }]
            },
            options: {
                responsive: false
            }
        });
        return chart;
    });
}


function plot_km_per_carYear(){
    return resolve_km_per_carYear().then(dataset => {
        const ctx = document.getElementById('KmPerCarYearChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'scatter',
            data: {
                labels: ['red', 'green', 'blue'],
                datasets: [{
                label: 'Km por ano do veículo',
                data: dataset,
                backgroundColor: [
                    'red',
                ],
                borderColor: [
                    'blue'
                ],
                borderWidth: 1
                }]
            },
            options: {
                responsive: false
            }
        });
        return chart;
    });
}

function plot_price_per_km(){
    return resolve_price_per_km().then(dataset => {
        const ctx = document.getElementById('PricePerKmChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'scatter',
            data: {
                labels: ['red', 'green', 'blue'],
                datasets: [{
                label: 'Preço por Total de Km rodados',
                data: dataset,
                backgroundColor: [
                    'red',
                ],
                borderColor: [
                    'blue'
                ],
                borderWidth: 1
                }]
            },
            options: {
                responsive: false
            }
        });
        return chart;
    });
}

function plot_car_year(){
    return resolve_car_year().then(dataset => {
        const ctx = document.getElementById('CarYearChart').getContext('2d');

        let labels = [];
        let values = [];

        for (let i in dataset) {labels.push(i)};
        for (let i in dataset) {values.push(dataset[i])};

        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                label: 'Ano do veículo',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
                }]
            },
            options: {
                responsive: false
            }
        });
        return chart;
    });
}

function plot_average_car_year_price(){
    return resolve_average_car_year_price().then(dataset => {
        const ctx = document.getElementById('AvgCarYearPriceChart').getContext('2d');

        let labels = [];
        let values = [];

        for (let i in dataset) {labels.push(i)};
        for (let i in dataset) {
            values.push(
                dataset[i].reduce((a,b)=>a+b) / dataset[i].length
            );
        };

        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                label: 'Média de preço das ofertas por ano do veículo',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
                }]
            },
            options: {
                responsive: false
            }
        });
        return chart;
    });
}