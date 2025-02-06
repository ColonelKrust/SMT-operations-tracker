import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

export default function RuntimeGraphInputs ({selectedAssy, setSelectedAssy, selectedLine, setSelectedLine}) {
    const [assyNumOptions, setAssyNumOptions] = useState([{ value: 'All', label: 'All' }]);
    const lineNumOptions = [{ value: 'All', label: 'All' }, { value: 1, label: 'Line 1' }, { value: 2, label: 'Line 2' }];
    
    //call to server to retrieve all unique assembly numbers from db to be used as select options
    useEffect(() => {
        axios.get('/getAllAssemblies')
        .then((res) => {
            let assyOptions = []

            for(let assy = 0; assy < res.data.length; assy++) {
                let currentOption = {
                    value: res.data[assy],
                    label: res.data[assy]
                }

                assyOptions.push(currentOption);
            }

            setAssyNumOptions([...assyNumOptions, ...assyOptions]);
        })
        .catch((err) => {
            console.log('Error getting assembly numbers for filter: ', err);
        });
    }, []);

    return (
        <div id='runtimeGraphInputs'>
            <div id='assyNumSelectContainer' className='selectContainer'>
                <label id='assyNumSelectLabel' className='selectLabel'>
                    Assy #: 
                </label>
                <Select id='assyNumSelect' className='selectElement'
                defaultValue={selectedAssy}
                onChange={setSelectedAssy}
                options={assyNumOptions}
                />
            </div>
            <div id='lineNumSelectContainer' className='selectContainer'>
                <label id='lineNumSelectLabel' className='selectLabel'>
                    Line #: 
                </label>
                <Select id='lineNumSelect' className='selectElement'
                defaultValue={selectedLine}
                onChange={setSelectedLine}
                options={lineNumOptions}
                />
            </div>
        </div>
    );
}