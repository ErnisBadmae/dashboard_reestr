export const getEntriesRequest = (state, action) => {
     return { ...state, loading: true };
   };
   
   export const getEntriesSuccess = (state, action) => {
     return { ...state, loading: false, entries: action.payload };
   };
   
   export const getEntriesFail = (state, action) => {
     return { ...state , loading: false};
   };
   