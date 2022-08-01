import React, { useEffect, useState } from 'react';

import {
    PlusOutlined,
    DeleteOutlined,
    DownloadOutlined,
} from '@ant-design/icons';
import {
    getDocumentCard,
    uploadFiles,
    deleteFileDocument,
    saveFileDocument,
    deleteDocument,
} from '../../store/documents/actions';

import { Modal, Upload, Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './currentUploadDocument.css';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const getFileSize = (size) => {
    return `${(size / 8 / 1024).toFixed(2)} KB`;
};

function CurrentUploadDocument(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { proposalOsId, sdcId, documentId } = useParams();

    const { currentDocument } = useSelector((state) => state.files);
    const userRole = useSelector((state) => state.auth.user.roles);
    const { isCardEditable } = useSelector((state) => state.proposalTest);

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    useEffect(() => {
        sdcId && dispatch(getDocumentCard({ id: sdcId, documentId }));
        proposalOsId &&
            dispatch(getDocumentCard({ id: proposalOsId, documentId }));
    }, [proposalOsId, sdcId, documentId, dispatch]);

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(
            file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
        );
    };

    function handleSubmit(event) {
        sdcId &&
            dispatch(
                uploadFiles({
                    id: sdcId,
                    documentId,
                    uploadedFiles: event.file,
                })
            )
                .unwrap()
                .then(() => {
                    dispatch(getDocumentCard({ id: sdcId, documentId }));
                });
        proposalOsId &&
            dispatch(
                uploadFiles({
                    id: proposalOsId,
                    documentId,
                    uploadedFiles: event.file,
                })
            )
                .unwrap()
                .then(() => {
                    dispatch(getDocumentCard({ id: proposalOsId, documentId }));
                });
    }

    return (
        <>
            <div className="card__body">
                <div className="card__title header__document">
                    <strong>{currentDocument?.description}</strong>
                    <strong>{currentDocument?.file_type?.title}</strong>
                </div>
                <Upload
                    listType="text"
                    fileList={currentDocument?.files}
                    itemRender={(node, file) => {
                        return (
                            <>
                                <hr className="border__container" />
                                <div className="file__container">
                                    <div className="file__field">
                                        {file.name}
                                    </div>
                                    <div className="file__size">
                                        {getFileSize(file.file_size)}
                                    </div>
                                    {userRole === 'user_sdc' && isCardEditable && (
                                        <Button
                                            type="primary"
                                            size="small"
                                            icon={<DeleteOutlined />}
                                            target={file.uid}
                                            onClick={(e) =>
                                                dispatch(
                                                    deleteFileDocument({
                                                        id: sdcId,
                                                        documentId,
                                                        file,
                                                    })
                                                )
                                                    .unwrap()
                                                    .then(() =>
                                                        dispatch(
                                                            getDocumentCard({
                                                                id: sdcId,
                                                                documentId,
                                                            })
                                                        )
                                                    )
                                            }
                                        >
                                            Удалить файл
                                        </Button>
                                    )}
                                    <Button
                                        type="primary"
                                        size="small"
                                        icon={<DownloadOutlined />}
                                        onClick={(e) => {
                                            dispatch(
                                                saveFileDocument({
                                                    id: sdcId,
                                                    documentId,
                                                    file,
                                                })
                                            );
                                        }}
                                    >
                                        Скачать файл
                                    </Button>
                                </div>
                            </>
                        );
                    }}
                    customRequest={handleSubmit}
                >
                    <Button icon={<PlusOutlined />}>Загрузить файл</Button>
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                >
                    <img
                        alt="example"
                        style={{
                            width: '100%',
                        }}
                        src={previewImage}
                    />
                </Modal>
            </div>
            <div className="declaration__buttons file__btns">
                <div></div>
                <button
                    className="btn__login declaration__btn"
                    onClick={() => navigate(-1)}
                    type="button"
                >
                    Назад
                </button>
                {userRole === 'user_sdc' && isCardEditable && (
                    <button
                        className="btn__login declaration__btn"
                        type="button"
                        style={{ width: 'auto' }}
                        onClick={() => {
                            dispatch(deleteDocument({ id: sdcId, documentId }))
                                .unwrap()
                                .then(() => navigate(-1));
                        }}
                    >
                        Удалить документ
                    </button>
                )}
            </div>
        </>
    );
}

export default CurrentUploadDocument;
