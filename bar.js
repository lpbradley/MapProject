$(function () {
        $('#container').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Federal Funding, by Percent of State Transportation Budget'
            },
            subtitle: {
                text: 'Source: U.S. Census Bureau*'
            },
            xAxis: {
                categories: ['District of Columbia','Montana','Rhode Island','Georgia','Mississippi','New Jersey','Pennsylvania','Utah','Maryland','Washington'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Federal Funds (percent of budget)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: 'percent'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Year 2011',
                data: [52.0,43.0,41.4,38.4,38.3,13.3,13.1,12.8,12.1,10.8],
		color: '#76A8AD'
            }]
        });
    });