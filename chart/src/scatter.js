import { Chart } from 'chart.js/auto';
import { getAquisitionsByYear} from "./api";

(async function() {
    const data = {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }, {
                x: 0.5,
                y: 5.5
            }],
            backgroundColor: 'rgb(255, 99, 132)'
        }],
    };
    new Chart(
        document.getElementById('scatters'),
        {
            type: 'scatter',
            data: data,
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    }
                }
            }
        }
    );

})();