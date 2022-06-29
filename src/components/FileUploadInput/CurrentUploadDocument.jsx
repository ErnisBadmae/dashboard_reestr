import React, { useEffect, useState } from 'react';
// import { FileUploadInput } from './FileUploadInput';

import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDocumentCard, uploadFiles } from '../../store/documents/actions';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function CurrentUploadDocument(props) {
    const { id, documentId } = useParams();
    const dispatch = useDispatch();

    //     useEffect(() => {
    //         dispatch(getDocumentCard({ id, documentId }));
    //     }, [id, documentId, dispatch]);

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

    const handleChange = ({ fileList }) => {
        dispatch(uploadFiles({ id, documentId, uploadedFile: fileList }));
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Загрузить
            </div>
        </div>
    );

    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong>{currentDocument?.description}</strong>
                </div>
                <Upload
                    listType="picture-card"
                    fileList={currentDocument?.files}
                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                    {currentDocument?.files?.length >= 8 ? null : uploadButton}
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
        </>
    );
}

export default CurrentUploadDocument;
