import React from 'react';
import axios from 'axios';
import { Model, Survey } from 'survey-react-ui';
import { NavLink } from "react-router";
import hachLogo from '../images/HACH-LOGO-Blue.svg';
import { BsHouse } from "react-icons/bs";
import '../styles/run-form.css';
import 'survey-core/defaultV2.min.css';

const runFormModel = {
    name: 'runtimeForm',
    logo: hachLogo,
    logoPosition: 'left',
    logoFit: 'contain',
    logoHeight: '90px',
    logoWidth: '100px',
    title: 'Assembly Runtime Form',
    elements: [
        {
            name: 'generalInfo',
            title: 'General Information',
            type: 'panel',
            elements: [
                {
                    name: 'date',
                    type: 'text',
                    title: 'Date',
                    inputType: 'datetime',
                    defaultValueExpression: 'currentDate()',
                    minValueExpression: 'currentDate()',
                    isRequired: true
                },
                {
                    name: 'operatorName',
                    type: 'text',
                    title: 'Operator Name',
                    startWithNewLine: false,
                    isRequired: true
                },
                {
                    name: 'lineNumber',
                    title: 'Line #',
                    type: 'radiogroup',
                    colCount: 0,
                    choices: ["1", "2"],
                    isRequired: true
                },
                {
                    name: 'assemblyNumber',
                    type: 'text',
                    title: 'Assembly #',
                    inputType: 'number',
                    startWithNewLine: false,
                    isRequired: true
                },
                {
                    name: 'M1Runtime',
                    type: 'text',
                    title: 'M1 Runtime (in minutes)',
                    inputType: 'number',
                    isRequired: true
                },
                {
                    name: 'M2Runtime',
                    type: 'text',
                    title: 'M2 Runtime (in minutes)',
                    inputType: 'number',
                    startWithNewLine: false,
                    isRequired: true
                }
            ]
        },
        {
            name: 'runtimeDelays',
            title: 'Runtime Delays',
            type: 'paneldynamic',
            state: 'collapsed',
            panelCount: 1,
            maxPanelCount: 8,
            confirmDelete: true,
            templateElements: [
                {
                    name: 'delayType',
                    type: 'dropdown',
                    title: 'Select a delay type',
                    choices: ['Feeder Issues', 'Stick Issues', 'Tray Issues', 'DEK Issues', 'Break', 'Replens']
                },
                {
                    name: 'totalDelay',
                    type: 'text',
                    inputType: 'number',
                    title: 'Total delay time (in minutes)',
                    visibleIf: '{panel.delayType} notempty',
                    isRequired: true
                },
                {
                    name: 'delayNotes',
                    type: 'comment',
                    autoGrow: true,
                    title: 'Additional notes (optional)',
                    visibleIf: '{panel.delayType} notempty'
                }
            ]
        }
    ],
    showQuestionNumbers: false
};

export default function NewRunForm() {
    const runForm = new Model(runFormModel);

    runForm.onComplete.add((sender) => {
        let dateAndTime = sender.data.date.split(' ');
        if (dateAndTime.length === 1) {
            dateAndTime = sender.data.date.split('T');
        }
        const date = dateAndTime[0];
        const time = dateAndTime[1];

        const data = {
            date: date,
            operatorName: sender.data.operatorName,
            lineNumber: sender.data.lineNumber,
            assemblyNumber: sender.data.assemblyNumber,
            m1Time: sender.data.M1Runtime,
            m2Time: sender.data.M2Runtime,
            runtimeDelays: sender.data.runtimeDelays,
            time: time
        }

        // axios request to server to save data in postgres
        axios.post('/saveFormData', data)
        .then(() => {
            console.log('Successfully saved run data');
        })
        .catch((err) => {
            console.log('Error saving data to database: ', err);
        })
    });

    return (
        <div id='runFormDiv'>
            <NavLink to='/'>
                <button id='formHomeButton' className='homeButton'><BsHouse size='30'/></button>
            </NavLink>
            <Survey model={runForm} />
        </div>
);
}