import React, { useEffect, useState } from 'react';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDocuments } from '../../store/documents/actions';
import { Form, Input, Modal } from 'antd';
import { Select } from 'antd';
import { postDocument } from '../../store/documents/actions';
const { Option } = Select;

function Document(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isCardEditable } = useSelector((state) => state.proposalTest);
    const userRole = useSelector((state) => state.auth.user.roles);

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalTitle, setModalTitle] = useState('Добавить документ');
    const [documentType, setDocumentType] = useState(1);

    const [form] = Form.useForm();

    const { documentsContainers } = useSelector((state) => state.files);
    const { id } = useSelector(
        (state) => state.proposalTest.currentProposalSdc
    );

    useEffect(() => {
        dispatch(getDocuments(id));
    }, [dispatch, id]);

    const handleOk = (values) => {
        setModalTitle('Идет создание документа...');
        setConfirmLoading(true);
        const data = { ...values, fileType: documentType, id };
        dispatch(postDocument(data))
            .unwrap()
            .then(() => {
                setVisible(false);
                setConfirmLoading(false);
            });
        // setTimeout(() => {
        //     console.log(values, documentType, 'form data');
        //     setVisible(false);
        //     setConfirmLoading(false);
        // }, 1000);
    };

    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong>Документы</strong>
                </div>

                {isCardEditable && userRole === 'user_sdc' && (
                    <div className="btn__edit">
                        <ButtonRegistry
                            text={'Добавить документ'}
                            onClick={() => {
                                setVisible(true);
                            }}
                        />
                        <Modal
                            visible={visible}
                            title={modalTitle}
                            okText="Submit"
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
                                    label="Description"
                                >
                                    <Input type="options" />
                                </Form.Item>
                                <Select
                                    defaultValue="1"
                                    onChange={(value) => {
                                        setDocumentType(value);
                                    }}
                                >
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                </Select>
                            </Form>
                        </Modal>
                    </div>
                )}

                {documentsContainers?.length > 0 ? (
                    documentsContainers?.map((el) => {
                        return (
                            <Link
                                to={`/request_sdc/${id}/current-document/${el.id}`}
                                key={el.id}
                                className="card__field strong-title"
                            >
                                {el.description}
                            </Link>
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
