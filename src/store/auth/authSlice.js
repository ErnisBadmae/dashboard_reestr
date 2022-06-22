import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const token = localStorage.getItem('token') || null;
const user = localStorage.getItem('user-info')
    ? JSON.parse(localStorage.getItem('user-info'))
    : null;

const initialState = {
    user: user,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    token: token,
};

// Register user
export const registration = createAsyncThunk(
    'auth/register',
    async (newUser, thunkAPI) => {
        try {
            return await authService.register(newUser);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout();
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                //  state.token = action.payload.token;
                state.user = action.payload;
            })
            .addCase(registration.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.token = null;
                state.user = null;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.token = null;
                state.user = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.token = null;
                state.user = null;
            });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
