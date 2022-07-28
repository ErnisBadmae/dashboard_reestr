import { useSelector } from 'react-redux';

export const useGetDataSource = ({ tableType, messagesType }) => {
    const { proposalSdcList } = useSelector((state) => state.proposal);
    const { proposalOsList } = useSelector((state) => state.proposalTest);

    const { outbox } = useSelector((state) => state.messages);
    const { inbox } = useSelector((state) => state.messages);

    switch (tableType) {
        case 'sdcAdmin':
            return proposalSdcList.data?.map((item) => ({
                ...item,

                status: item.status.title,
                key: item.id,
            }));
        case 'osAdmin':
            return proposalOsList.data?.map((item) => ({
                ...item,

                status: item.status.title,
                key: item.id,
            }));
        case 'messages':
            if (messagesType === 'inbox') {
                return inbox.map((item) => ({
                    ...item,
                    key: item.id,
                }));
            } else if (messagesType === 'outbox') {
                return outbox.map((item) => ({
                    ...item,
                    key: item.id,
                }));
            } else {
                return {};
            }
        default:
            break;
    }
};
