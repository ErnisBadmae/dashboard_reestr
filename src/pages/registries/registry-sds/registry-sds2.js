import { Table, Layout, Select, Input, Form, Drawer, Button } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { getEntries } from '../../store/entries/actions';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
    entriesTableColumns,
    organCertificationTableColumn,
    expertsListTableColumn,
    certifacatesTableColumn,
} from '../../helpers/entriesTableConstants';
import { Poisk } from '../../components/poisk/poisk';
import './registry-sds.scss';

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

export const RegistryTest = () => {
    const [data, setData] = useState([]);
    let [filterModalVisible, setFilterModalVisible] = useState(false);

    const { entries } = useSelector((state) => state.entries);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const { pathname } = useLocation();

    useEffect(() => {
        if (entries.length > 0)
            switch (pathname) {
                case '/organ-certifications/list':
                    break;
                case '/organ-certification-experts/list':
                    const dataSource = entries.map((item) => ({
                        ...item,
                        key: item.id,
                        expert_name_link: (
                            <Link
                                to={`/organ-certification-expert/view/${item.id}`}
                            >
                                {item.expert_name}{' '}
                            </Link>
                        ),
                    }));
                    setData(dataSource);
                    break;
                case '/certificates/list':
                    break;

                default:
                    break;
            }
    }, [entries, dispatch]);

    useEffect(() => {
        switch (pathname) {
            case '/organ-certifications/list':
                dispatch(getEntries(pathname));
                break;
            case '/organ-certification-experts/list':
                dispatch(getEntries(pathname));
                break;
            case '/certificates/list':
                dispatch(getEntries(pathname));
                break;

            default:
                dispatch(getEntries('/standard-certifications/list'));
                break;
        }
<<<<<<< HEAD:src/pages/registry-sro/registry-sro.js

    }, [pathname, dispatch]);

    const dataSource = entries.map((item) => ({ ...item, key: item.id }));

=======
    }, [pathname, dispatch]);

    //     console.log(dataSource, 'dataSoure');
>>>>>>> 0ba165db48191a179a6c8e6bdb4f273e5c9c7d1a:src/pages/registry-sds/registry-sds2.js

    const relocateToCard = (record) => {
        return {
            onClick: (e) => {
                e.preventDefault();
                switch (pathname) {
                    case '/organ-certifications/list':
                        navigate('/organ-certification/view/' + record.id);
                        break;

                    case '/organ-certification-experts/list':
                        navigate(
                            '/organ-certification-expert/view/' + record.id
                        );
                        break;

                    case '/certificates/list':
                        navigate('/certificate/view/' + record.id);
                        break;

                    default:
                        navigate('/standard-certification/view/' + record.id);
                        break;
                }
            },
        };
    };

    const handleColumns = () => {
        switch (pathname) {
            case '/organ_certifications/list':
                return organCertificationTableColumn;

            case '/organ-certification-experts/list':
                return expertsListTableColumn;

            case '/certificates/list':
                return certifacatesTableColumn;

            default:
                return entriesTableColumns;
        }
    };

    return (
        <div>
            <Content style={{ padding: '0 20px' }}>
                <div className="registry-sro__filter-wrapper">
                    <Poisk className="registry-sro__title-search" />
                    <div className="registry-sro__name-registry">
                        РЕЕСТР СДС
                    </div>
                    <FilterFilled
                        className="registry-sro__filter-icon"
                        onClick={() => setFilterModalVisible(true)}
                    />
                </div>
                <div className="registry-sro__drawer-wrapper">
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

                    <Table
                        columns={handleColumns()}
                        dataSource={data}
                        className="registry-sro__table"
                        size="medium"
                        filterSearch={true}
                        pagination={{
                            // pageSize: '5',
                            showSizeChanger: true,
                            // itemRender: itemRender
                            total: data.length,
                        }}
                        onRow={(record) => relocateToCard(record)}
                    />
                </div>
            </Content>
        </div>
    );
};
<<<<<<< HEAD:src/pages/registry-sro/registry-sro.js

=======
>>>>>>> 0ba165db48191a179a6c8e6bdb4f273e5c9c7d1a:src/pages/registry-sds/registry-sds2.js
