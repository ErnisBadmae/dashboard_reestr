import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../store/entries/actions/getView';
// import { BreadCrumbs } from '../../../components/breadCrumbs/breadCrumbs';

import './card-item.css';

function CurrentCard(props) {
    const { pathname } = useLocation();

    //     console.log(pathname, 'pathnamefromcardcurrent');
    //     const { id } = useParams();
    const dispatch = useDispatch();

    const { requestSdsView } = useSelector((state) => state.entries);
    console.log('requestSdsView', requestSdsView);
    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    return (
        <div class="card-container">
            {/* <BreadCrumbs registry="expert-card">
                <span> {'>'} </span>
                <span> {currentCard?.expert_name} </span>
            </BreadCrumbs> */}
            <div className="card">
                <div className="card__title">
                    <strong>{requestSdsView?.expert_name}</strong>
                </div>
                <div className="card__body">
                    <strong>№ аттестата</strong>
                    <br />
                    <p>{requestSdsView?.certificate_number}</p>
                    <br />
                    <strong>Область специализации</strong>
                    <br />
                    <p>{requestSdsView?.area}</p>
                    <strong>
                        <br />
                        Сертификат (скан)
                    </strong>
                    <p>{requestSdsView?.certificate_scan}</p>
                    <strong>
                        <br />
                        Действителен до
                    </strong>
                    <br />
                    <p>{requestSdsView?.valid}</p>
                    <strong>
                        <br />
                        Дата вступления в организацию
                    </strong>
                    <br />
                    <p>{'нет данных'}</p>
                    <strong>
                        <br />
                        Дата исключения
                    </strong>
                    <br />
                    <p>{requestSdsView?.exclusion || 'нет данных'}</p>
                    <strong>
                        <br />
                        Должность
                    </strong>
                    <br />
                    <p>{requestSdsView?.exclusion_position}</p>
                    <strong>
                        <br />
                        Основание для привлечения личного труда
                    </strong>
                    <br />
                    <p>{requestSdsView?.exclusion || 'нет данных'}</p>
                    {/* <strong>
                         <br />
                         Статус
                     </strong>
                     <br />
                     <p>{currentItem?.status || 'нет данных'}</p>
                 </div>
                 {/* <div className="btn__card">
                     <ButtonRegistry
                         text="Список членов СДС"
                         path={'/certificates/list'}
                     />
                     <ButtonRegistry
                         text="Сведения о компенсации"
                         path={'/certificates/list'}
                     />
                     <ButtonRegistry
                         text="Выгрузить реестр членов СДС"
                         path={'/certificates/list'}
                     />
                 </div> */}
                </div>
            </div>
        </div>
    );
}

export default CurrentCard;
