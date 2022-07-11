import { Select } from 'antd';
import { useSelector } from 'react-redux';
const { Option } = Select;

export const YearsReportSelect = ({ setState, state, conditionToRender }) => {
    const { reportProfSdcYears } = useSelector((state) => state.reports);

    if (conditionToRender) {
        return (
            <Select
                defaultValue={state}
                onChange={(value) => {
                    setState(value);
                }}
            >
                {reportProfSdcYears?.data?.map((el) => (
                    <Option key={el.year} value={el.year}>
                        {el.year}
                    </Option>
                ))}
            </Select>
        );
    } else {
        return;
    }
};
