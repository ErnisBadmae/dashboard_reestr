import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { getMonthsInclusionReport } from '../../store/reports/actions';

registerLocale('ru', ru);
setDefaultLocale('ru');

export const MonthsReportSelect = ({
    conditionToRender,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
}) => {
    const dispatch = useDispatch();

    if (conditionToRender) {
        return (
            <div
                style={{
                    maxWidth: '250px',
                    border: '1px solid gray',
                    width: '100%',
                }}
            >
                <DatePicker
                    selected={startDate}
                    onChange={(dates) => {
                        setStartDate(dates[0]);
                        setEndDate(dates[1]);
                        if (startDate && endDate) {
                            dispatch(
                                getMonthsInclusionReport({
                                    dateFrom: startDate
                                        .toLocaleDateString('en-ZA')
                                        .replaceAll('/', '-'),
                                    dateTo: endDate
                                        .toLocaleDateString('en-ZA')
                                        .replaceAll('/', '-'),
                                })
                            );
                        }
                    }}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                />
            </div>
        );
    }
};
