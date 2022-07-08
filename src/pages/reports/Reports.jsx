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
    const { reportProfSdcExperts } = useSelector((state) => state.reports);

    const [currentYear, setCurrentYear] = useState('2021');
    const [currentLabels, setCurrentLabels] = useState('count');

    const [startDate, setStartDate] = useState(
        new Date('2021-10-20T12:59:32.000Z')
    );
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
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

        if (reportProfSdcYears?.data) {
            setCurrentYear(reportProfSdcYears?.data[0].year);
        }
    }, [dispatch, startDate, endDate, setCurrentYear]);

    useEffect(() => {
        dispatch(getReportProfSdcByCount());
        dispatch(getReportProfSdcFormByYears());
        dispatch(getReportExpertsProfSdc());
    }, [dispatch]);

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
    const labelsByExperts = [
        {
            title: reportProfSdcExperts?.data?.announced_count.title,
            value: reportProfSdcExperts?.data?.announced_count.cnt,
        },
        {
            title: reportProfSdcExperts?.data?.admitted_count.title,
            value: reportProfSdcExperts?.data?.admitted_count.cnt,
        },
        {
            title: reportProfSdcExperts?.data?.certified_count.title,
            value: reportProfSdcExperts?.data?.certified_count.cnt,
        },
        {
            title: reportProfSdcExperts?.data?.certification_failed_count.title,
            value: reportProfSdcExperts?.data?.certification_failed_count.cnt,
        },
    ];

    // const getLabelsBy = (labels) => {
    //     switch (labels) {
    //         case 'experts':
    //             return Object.values(reportProfSdcExperts?.data);
    //         default:
    //             return Object.values(reportProfSdcCount?.data);
    //     }
    // };

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

    const labelsByMonths = reportProfSdcMonth?.data?.map((el) => {
        return [
            {
                title: el.register_sdc_count?.title,
            },
            {
                title: el.register_oc_count?.title,
            },
            {
                title: el.register_oc_certified_experts_count?.title,
            },
            {
                title: el.register_oc_issued_certificates_count?.title,
            },
        ];
    });

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
            case 'experts':
                text = reportProfSdcExperts?.report_title;
                break;

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

    const getLabelsAndData = () => {
        switch (currentLabels) {
            case 'years':
                return {
                    labels: labelsByYears[0].map((el) => el.title),
                    data: labelsByYears[0].map((el) => el.value),
                };
            case 'months':
                return {
                    labels: reportProfSdcMonth?.data?.map((el) => el.monthName),
                };
            case 'experts':
                return {
                    labels: labelsByExperts.map((el) => el.title),
                    data: labelsByExperts.map((el) => el.value),
                };
            default:
                return {
                    labels: labelsByCount.map((el) => el.title),
                    data: labelsByCount.map((el) => el.value),
                };
        }
    };

    const getDatasets = () => {
        switch (currentLabels) {
            case 'months':
                const datasetArray = [
                    {
                        label: labelsByMonths[0][0].title,
                        data: [],
                        backgroundColor: 'rgb(255, 99, 132)',
                        stack: `Stack ${1}`,
                    },
                    {
                        label: labelsByMonths[0][1].title,
                        data: [],
                        backgroundColor: 'rgb(255, 99, 132)',
                        stack: `Stack ${2}`,
                    },
                    {
                        label: labelsByMonths[0][2].title,
                        data: [],
                        backgroundColor: 'rgb(255, 99, 132)',
                        stack: `Stack ${3}`,
                    },
                    {
                        label: labelsByMonths[0][3].title,
                        data: [],
                        backgroundColor: 'rgb(255, 99, 132)',
                        stack: `Stack ${4}`,
                    },
                ];
                reportProfSdcMonth?.data?.forEach((month, monthIndex) => {
                    datasetArray.forEach(
                        (datasetElement, datasetElementIndex) => {
                            datasetElement.data.push(
                                Object.values(month)[datasetElementIndex + 2]
                                    ?.cnt
                            );
                        }
                    );
                });
                return datasetArray;

            default:
                return [
                    {
                        label: 'Количество',
                        data: getLabelsAndData().data,
                        backgroundColor: 'rgb(255, 99, 132)',
                    },
                ];
        }
    };

    //передаем в дату объект
    const data = {
        labels: getLabelsAndData().labels,
        datasets: getDatasets(),
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

            <Bar type="bar" options={getOptions(currentLabels)} data={data} />
        </>
    );
}
