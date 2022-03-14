const ctx2 = document.getElementById('actChart').getContext("2d");

let delayed2;
// Gradient fill

let gradient2 = ctx2.createLinearGradient(0,0,0,400);
gradient2.addColorStop(0,'rgba(46,34,172,0.8)');
gradient2.addColorStop(1, 'rgba(229,76,156,0.8)');

const data2 = {
        labels,
        datasets: [{
                data: [26, 26.4, 27, 27.3, 27.6, 29, 29.5, 29.9, 30, 31],
                label: "ACT score after x hours of MTS tutoring",
                fill: true,
                backgroundColor: gradient2,
                pointBackgroundColor: "#1A1A40",
        },
],
};

const config2 = {
        type: 'line',
        data: data2,
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
                                delayed2 = true;
                        },
                        delay: (context) => {
                                let delay = 0;
                                if (context.type === "data" && context.mode === "default" && !delayed2) {
                                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                                }
                                return delay;
                        },
                },
        },
};

const actChart = new Chart(ctx2, config2);