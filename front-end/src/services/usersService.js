import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../shared/apolloClient";
import { 
    GET_ALL_USERS, 
    GET_USERS_BY_FIRST_NAME, 
    GET_USERS_BY_LAST_NAME, 
    CREATE_USER, 
    UPDATE_USER,
    DELETE_USER } from "../graphql-operations/usersGraphQLOperations";

export const GetAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (data) => await (await client.query({
    query: GET_ALL_USERS,
    variables: {
        first: data.first, 
        after: data.after, 
        last: data.last, 
        before: data.before
    }
  })).data
);

export const GetUsersByFirstName = createAsyncThunk(
    "user/getUsersByFirstName",
    async (data) => await (await client.query({
      query: GET_USERS_BY_FIRST_NAME,
      variables: {
          first_Name: data.first_Name,
          first: data.first, 
          after: data.after, 
          last: data.last, 
          before: data.before
      }
    })).data
  );

export const GetUsersByLastName = createAsyncThunk(
    "user/getUsersByLastName",
    async (data) => await (await client.query({
      query: GET_USERS_BY_LAST_NAME,
      variables: {
          last_Name: data.last_Name,
          first: data.first, 
          after: data.after, 
          last: data.last, 
          before: data.before
      }
    })).data
  );

export const CreateUserRecord = createAsyncThunk(
    "user/createUser",
    async (data) => await (await client.mutation({
      mutation: CREATE_USER,
      variables: {
        userInput: {
            first_Name: data.first_Name,
            last_Name: data.last_Name,
            date_Of_Birth: data.date_Of_Birth,
            email_Address: data.email_Address,
            address: data.address,
            city: data.city,
            country: data.country,
            zip_Code: data.zip_Code
        }
      }
    })).data
  );

export const UpdateUserRecord = createAsyncThunk(
    "user/updateUser",
    async (data) => await (await client.mutation({
      mutation: UPDATE_USER,
      variables: {
        userID: data.userID,
        userInput: {
            first_Name: data.first_Name,
            last_Name: data.last_Name,
            date_Of_Birth: data.date_Of_Birth,
            email_Address: data.email_Address,
            address: data.address,
            city: data.city,
            country: data.country,
            zip_Code: data.zip_Code
        }
      }
    })).data
  );
export const DeleteUserRecord = createAsyncThunk(
    "user/deleteUser",
    async (data) => await (await client.mutation({
      mutation: DELETE_USER,
      variables: {
        userID: data.userID
      }
    })).data
  );
