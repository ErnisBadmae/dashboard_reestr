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

        //    documentsFileList.append('uploadedFile[]', payload.uploadedFile);

        // let files = [];

        // files.push(payload.uploadedFile[0]);

        formData.append('uploadedFile[]', payload.uploadedFile);

        // payload.uploadedFile.forEach((file, index) => {
        //     formData.set('uploadedFile[]', [
        //         ...formData.get('uploadedFile[]'),
        //         JSON.stringify(payload.uploadedFile[index]),
        //     ]);
        // });

        // console.log(formData.get('uploadedFile[]'), 'formdata.uploadedFile');

        // console.log(payload.uploadedFile, 'array from payload');
        // debugger;

        try {
            const result = await axios.post(
                `https://api-prof-sdc.anonamis.ru/api/request/request_sdc_standard_certification/${payload.id}/document/${payload.documentId}/file/add`,
                //  {
                //      method: 'POST',
                //      body: formData,
                //  headers: {
                //      Authorization: `Bearer ${localStorage.getItem(
                //          'token'
                //      )}`,
                //  },
                //  }
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

            //   const res = await result.json();

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

        return result.data.data[0];
    }
);
