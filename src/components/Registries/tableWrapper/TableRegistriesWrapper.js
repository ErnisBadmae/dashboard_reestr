import { Outlet } from 'react-router-dom';
import {
    // Select,
    Layout,
    Form,
    Drawer,
    Button,
} from 'antd';
import { FilterFilled } from '@ant-design/icons';
// import { Poisk } from '../../components/poisk/poisk';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { handleTitle } from '../../../helpers/utils';
import { handleInputsFilter } from '../../../helpers/inputsFilterConstants';

const { Content } = Layout;
// const { Option } = Select;

// const statusOptions = [
//     {
//         value: 'active',
//         title: 'Действует',
//     },
//     {
//         value: 'inactive',
//         title: 'Исключено',
//     },
//     {
//         value: 'wait',
//         title: 'Замечания',
//     },
// ];

export const TableRegistriesWrapper = () => {
    const [form] = Form.useForm();
    const { pathname } = useLocation();
    const [date, setDate] = useState();
    const [filterValues, setFilterValues] = useState(null);
    let [filterModalVisible, setFilterModalVisible] = useState(false);

    const handleFilterValues = () => {
        if (date) {
            date.setHours((-1 * date.getTimezoneOffset()) / 60);
            setFilterValues({
                ...form.getFieldsValue(),
            });
        } else {
            setFilterValues({
                ...form.getFieldsValue(),
            });
        }
    };

    const handleCloseFilters = () => {
        setFilterModalVisible(false);
    };

    const handleResetFilters = () => {
        setDate();
        form.resetFields();
        handleFilterValues();
    };

    return (
        <Content style={{ padding: '0 20px' }}>
            <div>
                <div className="registry-sro__filter-wrapper">
                    {/* <Poisk className="registry-sro__title-search" /> */}
                    <div className="registry-sro__name-registry">
                        {handleTitle(pathname)}
                    </div>
                    <FilterFilled
                        className="registry-sro__filter-icon"
                        onClick={() => setFilterModalVisible(true)}
                    />
                </div>
                <div className="registry-sro__drawer-wrapper">
                    <Drawer
                        getContainer={false}
                        //     style={{ position: 'absolute' }}
                        title="Отфильтровать записи"
                        visible={filterModalVisible}
                        onClose={handleCloseFilters}
                    >
                        <Form
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    form.submit();
                                }
                            }}
                            form={form}
                            onFinish={handleFilterValues}
                        >
                            {/* <Form.Item name="state">
                                <Select
                                    className="registry-sro__filter-input"
                                    placeholder="Статус"
                                >
                                    {statusOptions.map((el) => (
                                        <Option key={el.value} value={el.value}>
                                            {el.title}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item> */}
                            {handleInputsFilter(pathname, {
                                set: (value) => setDate(value),
                                value: date,
                            })}
                        </Form>
                        <div className="registry-sro__buttons-wrapper">
                            <Button
                                className="custom-button"
                                onClick={handleResetFilters}
                            >
                                Сбросить
                            </Button>
                            <Button
                                form={form}
                                className="custom-button"
                                key="submit"
                                htmlType="submit"
                                type="primary"
                                onClick={handleFilterValues}
                            >
                                Применить
                            </Button>
                        </div>
                    </Drawer>
                    <Outlet context={[filterValues]} />
                </div>
            </div>
        </Content>
    );
};
