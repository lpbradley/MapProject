$(function(){
    var data = [{ 'hc-key': 'us-ma', value: 533984000 },
                    { 'hc-key': 'us-wa', value: 392903000 },
                    { 'hc-key': 'us-ca', value: 1708099000 },
                    { 'hc-key': 'us-or', value: 405975000 },
                    { 'hc-key': 'us-nv', value: 227373000 },
                    { 'hc-key': 'us-nm', value: 261436000 },
                    { 'hc-key': 'us-co', value: 295868000 },
                    { 'hc-key': 'us-wy', value: 208795000 },
                    { 'hc-key': 'us-wi', value: 683019000 },
                    { 'hc-key': 'us-ks', value: 369962000 },
                    { 'hc-key': 'us-ne', value: 172178000 },
                    { 'hc-key': 'us-me', value: 138586000 },
                    { 'hc-key': 'us-ok', value: 498235000 },
                    { 'hc-key': 'us-mo', value: 848086000 },
                    { 'hc-key': 'us-mi', value: 858463000 },
                    { 'hc-key': 'us-il', value: 1145964000 },
                    { 'hc-key': 'us-in', value: 676800000 },
                    { 'hc-key': 'us-vt', value: 142039000 },
                    { 'hc-key': 'us-az', value: 515271000 },
                    { 'hc-key': 'us-ar', value: 262361000 },
                    { 'hc-key': 'us-tx', value: 1480933000 },
                    { 'hc-key': 'us-id', value: 260478000 },
                    { 'hc-key': 'us-ri', value: 140949000 },
                    { 'hc-key': 'us-al', value: 552189000 },
                    { 'hc-key': 'us-ga', value: 874525000 },
                    { 'hc-key': 'us-ms', value: 386571000 },
                    { 'hc-key': 'us-sc', value: 437797000 },
                    { 'hc-key': 'us-nc', value: 829810000 },
                    { 'hc-key': 'us-va', value: 688559000 },
                    { 'hc-key': 'us-ia', value: 416559000 },
                    { 'hc-key': 'us-md', value: 306255000 },
                    { 'hc-key': 'us-de', value: 102377000 },
                    { 'hc-key': 'us-nj', value: 485417000 },
                    { 'hc-key': 'us-pa', value: 1009058000 },
                    { 'hc-key': 'us-ny', value: 1290912000 },
                    { 'hc-key': 'us-sd', value: 225215000 },
                    { 'hc-key': 'us-ct', value: 351871000 },
                    { 'hc-key': 'us-nh', value: 120347000 },
                    { 'hc-key': 'us-ky', value: 394994000 },
                    { 'hc-key': 'us-oh', value: 807137000 },
                    { 'hc-key': 'us-tn', value: 529713000 },
                    { 'hc-key': 'us-wv', value: 259043000 },
                    { 'hc-key': 'us-dc', value: 116919000 },
                    { 'hc-key': 'us-mn', value: 314494000 },
                    { 'hc-key': 'us-mt', value: 303938000 },
                    { 'hc-key': 'us-la', value: 508540000 },
                    { 'hc-key': 'us-nd', value: 215952000 },
                    { 'hc-key': 'us-fl', value: 858405000 },
                    { 'hc-key': 'us-ut', value: 208844000 },
                    { 'hc-key': 'us-hi', value: 108942000 },
                    { 'hc-key': 'us-ak', value: 262361000 },
                    { 'hc-key': '', value: 51 }];

    
    $('#container').highcharts('Map', {
                    
        title : {
            text : 'Dependency on Federal Funding'
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
                minColor: '#00ffff',
                maxColor: '#003333',
                stops: [
                    [0, '#FFF5EE'],
                    [0.67, '#FF7F50'],
                    [1, '#B13E0F']
                ]
            },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Random data',
        states: {
                hover: {
                    color: '#eeeeee',
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

