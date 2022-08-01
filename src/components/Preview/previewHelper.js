import { changeStatus, changeStatusOc } from '../../store/proposal/actions';

//

export const getMenuItems = ({
    userRole,
    requestStatus,
    dispatch,
    navigate,
    id,
    requestType,
}) => {
    if (userRole !== 'user_admin') {
        console.log(userRole, 'userRole');
        return [
            {
                key: '1',
                label: 'Отправить заявление на рассмотрение',
                onClick: () => {
                    dispatch(
                        requestType === 'sdc'
                            ? changeStatus({
                                  id,
                                  code: 'send_document_verified',
                              })
                            : changeStatusOc({
                                  id,
                                  code: 'send_document_verified',
                              })
                    )
                        .unwrap()
                        .then(() => navigate(-1));
                },
            },

            {
                key: '2',
                label: 'Аннулировать заявление',
                onClick: () => {
                    dispatch(
                        requestType === 'sdc'
                            ? changeStatus({
                                  id,
                                  code: 'canceled',
                              })
                            : changeStatusOc({
                                  id,
                                  code: 'canceled',
                              })
                    )
                        .unwrap()
                        .then(() => navigate(-1));
                },
            },
        ];
    } else {
        switch (requestStatus) {
            case 4:
                return [
                    {
                        key: '1',
                        label: 'Принять в работу заявление',
                        onClick: () => {
                            dispatch(
                                requestType === 'sdc'
                                    ? changeStatus({
                                          id,
                                          code: 'document_verified',
                                      })
                                    : changeStatusOc({
                                          id,
                                          code: 'document_verified',
                                      })
                            );
                            navigate(-1);
                        },
                    },
                ];
            case 5:
                return [
                    {
                        key: '1',
                        label: 'Вернуть на доработку',
                        onClick: () => {
                            dispatch(
                                requestType === 'sdc'
                                    ? changeStatus({
                                          id,
                                          code: 'returned',
                                      })
                                    : changeStatusOc({
                                          id,
                                          code: 'returned',
                                      })
                            );
                            navigate(-1);
                        },
                    },
                    {
                        key: '2',
                        label: 'Принять',
                        onClick: () => {
                            dispatch(
                                requestType === 'sdc'
                                    ? changeStatus({
                                          id,
                                          code: 'desicion_accepted',
                                      })
                                    : changeStatusOc({
                                          id,
                                          code: 'desicion_accepted',
                                      })
                            );
                            navigate(-1);
                        },
                    },
                    {
                        key: '3',
                        label: 'Отклонить',
                        onClick: () => {
                            dispatch(
                                requestType === 'sdc'
                                    ? changeStatus({
                                          id,
                                          code: 'desicion_rejected',
                                      })
                                    : changeStatusOc({
                                          id,
                                          code: 'desicion_rejected',
                                      })
                            );
                            navigate(-1);
                        },
                    },
                ];
            case 6:
                return [
                    {
                        key: '1',
                        label: 'Модерация',
                        onClick: () => {
                            dispatch(
                                requestType === 'sdc'
                                    ? changeStatus({
                                          id,
                                          code: 'moderation',
                                      })
                                    : changeStatusOc({
                                          id,
                                          code: 'moderation',
                                      })
                            );
                            navigate(-1);
                        },
                    },
                ];
            case 7:
                return [
                    {
                        key: '1',
                        label: 'Вернуть на доработку',
                        onClick: () => {
                            dispatch(
                                requestType === 'sdc'
                                    ? changeStatus({
                                          id,
                                          code: 'returned',
                                      })
                                    : changeStatusOc({
                                          id,
                                          code: 'returned',
                                      })
                            );
                            navigate(-1);
                        },
                    },
                    {
                        key: '2',
                        label: 'Отправить на проверку документов',
                        onClick: () => {
                            dispatch(
                                requestType === 'sdc'
                                    ? changeStatus({
                                          id,
                                          code: 'send_document_verified',
                                      })
                                    : changeStatusOc({
                                          id,
                                          code: 'send_document_verified',
                                      })
                            );
                            navigate(-1);
                        },
                    },
                    {
                        key: '3',
                        label: 'Принять',
                        onClick: () => {
                            dispatch(
                                requestType === 'sdc'
                                    ? changeStatus({
                                          id,
                                          code: 'desicion_accepted',
                                      })
                                    : changeStatusOc({
                                          id,
                                          code: 'desicion_accepted',
                                      })
                            );
                            navigate(-1);
                        },
                    },
                    {
                        key: '4',
                        label: 'Отклонить',
                        onClick: () => {
                            dispatch(
                                requestType === 'sdc'
                                    ? changeStatus({
                                          id,
                                          code: 'desicion_rejected',
                                      })
                                    : changeStatusOc({
                                          id,
                                          code: 'desicion_rejected',
                                      })
                            );
                            navigate(-1);
                        },
                    },
                ];
            case 8:
                return [
                    {
                        key: '1',
                        label: 'Внести в реестр',
                        onClick: () => {
                            dispatch(
                                requestType === 'sdc'
                                    ? changeStatus({
                                          id,
                                          code: 'register_entered',
                                      })
                                    : changeStatusOc({
                                          id,
                                          code: 'register_entered',
                                      })
                            );
                            navigate(-1);
                        },
                    },
                ];
            default:
                break;
        }
    }
};
