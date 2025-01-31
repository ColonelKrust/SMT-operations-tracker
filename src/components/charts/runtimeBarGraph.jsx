import React, { useState, useEffect } from 'react';
import { Chart } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';

Chart.register(ChartDataLabels);

export default function RuntimeBarGraph({ getRuntimeData }) {

    const [runtimeData, setRuntimeData] = useState([]);
    
    //upon first render make get request to server to retrieve graph data populate runtimeData with arrays of row objects
    useEffect(() => {
        const retrieveBarGraphData = async () => {
            await axios.get('/getRuntimeGraphData')
            .then((queryResult) => {
                setRuntimeData(queryResult.data.rows);
            })
            .catch((err) => {
                console.log('Error getting data for Bar Graph from db: ', err);
            });
    
        }
        retrieveBarGraphData();
    }, []);

    const windowWidth = window.innerWidth;
    const newFontSize = Math.max(10, Math.min(40, windowWidth / 60));
    Chart.defaults.font.size = newFontSize;
    const chartTitleSize = newFontSize + 15;

    const data = {
        labels: runtimeData.map((row) => row['assembly_number'].toString()),
        datasets: [
            {
                label: 'M1 Runtime',
                data: runtimeData.map((row) => row['m1_runtime']),
                stack: 'Stack 0'
            },
            {
                label: 'M2 Runtime',
                data: runtimeData.map((row) => row['m2_runtime']),
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