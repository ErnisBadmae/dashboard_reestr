import { Outlet } from 'react-router-dom';
import { Select, Layout, Form, Drawer, Button } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import { Poisk } from '../../components/poisk/poisk';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { handleTitle } from '../../helpers/utils';
import { handleInputsFilter } from '../../helpers/inputsFilterConstants';

const { Content } = Layout;
const { Option } = Select;

const statusOptions = [
    {
        value: 'active',
        title: 'Действует',
    },
    {
        value: 'inactive',
        title: 'Исключено',
    },
    {
        value: 'wait',
        title: 'Замечания',
    },
];

export const TableWrapper = () => {
    const [filterValues, setFilterValues] = useState(null);
    const { pathname } = useLocation();

    let [filterModalVisible, setFilterModalVisible] = useState(false);
    const [form] = Form.useForm();

    const handleFilterValues = () => {
        setFilterValues(form.getFieldsValue());
    };

    return (
        <Content style={{ padding: '0 20px' }}>
            <div>
                <div className="registry-sro__filter-wrapper">
                    <Poisk className="registry-sro__title-search" />
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
                        onClose={() => setFilterModalVisible(false)}
                    >
                        <Form form={form}>
                            <Form.Item name="state">
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
                            </Form.Item>
                            {handleInputsFilter(pathname)}
                        </Form>
                        <div className="registry-sro__buttons-wrapper">
                            <Button
                                className="custom-button"
                                onClick={() => setFilterModalVisible(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="custom-button"
                                type="primary"
                                onClick={handleFilterValues}
                            >
                                OK
                            </Button>
                        </div>
                    </Drawer>
                    <Outlet context={[filterValues]} />
                </div>
            </div>
        </Content>
    );
};
