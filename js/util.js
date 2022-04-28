function update_dynamic_chart(value){
    const chart_id = 'DynamicChart';

    // Resets the canvas state
    document.getElementById(chart_id).remove();
    let canvas = document.createElement(
        'canvas'
    );
    canvas.setAttribute('id', chart_id);
    canvas.setAttribute('width', '400');
    canvas.setAttribute('height', '400');
    document.getElementById('dynamic_chart').appendChild(canvas);

    if (value == 'PRICEXYEAR'){
        plot_price_per_carYear(chart_id);
    }
    else if (value == 'KMXYEAR'){
        plot_km_per_carYear(chart_id);
    }
    else if (value == 'PRICEXKM'){
        plot_price_per_km(chart_id);
    }
    else if (value == 'YEAR'){
        plot_car_year(chart_id);
    }
    else if (value == 'AVGYEARPRICE'){
        plot_average_car_year_price(chart_id);
    }
    else if (value == 'AVGGASPRICE'){
        plot_average_gas_price(chart_id);
    }
}
