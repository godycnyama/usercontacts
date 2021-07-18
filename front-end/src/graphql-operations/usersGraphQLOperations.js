import { gql } from "@apollo/client";

export const GET_USERS_DATA = gql`
  fragment UsersTile on User {
    userID
    first_Name
    last_Name
    date_Of_Birth
    email_Address
    address
    city
    country
    zip_Code
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers($first: Int, $after: String, $last: Int, $before: String) {
    users(first: $first, after: $after, last: $last, before: $before) {
      nodes {
        ...UsersTile
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
  ${GET_USERS_DATA}
`;

export const GET_USERS_BY_FIRST_NAME = gql`
  query GetUsersByFirstName(
    $first_Name: String
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    users(
      first: $first
      after: $after
      last: $last
      before: $before
      where: { first_Name: { eq: $first_Name } }
    ) {
      nodes {
        ...UsersTile
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
  ${GET_USERS_DATA}
`;

export const GET_USERS_BY_LAST_NAME = gql`
  query GetUsersByLastName(
    $last_Name: String
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    users(
      first: $first
      after: $after
      last: $last
      before: $before
      where: { last_Name: { eq: $last_Name } }
    ) {
      nodes {
        ...UsersTile
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
  ${GET_USERS_DATA}
`;

export const CREATE_USER = gql`
  mutation CreateUser($userInput: UserInput) {
    createUser(userInput: $userInput) {
      message
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($userID: Int!, $userInput: UserInput) {
    updateUser(userID: $userID, userInput: $userInput) {
      message
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($userID: Int!) {
    deleteUser(userID: $userID) {
      message
    }
  }
`;
