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
import { getReportProfSdcByCount } from '../../store/reports/actions';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function Reports() {
    const dispatch = useDispatch();
    const { reportProfSdcCount } = useSelector((state) => state.reports);
    console.log(reportProfSdcCount, 'reportProfSdcCount');
    const [currentLabels, setCurrentLabels] = useState(1);

    useEffect(() => {
        dispatch(getReportProfSdcByCount());
    }, [dispatch]);

    const options = {
        plugins: {
            title: {
                display: true,
                text: reportProfSdcCount?.report_title,
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

    const labelsByCount = [
        {
            title: 'register_oc_certified_experts_count',
            value: reportProfSdcCount?.data?.register_oc_certified_experts_count
                .value,
        },
        {
            title: 'register_oc_count',
            value: reportProfSdcCount?.data?.register_oc_count.value,
        },
        {
            title: 'register_oc_issued_certificates_count',
            value: reportProfSdcCount?.data
                ?.register_oc_issued_certificates_count.value,
        },
        {
            title: 'register_sdc_count',
            value: reportProfSdcCount?.data?.register_sdc_count.value,
        },
    ];
    const labelsByYears = ['2019', '2020', '2021', '2022'];

    //передаем в дату объект
    const data = {
        labels:
            currentLabels === 1
                ? [
                      labelsByCount[0].title,
                      labelsByCount[1].title,
                      labelsByCount[2].title,
                      labelsByCount[3].title,
                  ]
                : labelsByYears,

        datasets: [
            {
                label: 'Количество',
                data:
                    currentLabels === 1
                        ? labelsByCount.map((el) => {
                              return el.value;
                          })
                        : labelsByYears.map(() => 350),
                backgroundColor: 'rgb(255, 99, 132)',
                stack: 'Stack 0',
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
                    ? 'Вывести по годам'
                    : 'Вывести по количеству'}
            </button>
            <Bar options={options} data={data} />
        </>
    );
}
