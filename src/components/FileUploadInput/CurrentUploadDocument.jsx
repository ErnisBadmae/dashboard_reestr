import React, { useEffect, useState } from 'react';

import {
    PlusOutlined,
    DeleteOutlined,
    DownloadOutlined,
} from '@ant-design/icons';
import { Modal, Upload, Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDocumentCard, uploadFiles } from '../../store/documents/actions';

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
    const { id, documentId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDocumentCard({ id, documentId }));
    }, [id, documentId, dispatch]);

    const { currentDocument } = useSelector((state) => state.files);

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

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
        debugger;
        dispatch(uploadFiles({ id, documentId, uploadedFiles: event.file }))
            .unwrap()
            .then(() => dispatch(getDocumentCard({ id, documentId })));
    }

    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong>{currentDocument?.description}</strong>
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
                                    <div>{getFileSize(file.file_size)}</div>
                                    <Button
                                        type="primary"
                                        size="small"
                                        icon={<DeleteOutlined />}
                                    >
                                        Удалить файл
                                    </Button>
                                    <Button
                                        type="primary"
                                        size="small"
                                        icon={<DownloadOutlined />}
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

                <div className="declaration__buttons document__goback__button">
                    <button
                        className="btn__login declaration__btn"
                        onClick={() => navigate(-1)}
                        type="button"
                    >
                        Назад
                    </button>
                </div>
            </div>
        </>
    );
}

export default CurrentUploadDocument;
