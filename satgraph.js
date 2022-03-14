const ctx = document.getElementById('satChart').getContext("2d");

let delayed;
// Gradient fill

let gradient = ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0,'rgba(46,34,172,0.8)');
gradient.addColorStop(1, 'rgba(229,76,156,0.8)');
const labels = [
        '2',
        '4',
        '6',
        '8',
        '10',
        '12',
        '14',
        '16',
        '20',       
];


const data = {
        labels,
        datasets: [{
                data: [1400, 1414, 1421, 1441, 1464, 1488, 1492, 1495, 1497, 1500],
                label: "SAT score after x hours of MTS tutoring",
                fill: true,
                backgroundColor: gradient,
                pointBackgroundColor: "#1A1A40",
        },
],
};

const config = {
        type: 'line',
        data: data,
        options: {
                radius: 4,
                hitRadius: 30,
                hoverRadius: 12,
                responsive: true,
                scales: {
                        y: {
                                grid: {
                                        display: false,
                                },
                        },
                        x: {
                                grid: {
                                        display: false,
                                },
                        },
                },
                animation: {
                        onComplete: () => {
                                delayed = true;
                        },
                        delay: (context) => {
                                let delay = 0;
                                if (context.type === "data" && context.mode === "default" && !delayed) {
                                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                                }
                                return delay;
                        },
                },
        },
};

const satChart = new Chart(ctx, config);