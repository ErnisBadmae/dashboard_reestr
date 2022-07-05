import { createAsyncThunk } from '@reduxjs/toolkit';
// import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';
import axios from 'axios';

export const postDocument = createAsyncThunk(
    'postDocument/post',
    async (payload) => {
        const documentFormData = new FormData();
        documentFormData.append('fileType', payload.fileType);
        documentFormData.append('description', payload.description);

        const result = await $api.post(
            `/request/request_sdc_standard_certification/${payload.id}/document/add`,
            documentFormData
        );

        const value =
            result?.data?.data?.requestSdcStandardCertificationDocument;
        //    debugger;
        console.log(result, 'postDocument');

        return value;
    }
);

export const uploadFiles = createAsyncThunk(
    'uploadFiles/upload',
    async (payload) => {
        const formData = new FormData();

        formData.append('uploadedFile[]', payload.uploadedFiles);

        try {
            const result = await axios.post(
                `https://api-prof-sdc.anonamis.ru/api/request/request_sdc_standard_certification/${payload.id}/document/${payload.documentId}/file/add`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                        'Content-type': 'multipart/form-data',
                    },
                }
            );

            console.log(result, 'uploadFiles');
        } catch (err) {
            console.log('errror', err);
        }

        return;
    }
);

export const getDocuments = createAsyncThunk('getDocuments/get', async (id) => {
    const result = await $api.get(
        `/request/request_sdc_standard_certification/${id}/documents`
    );
    console.log(result, 'uploadDocuments');

    return result.data.data[0];
});

export const getDocumentCard = createAsyncThunk(
    'getDocumentCard/view',
    async (payload) => {
        const result = await $api.get(
            `/request/request_sdc_standard_certification/${payload.id}/document/${payload.documentId}`
        );
        console.log(result, 'getDocumentCard');

        result.data.data[0].files = result.data.data[0].files.map((file) => ({
            ...file,
            name: file.file_name,
            uid: file.id,
        }));
        return result.data.data[0];
    }
);
