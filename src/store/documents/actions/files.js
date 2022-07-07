import { createAsyncThunk } from '@reduxjs/toolkit';
import { error, info } from '../../../components/Toast/Toast.jsx';
import $api from '../../../http';
import axios from 'axios';
import fileDownload from 'js-file-download';

export const postDocument = createAsyncThunk(
    'postDocument/post',
    async (payload) => {
        const documentFormData = new FormData();
        documentFormData.append('fileType', payload.fileType);
        documentFormData.append('description', payload.description);

        try {
            const result = await $api.post(
                `/request/request_sdc_standard_certification/${payload.id}/document/add`,
                documentFormData
            );

            const value =
                result?.data?.data?.requestSdcStandardCertificationDocument;

            info('Документ успешно добавлен');
            return value;
        } catch (error) {
            error('Произошла ошибка');
        }
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
            info('Файл успешно добавлен');
            console.log(result, 'uploadFiles');
        } catch (err) {
            error('Произошла ошибка');
        }

        return;
    }
);

export const deleteFileDocument = createAsyncThunk(
    'deleteFileDocument/delete',
    async (payload) => {
        try {
            const result = await fetch(
                `https://api-prof-sdc.anonamis.ru/api/request/request_sdc_standard_certification/${payload.id}/document/${payload.documentId}/file/${payload.file.id}/delete`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                }
            );
            info('Файл успешно удален');
            console.log(result, 'deleteFileDocument');
        } catch (error) {
            error('Произошла ошибка');
        }
    }
);

export const saveFileDocument = createAsyncThunk(
    'saveFileDocument/save',
    async (payload) => {
        await $api
            .get(
                `https://api-prof-sdc.anonamis.ru/api/request/request_sdc_standard_certification/${payload.id}/document/${payload.documentId}/file/${payload.file.id}/get`,
                { responseType: 'blob' }
            )
            //   .then((response) => {
            //       new File([response.data], {
            //           type: 'image/jpg',
            //           lastModified: new Date(),
            //       });
            //   });
            .then((response) => {
                console.log(response);
                // const url = window.createObjectUrl(new Blob())(
                //     [response.data],
                //     {
                //         type: response.headers['content-type'],
                //     }
                // );
                // const link = document.createElement('a');
                // link.href = url;
                // link.setAttribute('download', 'ProfSdc');
                // document.body.appendChild(link);
                // link.click();
                fileDownload(response.data, payload.file.file_name);
            });
    }
);

export const getDocuments = createAsyncThunk('getDocuments/get', async (id) => {
    const result = await $api.get(
        `/request/request_sdc_standard_certification/${id}/documents`
    );

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
