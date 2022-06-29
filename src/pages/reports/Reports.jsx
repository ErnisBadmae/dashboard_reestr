import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getReportProfSdcForm1 } from '../../store/reports/actions';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        title: {
            display: true,
            text: 'Инфографика по отчетам',
        },
    },
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = [
    'Январь',
    'Феврал',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];
const labels2 = ['2019', '2020', '2021', '2022'];

export function Reports() {
    const dispatch = useDispatch();
    //     const { lsd } = useSelector((state) => state.lsd);
    console.log();
    const [currentLabels, setCurrentLabels] = useState(1);

    useEffect(() => {
        dispatch(getReportProfSdcForm1());
    }, []);

    const data = {
        labels: currentLabels === 1 ? labels : labels2,
        datasets: [
            {
                label: 'Dataset 1',
                data:
                    currentLabels === 1
                        ? labels.map(() => 370)
                        : labels2.map(() => 350),
                backgroundColor: 'rgb(255, 99, 132)',
                stack: 'Stack 0',
            },
            {
                label: 'Dataset 2',
                data:
                    currentLabels === 1
                        ? labels.map(() => 780)
                        : labels2.map(() => 230),
                backgroundColor: 'rgb(75, 192, 192)',
                stack: 'Stack 0',
            },
            {
                label: 'Dataset 3',
                data:
                    currentLabels === 1
                        ? labels.map(() => 500)
                        : labels2.map(() => 1000),
                backgroundColor: 'rgb(53, 162, 235)',
                stack: 'Stack 1',
            },
        ],
    };
    return (
        <>
            <button
                onClick={() => {
                    currentLabels === 1
                        ? setCurrentLabels(2)
                        : setCurrentLabels(1);
                }}
            >
                {currentLabels === 1
                    ? 'Вывести по годами'
                    : 'Вывести по месяцам'}
            </button>
            <Bar options={options} data={data} />
        </>
    );
}
