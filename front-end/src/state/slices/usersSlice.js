import { createSlice } from "@reduxjs/toolkit";
import { openToast } from "../../shared/Toast";
import { 
  GetAllUsers, 
  GetUsersByFirstName, 
  GetUsersByLastName,
  CreateUserRecord,
  UpdateUserRecord,
  DeleteUserRecord } from "../../services/usersService";

export const initialState = {
  loading: false,
  hasErrors: false,
  usersSearchFilters: {
    searchBy: "All",
    searchTerm: "",
    pageSize: 5,
    startCursor: null,
    endCursor: null,
    hasNextPage: false,
    hasPreviousPage: false,
    totalResults: 4,
  },
  users: [
    {
      userID : 0,
      first_Name: "Godknows",
      last_Name: "Nyamatendedza",
      date_Of_Birth: "27/05/1977",
      email_Address: "godycnyama@gmail.com",
      address: "20H Sun & Surf",
      city: "Ballito",
      country: "South Africa",
      zip_Code: "4420"
    },
    {
      userID : 1,
      first_Name: "Cheryl",
      last_Name: "Nyamatendedza",
      date_Of_Birth: "05/01/2011",
      email_Address: "godycnyama@gmail.com",
      address: "20H Sun & Surf",
      city: "Ballito",
      country: "South Africa",
      zip_Code: "4420"
    },
    {
      userID : 2,
      first_Name: "Shanique",
      last_Name: "Nyamatendedza",
      date_Of_Birth: "28/08/2019",
      email_Address: "godycnyama@gmail.com",
      address: "20H Sun & Surf",
      city: "Ballito",
      country: "South Africa",
      zip_Code: "4420"
    },
    {
      userID : 3,
      first_Name: "Kudakwashe",
      last_Name: "Nyamatendedza",
      date_Of_Birth: "14/01/1983",
      email_Address: "godycnyama@gmail.com",
      address: "20H Sun & Surf",
      city: "Ballito",
      country: "South Africa",
      zip_Code: "4420"
    }
  ],
  user: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    deleteUser: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
      state.loading = false;
      state.hasErrors = false;
    },
    deleteUserFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    setUserSearchFilters: (state, { payload }) => {
      state.usersSearchFilters = payload;
    },
    setSearchBy: (state, { payload }) => {
      state.usersSearchFilters.searchBy = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.usersSearchFilters.searchTerm = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: {
    [GetAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [GetAllUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.users.totalCount === 0) {
        openToast("error", "No user records founds!");
        return;
      }
      state.users = payload.users.nodes;
      state.usersSearchFilters.startCursor = payload.users.pageInfo.startCursor;
      state.usersSearchFilters.endCursor = payload.users.pageInfo.endCursor;
      state.usersSearchFilters.hasNextPage = payload.users.pageInfo.hasNextPage;
      state.usersSearchFilters.hasPreviousPage = payload.users.pageInfo.hasPreviousPage;
      state.usersSearchFilters.totalResults = payload.users.totalCount;
    },
    [GetAllUsers.rejected]: (state, { payload }) => {
      state.loading = false;
      openToast("error", payload.networkError.result.errors[0].message);
    },
    [GetUsersByFirstName.pending]: (state) => {
      state.loading = true;
    },
    [GetUsersByFirstName.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.users.totalCount === 0) {
        openToast("error", "No user records founds!");
        return;
      }
      state.users = payload.users.nodes;
      state.usersSearchFilters.startCursor = payload.users.pageInfo.startCursor;
      state.usersSearchFilters.endCursor = payload.users.pageInfo.endCursor;
      state.usersSearchFilters.hasNextPage = payload.users.pageInfo.hasNextPage;
      state.usersSearchFilters.hasPreviousPage = payload.users.pageInfo.hasPreviousPage;
      state.usersSearchFilters.totalResults = payload.users.totalCount;
    },
    [GetUsersByFirstName.rejected]: (state, { payload }) => {
      state.loading = false;
      openToast("error", payload.networkError.result.errors[0].message);
    },
    [GetUsersByLastName.pending]: (state) => {
      state.loading = true;
    },
    [GetUsersByLastName.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.users.totalCount === 0) {
        openToast("error", "No user records founds!");
        return;
      }
      state.users = payload.users.nodes;
      state.usersSearchFilters.startCursor = payload.users.pageInfo.startCursor;
      state.usersSearchFilters.endCursor = payload.users.pageInfo.endCursor;
      state.usersSearchFilters.hasNextPage = payload.users.pageInfo.hasNextPage;
      state.usersSearchFilters.hasPreviousPage = payload.users.pageInfo.hasPreviousPage;
      state.usersSearchFilters.totalResults = payload.users.totalCount;
    },
    [GetUsersByLastName.rejected]: (state, { payload }) => {
      state.loading = false;
      openToast("error", payload.networkError.result.errors[0].message);
    },
    [CreateUserRecord.pending]: (state) => {
      state.loading = true;
    },
    [CreateUserRecord.fulfilled]: (state, { payload }) => {
      state.loading = false;
      openToast("success", payload.createUser.message);
    },
    [CreateUserRecord.rejected]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      openToast("error", payload.networkError.result.errors[0].message);
    },
    [UpdateUserRecord.pending]: (state) => {
      state.loading = true;
    },
    [UpdateUserRecord.fulfilled]: (state, { payload }) => {
      state.loading = false;
      openToast("success", payload.updateUser.message);
    },
    [UpdateUserRecord.rejected]: (state, { payload }) => {
      state.loading = false;
      openToast("error", payload.networkError.result.errors[0].message);
    },
    [DeleteUserRecord.pending]: (state) => {
      state.loading = true;
    },
    [DeleteUserRecord.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = state.users.filter((user) => user.userID !== payload);
      openToast("success", payload.deleteUser.message);
    },
    [DeleteUserRecord.rejected]: (state, { payload }) => {
      state.loading = false;
      openToast("error", payload.networkError.result.errors[0].message);
    }
  },
});

export const {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
  setUserSearchFilters,
  setSearchBy,
  setSearchTerm,
  setUser,
  setLoading
} = usersSlice.actions;

export default usersSlice.reducer;
