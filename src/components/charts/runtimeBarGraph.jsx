import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function RuntimeBarGraph() {

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
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Recent Assembly Runtimes'
            }
        }
    };

    return (
        <Bar id='runtimeBarGraph' data={data} options={chartOptions} />
    )
}