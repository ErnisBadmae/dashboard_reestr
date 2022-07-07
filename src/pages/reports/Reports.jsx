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
import {
    getReportProfSdcByCount,
    getReportProfSdcFormByYears,
    getMonthsInclusionReport,
    getReportExpertsProfSdc,
} from '../../store/reports/actions';

import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'antd';

import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const { Option } = Select;

export function Reports() {
    const dispatch = useDispatch();
    const { reportProfSdcCount } = useSelector((state) => state.reports);
    const { reportProfSdcYears } = useSelector((state) => state.reports);
    const { reportProfSdcMonth } = useSelector((state) => state.reports);

    const [currentYear, setCurrentYear] = useState('2021');
    const [currentMonth, setCurrentMonth] = useState('Январь');
    const [currentLabels, setCurrentLabels] = useState('count');

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(Date.now() - 86400000));

    useEffect(() => {
        dispatch(getReportProfSdcByCount());
        dispatch(getReportProfSdcFormByYears());
        dispatch(getReportExpertsProfSdc());
        dispatch(
            getMonthsInclusionReport({
                dateFrom: startDate,
                // .toLocaleDateString('en-ZA')
                // .replaceAll('/', '-'),
                dateTo: endDate,
                // .toLocaleDateString('en-ZA')
                // .replaceAll('/', '-'),
            })
        );
    }, [dispatch, startDate, endDate]);

    const getOptions = (optionsType) => {
        let text;
        switch (optionsType) {
            case 'years':
                text = reportProfSdcYears?.report_title;
                break;
            case 'count':
                text = reportProfSdcCount?.report_title;
                break;
            case 'months':
                text = reportProfSdcMonth?.report_title;
                break;
            //  case 'experts':
            //      text = reportProfSdcMonth?.report_title;
            //      break;

            default:
                break;
        }

        return {
            plugins: {
                title: {
                    display: true,
                    text: text,
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
    };

    const labelsByCount = [
        {
            title: reportProfSdcCount?.data?.register_oc_certified_experts_count
                .title,
            value: reportProfSdcCount?.data?.register_oc_certified_experts_count
                .cnt,
        },
        {
            title: reportProfSdcCount?.data?.register_oc_count.title,
            value: reportProfSdcCount?.data?.register_oc_count.cnt,
        },
        {
            title: reportProfSdcCount?.data
                ?.register_oc_issued_certificates_count.title,
            value: reportProfSdcCount?.data
                ?.register_oc_issued_certificates_count.cnt,
        },
        {
            title: reportProfSdcCount?.data?.register_sdc_count.title,
            value: reportProfSdcCount?.data?.register_sdc_count.cnt,
        },
    ];

    const labelsByYears = reportProfSdcYears?.data
        ?.filter((el) => el.year === currentYear)

        .map((el) => {
            return [
                {
                    title: el.register_oc_certified_experts_count?.title,
                    value: el.register_oc_certified_experts_count?.cnt,
                },
                {
                    title: el.register_oc_count?.title,
                    value: el.register_oc_count?.cnt,
                },
                {
                    title: el.register_oc_issued_certificates_count?.title,
                    value: el.register_oc_issued_certificates_count?.cnt,
                },
                {
                    title: el.register_sdc_count?.title,
                    value: el.register_sdc_count?.cnt,
                },
            ];
        });

    const labelsByMonths = reportProfSdcYears?.data
        ?.filter((el) => el.year === currentYear)

        .map((el) => {
            return [
                {
                    title: el.register_oc_certified_experts_count?.title,
                    value: el.register_oc_certified_experts_count?.cnt,
                },
                {
                    title: el.register_oc_count?.title,
                    value: el.register_oc_count?.cnt,
                },
                {
                    title: el.register_oc_issued_certificates_count?.title,
                    value: el.register_oc_issued_certificates_count?.cnt,
                },
                {
                    title: el.register_sdc_count?.title,
                    value: el.register_sdc_count?.cnt,
                },
            ];
        });

    const labelsByExperts = [
        {
            title: reportProfSdcCount?.data?.register_oc_certified_experts_count
                .title,
            value: reportProfSdcCount?.data?.register_oc_certified_experts_count
                .cnt,
        },
        {
            title: reportProfSdcCount?.data?.register_oc_count.title,
            value: reportProfSdcCount?.data?.register_oc_count.cnt,
        },
        {
            title: reportProfSdcCount?.data
                ?.register_oc_issued_certificates_count.title,
            value: reportProfSdcCount?.data
                ?.register_oc_issued_certificates_count.cnt,
        },
        {
            title: reportProfSdcCount?.data?.register_sdc_count.title,
            value: reportProfSdcCount?.data?.register_sdc_count.cnt,
        },
    ];

    //передаем в дату объект
    const data = {
        labels:
            currentLabels === 'count'
                ? labelsByCount.map((el) => el.title)
                : labelsByYears[0].map((el) => el.title),

        datasets: [
            {
                label: 'Количество',
                data:
                    currentLabels === 'count'
                        ? labelsByCount.map((el) => el.value)
                        : labelsByYears[0].map((el) => el.value),
                backgroundColor: 'rgb(255, 99, 132)',
                stack: 'Stack 0',
            },
        ],
    };

    const reportTypes = [
        { title: 'По количеству', id: 1, value: 'count' },
        { title: 'По включению по годам', id: 2, value: 'years' },
        { title: 'По включению по месяцам', id: 3, value: 'months' },
        { title: 'По экспертам', id: 4, value: 'experts' },
    ];
    return (
        <>
            <div style={{ display: 'flex' }}>
                <Select
                    defaultValue={currentLabels}
                    style={{ width: '300px' }}
                    onChange={(value) => {
                        setCurrentLabels(value);
                    }}
                >
                    {reportTypes.map((el) => (
                        <Option key={el.id} value={el.value}>
                            {el.title}
                        </Option>
                    ))}
                </Select>
                {currentLabels === 'years' && (
                    <Select
                        defaultValue={currentYear}
                        onChange={(value) => {
                            setCurrentYear(value);
                        }}
                    >
                        {reportProfSdcYears?.data?.map((el) => (
                            <Option key={el.year} value={el.year}>
                                {el.year}
                            </Option>
                        ))}
                    </Select>
                )}

                {currentLabels === 'months' && (
                    <div
                        style={{
                            maxWidth: '250px',
                            border: '1px solid gray',
                            width: '100%',
                        }}
                    >
                        <DatePicker
                            selected={startDate}
                            onChange={(dates) => {
                                setStartDate(dates[0]);
                                setEndDate(dates[1]);

                                if (startDate && endDate) {
                                    dispatch(
                                        getMonthsInclusionReport({
                                            dateFrom: startDate
                                                .toLocaleDateString('en-ZA')
                                                .replaceAll('/', '-'),
                                            dateTo: endDate
                                                .toLocaleDateString('en-ZA')
                                                .replaceAll('/', '-'),
                                        })
                                    );
                                }
                            }}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                        />
                    </div>
                )}
            </div>

            <Bar options={getOptions(currentLabels)} data={data} />
        </>
    );
}
