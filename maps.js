$(function(){
    var data = [{ 'hc-key': 'us-ma', value: 22.9 },
                    { 'hc-key': 'us-wa', value: 10.8 },
                    { 'hc-key': 'us-ca', value: 16.6 },
                    { 'hc-key': 'us-or', value: 21.4 },
                    { 'hc-key': 'us-nv', value: 17.9 },
                    { 'hc-key': 'us-nm', value: 25.9 },
                    { 'hc-key': 'us-co', value: 15.5 },
                    { 'hc-key': 'us-wy', value: 35.7 },
                    { 'hc-key': 'us-wi', value: 20.1 },
                    { 'hc-key': 'us-ks', value: 21.5 },
                    { 'hc-key': 'us-ne', value: 15.5 },
                    { 'hc-key': 'us-me', value: 15.3 },
                    { 'hc-key': 'us-ok', value: 24.4 },
                    { 'hc-key': 'us-mo', value: 30.7 },
                    { 'hc-key': 'us-mi', value: 28.6 },
                    { 'hc-key': 'us-il', value: 19.9 },
                    { 'hc-key': 'us-in', value: 31.8 },
                    { 'hc-key': 'us-vt', value: 27.4 },
                    { 'hc-key': 'us-az', value: 27.6 },
                    { 'hc-key': 'us-ar', value: 22.2 },
                    { 'hc-key': 'us-tx', value: 16.8 },
                    { 'hc-key': 'us-id', value: 31.6 },
                    { 'hc-key': 'us-ri', value: 41.4 },
                    { 'hc-key': 'us-al', value: 30.1 },
                    { 'hc-key': 'us-ga', value: 38.4 },
                    { 'hc-key': 'us-ms', value: 38.3 },
                    { 'hc-key': 'us-sc', value: 33.6 },
                    { 'hc-key': 'us-nc', value: 29.0 },
                    { 'hc-key': 'us-va', value: 21.8 },
                    { 'hc-key': 'us-ia', value: 22.6 },
                    { 'hc-key': 'us-md', value: 12.1 },
                    { 'hc-key': 'us-de', value: 21.5 },
                    { 'hc-key': 'us-nj', value: 13.3 },
                    { 'hc-key': 'us-pa', value: 13.1 },
                    { 'hc-key': 'us-ny', value: 13.7 },
                    { 'hc-key': 'us-sd', value: 29.7 },
                    { 'hc-key': 'us-ct', value: 27.3 },
                    { 'hc-key': 'us-nh', value: 21.1 },
                    { 'hc-key': 'us-ky', value: 20.2 },
                    { 'hc-key': 'us-oh', value: 20.0 },
                    { 'hc-key': 'us-tn', value: 26.4 },
                    { 'hc-key': 'us-wv', value: 25.8 },
                    { 'hc-key': 'us-dc', value: 52.0 },
                    { 'hc-key': 'us-mn', value: 16.9 },
                    { 'hc-key': 'us-mt', value: 43.0 },
                    { 'hc-key': 'us-la', value: 27.6 },
                    { 'hc-key': 'us-nd', value: 32.4 },
                    { 'hc-key': 'us-fl', value: 15.0 },
                    { 'hc-key': 'us-ut', value: 12.8 },
                    { 'hc-key': 'us-hi', value: 25.6 },
                    { 'hc-key': 'us-ak', value: 16.5 },
                    { 'hc-key': '', value: 51 }];

    
    $('#container').highcharts('Map', {
                    
        title : {
            text : 'Supply of State Highway Funding'
        },
        subtitle : {
            text : 'Source: U.S. Census Bureau'
        },
        legend: {
            enabled: false
        },
        colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#DBFEFF',
                maxColor: '#104247',
                stops: [
                    [0, '#DBFEFF'],
                    [0.67, '#76A8AD'],
                    [1, '#104247']
                ]
            },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Random data',
        states: {
                hover: {
                    color: '#eeeeee'
                }
        }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
})

