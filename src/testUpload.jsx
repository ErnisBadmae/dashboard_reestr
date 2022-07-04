import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDocumentCard } from './store/documents/actions';
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';

function TestUpload(props) {
    const dispatch = useDispatch();
    const [file, setFile] = useState({});
    const { id, documentId } = useParams();

    const { currentDocument } = useSelector((state) => state.files);

    useEffect(() => {
        dispatch(getDocumentCard({ id, documentId }));
    }, [dispatch, documentId, id]);

    function handleChange(event) {
        // console.log(Array.from(event.target.files), 'array filelist');
        // console.log(event.target.files, 'filelist');

        // const filesArray = event.target.files.toArray();
        // console.log(filesArray, 'filesArray')
        setFile(event.target.files[0]);
        console.log(event, 'eventTaarget');
    }
    function handleSubmit(event) {
        event.preventDefault();
        const url =
            'https://api-prof-sdc.anonamis.ru/api/request/request_sdc_standard_certification/47/document/29/file/add';
        const formData = new FormData();
        formData.append('uploadedFile[]', file);
        // formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });
    }
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>Тест-матест</h1>

                {/* <Upload
                    listType="picture-card"
                    fileList={currentDocument?.files}
                    // onPreview={handlePreview}
                    onChange={handleChange}
                    customRequest={handleSubmit}
                >
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
                </Upload> */}

                <input type="file" onChange={handleChange} />
                <button type="submit">Загрузить</button>
            </form>
        </div>
    );
}
export default TestUpload;
