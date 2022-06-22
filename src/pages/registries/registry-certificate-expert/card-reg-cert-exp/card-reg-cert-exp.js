import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../../store/entries/actions';
import { BreadCrumbs } from '../../../components/breadCrumbs/breadCrumbs';

import './card-item.css';

function CardExpert(props) {
    const { pathname } = useLocation();

    //     console.log(pathname, 'pathnamefromcardcurrent');
    //     const { id } = useParams();
    const dispatch = useDispatch();

    const { currentCard } = useSelector((state) => state.entries);

    //     const currentItem = currentCard ?? Object.assign({}, currentCard);
    //     const currentItem = entries.find((el) => el.id_sds === id);
    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    return (
        <div class="card-container">
            <BreadCrumbs registry="expert-card">
                <span> {'>'} </span>
                <span> {currentCard?.expert_name} </span>
            </BreadCrumbs>
            <div className="card">
                <div className="card__title">
                    <strong>{currentCard?.expert_name}</strong>
                </div>
                <div className="card__body">
                    <strong>№ аттестата</strong>
                    <br />
                    <p>{currentCard?.certificate_number}</p>
                    <br />
                    <strong>Область специализации</strong>
                    <br />
                    <p>{currentCard?.area}</p>
                    <strong>
                        <br />
                        Сертификат (скан)
                    </strong>
                    <p>{currentCard?.certificate_scan}</p>
                    <strong>
                        <br />
                        Действителен до
                    </strong>
                    <br />
                    <p>{currentCard?.valid}</p>
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
                    <p>{currentCard?.exclusion || 'нет данных'}</p>
                    <strong>
                        <br />
                        Должность
                    </strong>
                    <br />
                    <p>{currentCard?.exclusion_position}</p>
                    <strong>
                        <br />
                        Основание для привлечения личного труда
                    </strong>
                    <br />
                    <p>{currentCard?.exclusion || 'нет данных'}</p>
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

export default CardExpert;
