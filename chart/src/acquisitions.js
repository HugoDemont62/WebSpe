import { Chart } from 'chart.js/auto';
import { getAquisitionsByYear} from "./api";

(async function() {
    const data = await getAquisitionsByYear();
    const counts = data.map(row => row.count/50)
    const years = data.map(row => row.years)
    new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'scatter',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: counts,
                        hoverOffset: counts
                    }
                ]
            }
        }
    );

})();


