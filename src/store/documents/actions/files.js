import { createAsyncThunk } from '@reduxjs/toolkit';
// import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';

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

        payload.forEach((file) => {
            formData.append('uploadedFile[]', file.uploadedFile);
        });

        //    console.log(
        //        documentsFileList.get('uploadedFile'),
        //        'formdata.uploadedFile'
        //    );
        // debugger;

        const result = await fetch(
            `https://api-prof-sdc.anonamis.ru/api/request/request_sdc_standard_certification/${payload.id}/document/${payload.documentId}/file/add`,
            {
                method: 'POST',
                body: formData,
            }
        );
        console.log(result, 'uploadFiles');

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
