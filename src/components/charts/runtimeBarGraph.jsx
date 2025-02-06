import React, { useState, useEffect } from 'react';
import { Chart } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
import RuntimeGraphInputs from './runtimeBarGraphInputs.jsx';

Chart.register(ChartDataLabels);

export default function RuntimeBarGraph() {

    const [runtimeData, setRuntimeData] = useState([]);
    const [selectedAssy, setSelectedAssy] = useState({ value: 'All', label: 'All' });
    const [selectedLine, setSelectedLine] = useState({ value: 'All', label: 'All' });
    
    //upon first render make get request to server to retrieve graph data populate runtimeData with arrays of row objects
    useEffect(() => {
        const retrieveBarGraphData = async () => {
            await axios.get('/getRuntimeGraphData', {
                params: {
                    selectedAssy: selectedAssy.value,
                    selectedLine: selectedLine.value
                }
            })
            .then((queryResult) => {
                setRuntimeData(queryResult.data.rows);
            })
            .catch((err) => {
                console.log('Error getting data for Bar Graph from db: ', err);
            });
        }
        retrieveBarGraphData();
    }, [selectedAssy, selectedLine]);

    const windowWidth = window.innerWidth;
    const newFontSize = Math.max(10, Math.min(40, windowWidth / 60));
    Chart.defaults.font.size = newFontSize;
    const chartTitleSize = newFontSize + 15;

    const data = {
        labels: runtimeData.map((row) => [row['assembly_number'].toString(), '\n Line ' + row['line_number'], '\n' + row['date'].slice(5, 10).split('-').join('/')]),
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
                    text: ['', 'Assembly Number', 'Line Number', 'Date of Run']
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
                text: 'Assembly Runtimes',
                font: {
                    size: chartTitleSize
                }
            }
        }
    };

    return (
        <div id='runtimeBarGraphAndInputs'>
            <div id='barGraphInputsContainer'>
                <RuntimeGraphInputs
                selectedAssy={selectedAssy}
                setSelectedAssy={setSelectedAssy}
                selectedLine={selectedLine}
                setSelectedLine={setSelectedLine}
                />
            </div>
            <div id='barGraphContainer'>
                <Bar id='runtimeBarGraph' data={data} options={chartOptions} />
            </div>
        </div>
    )
}