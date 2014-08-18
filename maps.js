$(function(){
    var data = [{ 'hc-key': 'us-ma', value: 534.0 },
                    { 'hc-key': 'us-wa', value:  392.9  },
                    { 'hc-key': 'us-ca', value:  1708.1 },
                    { 'hc-key': 'us-or', value:  406.0  },
                    { 'hc-key': 'us-nv', value:  227.4  },
                    { 'hc-key': 'us-nm', value:  261.4  },
                    { 'hc-key': 'us-co', value:  295.9  },
                    { 'hc-key': 'us-wy', value:  208.8  },
                    { 'hc-key': 'us-wi', value:  683.0  },
                    { 'hc-key': 'us-ks', value:  370.0  },
                    { 'hc-key': 'us-ne', value:  172.2  },
                    { 'hc-key': 'us-me', value:  138.6  },
                    { 'hc-key': 'us-ok', value:  498.2  },
                    { 'hc-key': 'us-mo', value:  848.1  },
                    { 'hc-key': 'us-mi', value:  858.5  },
                    { 'hc-key': 'us-il', value:  1146.0 },
                    { 'hc-key': 'us-in', value:  676.8  },
                    { 'hc-key': 'us-vt', value:  142.0  },
                    { 'hc-key': 'us-az', value:  515.3  },
                    { 'hc-key': 'us-ar', value:  262.4  },
                    { 'hc-key': 'us-tx', value:  1480.9 },
                    { 'hc-key': 'us-id', value:  260.5  },
                    { 'hc-key': 'us-ri', value:  140.9  },
                    { 'hc-key': 'us-al', value:  552.2  },
                    { 'hc-key': 'us-ga', value:  874.5  },
                    { 'hc-key': 'us-ms', value:  386.6  },
                    { 'hc-key': 'us-sc', value:  437.8  },
                    { 'hc-key': 'us-nc', value:  829.8  },
                    { 'hc-key': 'us-va', value:  688.6  },
                    { 'hc-key': 'us-ia', value:  416.6  },
                    { 'hc-key': 'us-md', value:  306.3  },
                    { 'hc-key': 'us-de', value:  102.4  },
                    { 'hc-key': 'us-nj', value:  485.4  },
                    { 'hc-key': 'us-pa', value:  1009.1 },
                    { 'hc-key': 'us-ny', value:  1290.9 },
                    { 'hc-key': 'us-sd', value:  225.2  },
                    { 'hc-key': 'us-ct', value:  351.9  },
                    { 'hc-key': 'us-nh', value:  120.3  },
                    { 'hc-key': 'us-ky', value:  395.0  },
                    { 'hc-key': 'us-oh', value:  807.1  },
                    { 'hc-key': 'us-tn', value:  529.7  },
                    { 'hc-key': 'us-wv', value:  259.0  },
                    { 'hc-key': 'us-dc', value:  116.9  },
                    { 'hc-key': 'us-mn', value:  314.5  },
                    { 'hc-key': 'us-mt', value:  303.9  },
                    { 'hc-key': 'us-la', value:  508.5  },
                    { 'hc-key': 'us-nd', value:  216.0  },
                    { 'hc-key': 'us-fl', value:  858.4  },
                    { 'hc-key': 'us-ut', value:  208.8  },
                    { 'hc-key': 'us-hi', value:  108.9  },
                    { 'hc-key': 'us-ak', value:  194.2  },
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
                minColor: '#FFFAFA',
                maxColor: '#330000',
                stops: [
                    [0, '#FFFAFA'],
                    [.67, '#9D1309'],
                    [1, '#330000']
                ]
            },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Federal Funding',
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

