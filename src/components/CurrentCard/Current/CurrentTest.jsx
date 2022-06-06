import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Test from '../../../pages/test/test';
import { useForm } from 'react-hook-form';
import { getCurrentProposalSdc } from '../../../store/proposal/actions';
import './card-item.scss';

function CurrentTest(props) {
    const [editMode, setEditMode] = useState(0);
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { currentProposalSdc } = useSelector((state) => state.proposal);

    useEffect(() => {
        dispatch(getCurrentProposalSdc(id));
    }, [id, dispatch]);

    if (!currentProposalSdc) return <></>;

    const onSubmit = (data) => {
        console.log(data, 'body');

        //    dispatch(editProposalCurrent(editInput));
    };

    return (
        <div className="card-container">
            <div className="card">
                <div className="card__title">
                    <strong>{currentProposalSdc?.full_name}</strong>
                </div>
                <form className="card__body" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="current__input"
                        defaultValue={currentProposalSdc.short_name}
                        type="text"
                        id="shortName"
                        {...register('shortName')}
                    />
                    <button type="submit">Сохранить</button>
                </form>
            </div>
            <Test />
        </div>
    );
}

export default CurrentTest;
