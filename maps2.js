$(function(){
    var data = [{ 'hc-key': 'us-ma', value: 20.8 },
                    { 'hc-key': 'us-wa', value: 20.8 },
                    { 'hc-key': 'us-ca', value: 11.6 },
                    { 'hc-key': 'us-or', value: 20.2 },
                    { 'hc-key': 'us-nv', value: 16.2 },
                    { 'hc-key': 'us-nm', value: 22.0 },
                    { 'hc-key': 'us-co', value: 12.3 },
                    { 'hc-key': 'us-wy', value: 30.0 },
                    { 'hc-key': 'us-wi', value: 18.6 },
                    { 'hc-key': 'us-ks', value: 21.1 },
                    { 'hc-key': 'us-ne', value: 15.0 },
                    { 'hc-key': 'us-me', value: 14.9 },
                    { 'hc-key': 'us-ok', value: 20.7 },
                    { 'hc-key': 'us-mo', value: 26.5 },
                    { 'hc-key': 'us-mi', value: 24.7 },
                    { 'hc-key': 'us-il', value: 16.2 },
                    { 'hc-key': 'us-in', value: 25.0 },
                    { 'hc-key': 'us-vt', value: 24.2 },
                    { 'hc-key': 'us-az', value: 20.6 },
                    { 'hc-key': 'us-ar', value: 19.0 },
                    { 'hc-key': 'us-tx', value: 13.5 },
                    { 'hc-key': 'us-id', value: 26.0 },
                    { 'hc-key': 'us-ri', value: 40.6 },
                    { 'hc-key': 'us-al', value: 25.1 },
                    { 'hc-key': 'us-ga', value: 30.1 },
                    { 'hc-key': 'us-ms', value: 23.0 },
                    { 'hc-key': 'us-sc', value: 28.6 },
                    { 'hc-key': 'us-nc', value: 21.7 },
                    { 'hc-key': 'us-va', value: 18.8 },
                    { 'hc-key': 'us-ia', value: 19.9 },
                    { 'hc-key': 'us-md', value: 10.4 },
                    { 'hc-key': 'us-de', value: 19.1 },
                    { 'hc-key': 'us-nj', value: 11.2 },
                    { 'hc-key': 'us-pa', value: 11.2 },
                    { 'hc-key': 'us-ny', value: 11.7 },
                    { 'hc-key': 'us-sd', value: 24.8 },
                    { 'hc-key': 'us-ct', value: 22.7 },
                    { 'hc-key': 'us-nh', value: 16.0 },
                    { 'hc-key': 'us-ky', value: 17.7 },
                    { 'hc-key': 'us-oh', value: 16.0 },
                    { 'hc-key': 'us-tn', value: 22.2 },
                    { 'hc-key': 'us-wv', value: 19.8 },
                    { 'hc-key': 'us-dc', value: 47.9 },
                    { 'hc-key': 'us-mn', value: 8.9 },
                    { 'hc-key': 'us-mt', value: 34.2 },
                    { 'hc-key': 'us-la', value: 16.9 },
                    { 'hc-key': 'us-nd', value: 22.8 },
                    { 'hc-key': 'us-fl', value: 10.5 },
                    { 'hc-key': 'us-ut', value: 11.4 },
                    { 'hc-key': 'us-hi', value: 19.3 },
                    { 'hc-key': 'us-ak', value: 11.5 },
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

