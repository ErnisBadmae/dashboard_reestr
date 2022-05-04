import { FilterFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import { Select, Form, Drawer, Button, Input } from 'antd';
import './filter.scss';
import { Search } from '../Search/Search';

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

export const Filter = () => {
    let [filterModalVisible, setFilterModalVisible] = useState(false);
    const [form] = Form.useForm();

    return (
        <>
            <div className="registry-sro__filter-wrapper">
                <Search className="registry-sro__title-search" />
                <div className="registry-sro__name-registry">РЕЕСТР СДС</div>
                <FilterFilled
                    className="registry-sro__filter-icon"
                    onClick={() => setFilterModalVisible(true)}
                />
            </div>

            <Drawer
                getContainer={false}
                style={{ position: 'absolute' }}
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
                    <Form.Item name="address">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Адрес"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="fullName">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Полное наименование организации"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="regNumber">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Регистрационный номер"
                        ></Input>
                    </Form.Item>
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
                        onClick={() => {
                            console.log(form.getFieldsValue());
                        }}
                    >
                        OK
                    </Button>
                </div>
            </Drawer>
        </>
    );
};
