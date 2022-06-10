import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';
import { correctlyDate } from '../../../helpers/utils';

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

//создание заявки
export const postSdcRequest = createAsyncThunk(
    'requestSdc/post',
    async (payload) => {
        let result = await $api.post(
            '/request/request_sdc_standard_certification/add',
            payload,
            headersAxios
        );
        console.log(result, 'postSdcRequest');
        return result.data.data.requestSdcStandardCertification;
    }
);

//препросмотр текущей карточки СДС
export const getPreviewCurrentProposalSdc = createAsyncThunk(
    'preview/getPreviewCurrentRequestSdc',
    async (cardId) => {
        let result = await $api.get(
            `request/request_sdc_standard_certification/get_request_sdc_header/${cardId}`
        );
        console.log(result, 'resultPreview');
        const value = result.data.data?.requestSdcHeader;
        return {
            ...value,
            dttm_created: correctlyDate(value.dttm_created),
            dttm_updated: correctlyDate(value.dttm_updated),
            dttm_desicion: correctlyDate(value.dttm_desicion),
        };
    }
);

//получение текущей заявки
export const getCurrentProposalSdc = createAsyncThunk(
    'view/getCurrentRequestSdc',
    async (cardId) => {
        const result = await $api.get(
            `/request/request_sdc_standard_certification/${cardId}`
        );
        const value = result.data.data?.requestSdcStandardCertification;
        console.log(value, 'current proposal request');
        return {
            ...value,
            registration_date: correctlyDate(value.registration_date),
        };
    }
);

//изменение заявки
export const changeProposal = createAsyncThunk(
    'changeProposal/edit',
    async (id, payload) => {
        let result = await $api.post(
            `/request/request_sdc_standard_certification/edit/${id}`,
            payload,
            headersAxios
        );

        return result;
    }
);

//добавление держателя
export const postDeclarationHolder = createAsyncThunk(
    'declaration/post',
    async (payload) => {
        const result = await $api.post(
            `/request/request_sdc_standard_certification_holder/add/${payload.id}`,
            payload.declarationSdsData,
            headersAxios
        );
        //    console.log(result, 'resultfrompostDeclar');
        const value = result.data.data.holder;
        return value;
    }
);

export const getHolders = createAsyncThunk('holders/get', async (id) => {
    const result = await $api.post(
        `/request/request_sdc_standard_certification_holder/list/${id}`
    );

    const value = result.data.data.data.map((obj) => {
        return {
            ...obj,
            registration_date: correctlyDate(obj.registration_date),
            exclusion_date: correctlyDate(obj.exclusion_date),
        };
    });

    return value;
});

// const arr = [
//      {
//           full_name:"неполное",
//           short_name:"неполное",
//           registration_date:"2020-12-31T00:00:00+03:00"
//      },
//      {
//           full_name:"неполное",
//           short_name:"неполное",
//           registration_date:"2020-12-31T00:00:00+03:00"
//      }
// ]

// const val = arr.map((obj) => {
//      return {
//           ...obj,registration_date:"nin"
//      }
// } )
// console.log(val);
