export const usersTableColumns = [
    //     {
    //         title: 'id-пользователя',
    //         dataIndex: 'id',
    //         data_type: 'string',
    //         is_sort: true,
    //         number_in_row: 2,
    //     },
    //     {
    //         title: 'Статус ',
    //         dataIndex: 'status',
    //         data_type: 'string',
    //         is_sort: true,
    //         number_in_row: 1,
    //     },
    //     {
    //         title: 'username',
    //         dataIndex: 'username',
    //         data_type: 'string',
    //         is_sort: true,
    //         number_in_row: 1,
    //     },
    {
        title: 'E-mail',
        dataIndex: 'email',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Роль пользователя',
        dataIndex: 'roleTitle',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    //     {
    //         title: 'ОГРН',
    //         dataIndex: 'org_ogrn',
    //         data_type: 'string',
    //         is_sort: true,
    //         number_in_row: 1,
    //     },
    //     {
    //         title: 'Номер телефона',
    //         dataIndex: 'phone',
    //         data_type: 'string',
    //         is_sort: true,
    //         number_in_row: 1,
    //     },
];

export const requestsUsersSdcTableColumn = [
    {
        title: 'Дата подачи ',
        dataIndex: 'dttm_created',
        data_type: 'string',
        number_in_row: 1,
    },
    {
        title: 'Инн',
        dataIndex: 'org_inn',
        data_type: 'string',
        number_in_row: 1,
    },
    {
        title: 'Наименование организации',
        dataIndex: 'org_short_name',
        data_type: 'string',
        number_in_row: 1,
    },
    {
        title: 'Регистрационный номер',
        dataIndex: 'email',
        data_type: 'string',
        number_in_row: 1,
    },
    {
        title: 'Статус',
        dataIndex: 'statusTitle',
        data_type: 'string',
        number_in_row: 1,
    },
];
