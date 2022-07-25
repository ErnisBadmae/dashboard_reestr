import { useSelector } from 'react-redux';

export const useGetDataSource = (tableType) => {
    const { proposalSdcList } = useSelector((state) => state.proposal);
    const { inbox } = useSelector((state) => state.messages);

    switch (tableType) {
        case 'sdcAdmin':
            return proposalSdcList.data?.map((item) => ({
                ...item,

                status: item.status.title,
                key: item.id,
            }));
        case 'messages':
            return inbox.data?.data?.map((item) => ({
                ...item,
                key: item.id,
            }));
        default:
            break;
    }
};
