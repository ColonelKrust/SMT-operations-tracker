import React from 'react';
import { Chart } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

export default function RuntimeBarGraph() {

    const runtimeData = {}

    const windowWidth = window.innerWidth;
    const newFontSize = Math.max(10, Math.min(40, windowWidth / 60));
    Chart.defaults.font.size = newFontSize;
    const chartTitleSize = newFontSize + 15;

    const data = {
        labels: ['8403630', '8483630', '9500230', '6121230'],
        datasets: [
            {
                label: 'M1 Runtime',
                data: [123, 145, 203, 198],
                stack: 'Stack 0'
            },
            {
                label: 'M2 Runtime',
                data: [145, 156, 232, 221],
                stack: 'Stack 1'
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Assembly Number'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Recorded Runtime (in mins)'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Recent Assembly Runtimes',
                font: {
                    size: chartTitleSize
                }
            }
        }
    };

    return (
        <Bar id='runtimeBarGraph' data={data} options={chartOptions} />
    )
}