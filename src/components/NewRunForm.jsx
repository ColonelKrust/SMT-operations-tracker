import React from 'react';
import { Model, Survey } from 'survey-react-ui';
import '../styles/run-form.css';
import 'survey-core/defaultV2.min.css';
import hachLogo from '../images/HACH-LOGO-Blue.svg';

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
                    inputType: 'date',
                    defaultValueExpression: 'today()',
                    minValueExpression: 'today()',
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
                    choices: ["1", "2"]
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
                    name: 'runtime',
                    type: 'text',
                    title: 'Total Runtime',
                    inputType: 'number',
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
                    choices: ['Feeder Issues', 'Stick Issues', 'DEK Issues', 'Break', 'Replens']
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

    return (<Survey model={runForm} />);
}