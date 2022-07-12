export const getReportTableColumns = (reportType) => {
    switch (reportType) {
        case 'years':
        case 'months':
            return [
                {
                    title: reportType === 'months' ? 'Месяц' : 'Год',
                    dataIndex: reportType === 'months' ? 'month' : 'year',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },
                {
                    title: 'СДС по дате регистрации',
                    dataIndex: 'sdcTitle',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },

                {
                    title: 'ОС по дате регистрации',
                    dataIndex: 'ocTitle',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },

                {
                    title: 'Аттестовано Экспертов',
                    dataIndex: 'expertTitle',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },
                {
                    title: 'Выдано Сертификатов',
                    dataIndex: 'certificateTitle',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },
            ];
        case 'experts':
            return [
                {
                    title: 'Заявлено',
                    dataIndex: 'announced_count_title',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },

                {
                    title: 'Допущено к аттестации',
                    dataIndex: 'admitted_count_title',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },

                {
                    title: 'Аттестовано',
                    dataIndex: 'certified_count_title',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },
                {
                    title: 'Не прошли аттестацию',
                    dataIndex: 'certification_failed_count_title',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },
            ];
        default:
            return [
                {
                    title: 'Количество СДС',
                    dataIndex: 'register_sdc_count_title',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },

                {
                    title: 'Количество ОС',
                    dataIndex: 'register_oc_count_title',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },

                {
                    title: 'Аттестовано Экспертов',
                    dataIndex: 'register_oc_certified_experts_count_title',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },
                {
                    title: 'Выдано Сертификатов',
                    dataIndex: 'register_oc_issued_certificates_count_title',
                    data_type: 'string',
                    align: 'right',
                    number_in_row: 1,
                },
            ];
    }
};
