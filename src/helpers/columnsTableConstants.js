export const sdsTableColumns = [
    {
        title: 'Статус',
        dataIndex: 'statusTitle',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },

    {
        title: 'Наименование СДС',
        dataIndex: 'full_name',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },

    {
        title: 'Регистрационный номер СДС',
        dataIndex: 'registration_number',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
        //    align: 'center',
    },
    {
        title: 'Держатель',
        dataIndex: 'registration_company',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Дата регистрации',
        dataIndex: 'registration_date',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
        //    align: 'center',
    },
];

export const OsTableColumn = [
    {
        title: '',
        dataIndex: 'id',
        data_type: 'string',
        is_sort: true,
        number_in_row: 2,
        sorter: (a, b) => a.id - b.id,
        showSorterTooltip: false,
        defaultSortOrder: 'ascend',
        sortDirections: ['ascend', 'descend'],
        width: 30,
    },
    {
        title: 'Наименование',
        dataIndex: 'full_name_organ_certification',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
        //    width: 20,
    },
    {
        title: 'ИНН',
        dataIndex: 'inn',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Область сертификации',
        dataIndex: 'area',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },

    {
        title: 'Дата решения об аккредитации',
        dataIndex: 'certificate_date',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
];

export const certifacatesTableColumn = [
    {
        title: '',
        dataIndex: 'id',
        data_type: 'string',
        is_sort: true,
        number_in_row: 2,
        sorter: (a, b) => a.id - b.id,
        showSorterTooltip: false,
        defaultSortOrder: 'ascend',
        width: 30,
    },
    {
        title: 'Наименование организации',
        dataIndex: 'company_name',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: '№ сертификата',
        dataIndex: 'number',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Дата выдачи сертификата',
        dataIndex: 'certificate_date',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },

    {
        title: 'Срок действия сертификата',
        dataIndex: 'valid_date',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'ИНН',
        dataIndex: 'company_inn',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },

    {
        title: 'ОС',
        dataIndex: 'osValue',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },

    {
        title: 'Статус сертификата',
        dataIndex: 'statusTitle',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'ОКВЭД',
        dataIndex: '',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
];

export const certificateExpertsTable = [
    {
        title: '',
        dataIndex: 'id',
        data_type: 'string',
        is_sort: true,
        number_in_row: 2,
        sorter: (a, b) => a.id - b.id,
        showSorterTooltip: false,
        defaultSortOrder: 'ascend',
        width: 30,
    },
    {
        title: '№ сертификата (аттестата)',
        dataIndex: 'certificate_number',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Фамилия, имя, отчество эксперта',
        dataIndex: 'expert_name',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },

    {
        title: 'Срок действия сертификата (аттестата)',
        dataIndex: 'valid',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Область деятельности (аттестации) эксперта	',
        dataIndex: 'area',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
];
