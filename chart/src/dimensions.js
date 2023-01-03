import {Chart} from 'chart.js/auto'
import {getDimensions} from './api'

(async function () {
    const data = await getDimensions();

    function mappingData(row) {
        return {
            x: row.width,
            y: row.height,
            r: row.count
        }
    }

    function displayTicks (value) {
        if (value % 100 !== 0){ // pas de multiple de 100
            return "";
        }return (value / 100) + ' m';



    }

    const chartAreaBorder = {
        id: 'chartAreaBorder',

        beforeDraw(chart, args, options) {
            const { ctx, chartArea: { left, top, width, height } } = chart;

            ctx.save();
            ctx.strokeStyle = options.borderColor;
            ctx.lineWidth = options.borderWidth;
            ctx.setLineDash(options.borderDash || []);
            ctx.lineDashOffset = options.borderDashOffset;
            ctx.strokeRect(left, top, width, height);
            ctx.restore();
        }
    };


    new Chart(
        document.getElementById('dimensions'),
        {
            type: 'bubble',
            plugins: [ chartAreaBorder],
            options: {
                aspectRatio: 1,
                plugins: {
                    chartAreaBorder: {
                        borderColor: 'red',
                        borderWidth: 2,
                        borderDash: [ 5, 5 ],
                        borderDashOffset: 2,
                    }
                },
                scales: {
                    x: {
                        max: 500,
                        ticks: {
                            callback: displayTicks
                        }
                    },
                    y: {
                        max: 500,
                        ticks: {
                            callback: displayTicks
                        }
                    }
                }
            },
            data: {
                labels: data.map(x => x.year),
                datasets: [
                    {
                        label: 'width = height',
                        data: data
                            .filter(row => row.width === row.height)
                            .map(mappingData)
                    },
                    {
                        label: 'width > height',
                        data: data
                            .filter(row => row.width > row.height)
                            .map(mappingData)
                    },
                    {
                        label: 'width < height',
                        data: data
                            .filter(row => row.width < row.height)
                            .map(mappingData)
                    }
                ]
            }
        }
    );
})();