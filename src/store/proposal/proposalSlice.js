import {
    postSdcRequest,
    //     postDeclarationHolder,
    getPreviewCurrentProposalSdc,
    getCurrentProposalSdc,
    changeProposal,

    //держатели
    getHolders,
    getCurrentHolder,

    //ОС
    postOrganSertificationSdc,
    getOrganSertifications,
    getCurrentOsSdc,
    editCurrentOsSdc,
    changeStatus,

    //эксперты
    postExpertOsSdc,
    getExpertsOs,
    getCurrentExpertOs,
    editCurrentExpertOs,
} from './actions';
import { createSlice } from '@reduxjs/toolkit';

const changeIsCardEditable = (status, state) => {
    if (status !== 1 && status !== 2) {
        state.isCardEditable = false;
    } else {
        state.isCardEditable = true;
    }
};

export const currentProposalTest = createSlice({
    name: 'currentProposalTest',
    initialState: {
        currentProposalSdc: {},
        previewProposalSdc: {},
        holders: [],
        organSertificationSdc: [],
        currentOsSdcCard: {},
        currentHolder: {},
        expertsOs: [],
        currentExpertOs: {},
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
        isCardEditable: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //Работа с основными заявлениями СДС
            .addCase(getPreviewCurrentProposalSdc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                getPreviewCurrentProposalSdc.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    changeIsCardEditable(action.payload.status.id, state);
                    state.previewProposalSdc = action.payload;
                }
            )
            .addCase(getPreviewCurrentProposalSdc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.previewProposalSdc = null;
            })
            .addCase(changeProposal.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(changeProposal.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload.success) {
                    state.isSuccess = true;
                    state.currentProposalSdc = action.payload;
                }
            })
            .addCase(changeProposal.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentProposalSdc = null;
            })
            .addCase(getCurrentProposalSdc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCurrentProposalSdc.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentProposalSdc = action.payload;
            })
            .addCase(getCurrentProposalSdc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentProposalSdc = null;
            })
            .addCase(postSdcRequest.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postSdcRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentProposalSdc = action.payload;
            })
            .addCase(postSdcRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentProposalSdc = null;
            })

            //Держатели
            //   .addCase(postDeclarationHolder.pending, (state) => {
            //       state.isLoading = true;
            //   })
            //   .addCase(postDeclarationHolder.fulfilled, (state, action) => {
            //       state.isLoading = false;
            //       state.isSuccess = true;
            //       state.holders = action.payload;
            //   })
            //   .addCase(postDeclarationHolder.rejected, (state, action) => {
            //       state.isLoading = false;
            //       state.isError = true;
            //       state.message = action.payload;
            //       state.holders = null;
            //   })
            .addCase(getHolders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getHolders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.holders = action.payload;
            })
            .addCase(getHolders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.holders = null;
            })

            .addCase(getCurrentHolder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCurrentHolder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentHolder = action.payload;
            })
            .addCase(getCurrentHolder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentHolder = null;
            })

            //ОС
            .addCase(postOrganSertificationSdc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postOrganSertificationSdc.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.organSertificationSdc = action.payload;
            })
            .addCase(postOrganSertificationSdc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.organSertificationSdc = null;
            })
            .addCase(getOrganSertifications.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrganSertifications.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.organSertificationSdc = action.payload;
                //  Array.prototype.push.apply(
                //      state.organSertificationSdc,
                //      action.payload
                //  );
                //  state.organSertificationSdc.push({
                //      test: action.payload,
                //  });
            })
            .addCase(getOrganSertifications.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.organSertificationSdc = null;
            })
            .addCase(getCurrentOsSdc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCurrentOsSdc.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentOsSdcCard = action.payload;
            })
            .addCase(getCurrentOsSdc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentOsSdcCard = null;
            })
            .addCase(editCurrentOsSdc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editCurrentOsSdc.fulfilled, (state, action) => {
                state.isLoading = false;
                //  console.log(action.payload, 'action payload in edit card');
                if (action.payload.success) {
                    state.isSuccess = true;
                    state.currentOsSdcCard = action.payload;
                }

                //  state.errorMessage = action.payload.message;
            })
            .addCase(editCurrentOsSdc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentOsSdcCard = null;
            })

            //работа с экспертами ОС
            .addCase(postExpertOsSdc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postExpertOsSdc.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentExpertOs = action.payload;
            })
            .addCase(postExpertOsSdc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentExpertOs = null;
            })
            .addCase(getExpertsOs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getExpertsOs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.expertsOs = action.payload;
            })
            .addCase(getExpertsOs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.expertsOs = null;
            })
            .addCase(getCurrentExpertOs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCurrentExpertOs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentExpertOs = action.payload;
            })
            .addCase(getCurrentExpertOs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentExpertOs = null;
            })
            .addCase(editCurrentExpertOs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editCurrentExpertOs.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload.success) {
                    state.isSuccess = true;
                    state.currentExpertOs = action.payload;
                }
            })
            .addCase(editCurrentExpertOs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentExpertOs = null;
            })

            //смена статусов заявки
            .addCase(changeStatus.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(changeStatus.fulfilled, (state, action) => {
                state.isLoading = false;
                changeIsCardEditable(action.payload.status.id, state);
                state.previewProposalSdc = action.payload;
            })
            .addCase(changeStatus.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentOsSdcCard = null;
            });
    },
});

export default currentProposalTest.reducer;
