import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentHolder } from '../store/proposal/actions';

export const useGetCurrentHolder = (holderId) => {
    const dispatch = useDispatch();

    return useEffect(() => {
        holderId && dispatch(getCurrentHolder(holderId));
    }, [dispatch, holderId]);
};
