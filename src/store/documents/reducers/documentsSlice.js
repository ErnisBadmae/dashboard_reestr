import {
    postDocument,
    uploadFiles,
    getDocuments,
    getDocumentCard,
} from '../actions';
import { createSlice } from '@reduxjs/toolkit';

export const documents = createSlice({
    name: 'documents',
    initialState: {
        documentsContainers: null,
        currentDocument: {},
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postDocument.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postDocument.fulfilled, (state, action) => {
                state.isLoading = false;
                state.documentsContainers.push(action.payload);
            })
            .addCase(postDocument.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.documents = null;
            })

            .addCase(uploadFiles.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(uploadFiles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentDocument = action.payload;
            })
            .addCase(uploadFiles.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentDocument = null;
            })

            .addCase(getDocuments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDocuments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.documentsContainers = action.payload;
            })
            .addCase(getDocuments.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.documents = null;
            })
            .addCase(getDocumentCard.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDocumentCard.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentDocument = action.payload;
            })
            .addCase(getDocumentCard.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentDocument = {};
            });
    },
});

export default documents.reducer;
