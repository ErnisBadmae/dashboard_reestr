import React, { useEffect, useState } from 'react';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDocuments, getDocumentsOc } from '../../store/documents/actions';
import { Form, Input, Modal } from 'antd';
import { Select } from 'antd';
import { postDocument, postDocumentOc } from '../../store/documents/actions';
import { LinkOutlined, PlusOutlined } from '@ant-design/icons';

import '../CurrentCard/card-item.scss';

const { Option } = Select;
function Document(props) {
    const dispatch = useDispatch();

    const { proposalOsId, sdcId } = useParams();

    const { isCardEditable } = useSelector((state) => state.proposalTest);
    const userRole = useSelector((state) => state.auth.user.roles);

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const [modalTitle, setModalTitle] = useState('Добавить документ');
    const [documentType, setDocumentType] = useState(1);

    const [form] = Form.useForm();

    const { documentsContainers } = useSelector((state) => state.files);

    useEffect(() => {
        proposalOsId && dispatch(getDocumentsOc({ id: proposalOsId }));
        sdcId && dispatch(getDocuments({ id: sdcId }));
    }, [dispatch, proposalOsId, sdcId]);

    const handleOk = (values) => {
        setModalTitle('Идет создание документа...');
        setConfirmLoading(true);

        const data = {
            ...values,
            fileType: documentType,
            id: proposalOsId || sdcId,
        };

        sdcId &&
            dispatch(postDocument(data))
                .unwrap()
                .then(() => {
                    setVisible(false);
                    setConfirmLoading(false);
                });
        proposalOsId &&
            dispatch(postDocumentOc(data))
                .unwrap()
                .then(() => {
                    setVisible(false);
                    setConfirmLoading(false);
                });
    };

    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong className="strong-title">Документы</strong>
                </div>

                {isCardEditable &&
                    (userRole === 'user_sdc' || userRole === 'user_oc') && (
                        <div className="btn__edit">
                            <ButtonRegistry
                                text={'Добавить документ'}
                                className={'btn__login'}
                                icon={<PlusOutlined />}
                                onClick={() => {
                                    setVisible(true);
                                }}
                            />
                            <Modal
                                visible={visible}
                                title={modalTitle}
                                okText="Сохранить"
                                confirmLoading={confirmLoading}
                                onCancel={() => {
                                    setVisible(false);
                                    form.resetFields();
                                }}
                                onOk={form.submit}
                            >
                                <Form
                                    form={form}
                                    onFinish={handleOk}
                                    layout="vertical"
                                >
                                    <Form.Item
                                        name="description"
                                        label="Описание документа"
                                    >
                                        <Input type="options" />
                                    </Form.Item>
                                    <Select
                                        defaultValue="1"
                                        onChange={(value) => {
                                            setDocumentType(value);
                                        }}
                                    >
                                        <Option value="1">Сертификат</Option>
                                        <Option value="2">Изображение</Option>
                                    </Select>
                                </Form>
                            </Modal>
                        </div>
                    )}

                {documentsContainers?.length > 0 ? (
                    documentsContainers?.map((el) => {
                        return (
                            <div key={el.id} className="card__field">
                                <Link
                                    className="strong-title"
                                    to={`/${
                                        sdcId ? 'request_sdc' : 'current_oc'
                                    }/${
                                        proposalOsId || sdcId
                                    }/current-document/${el.id}`}
                                >
                                    <LinkOutlined />

                                    {el.description}
                                </Link>
                                <span>{el?.file_type?.title}</span>
                            </div>
                        );
                    })
                ) : (
                    <div>Данных не найдено</div>
                )}
            </div>
        </>
    );
}

export default Document;
