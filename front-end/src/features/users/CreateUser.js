import React from "react";
import { useHistory } from "react-router-dom";
import {
  Paper, 
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
  MenuItem  } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useMutation } from "@apollo/client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import Busy from "../../shared/Busy";
import { countryOptions } from "../../shared/constants";
import { openToast } from "../../shared/Toast";
import { CREATE_USER }  from "../../graphql-operations/usersGraphQLOperations";

const validationSchema = Yup.object().shape({
  first_Name: Yup.string().required("Required").max(50),
  last_Name: Yup.string().required("Required").max(50),
  date_Of_Birth: Yup.string().required("Required").max(150),
  email_Address: Yup.string().email().required("Required").max(150),
  address: Yup.string().required("Required").max(200),
  city: Yup.string().required("Required").max(50),
  country: Yup.string().required("Required").max(50),
  zip_Code: Yup.string().required("Required").max(10),
});

const CreateUser = () => {
  const { register, handleSubmit, errors, formState, control } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      first_Name: "",
      last_Name: "",
      date_Of_Birth: new Date(),
      email_Address: "",
      address: "",
      city: "",
      country: "",
      zip_Code: "",
    },
  });

  const { isSubmitting } = formState;
  const history = useHistory();

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      openToast("success", data.createUser.message);
      history.goBack();
    },
    onError: (error) => {
      console.log(error);
      if (error.graphQLErrors.length !== 0) {
        openToast("error", error.graphQLErrors[0].message);
      }

      if (error.networkError) {
        openToast("error", error.networkError.result.errors[0].message);
      }
    },
  });

  const onSubmit = (data) => {
    createUser({
      variables: {
        userInput: {
          first_Name: data.first_Name,
          last_Name: data.last_Name,
          date_Of_Birth: new Date(data.date_Of_Birth),
          email_Address: data.email_Address,
          city: data.city,
          country: data.country,
          zip_Code: data.zip_Code
        },
      },
    });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<KeyboardBackspaceIcon />}
        style={{ marginLeft: 0, textTransform: "none" }}
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </Button>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Paper>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ margin: 15 }}
              noValidate
            >
              <Typography variant="h6">Add User</Typography>
              <Divider />
              <br />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="first_Name"
                    inputRef={register}
                    helperText={errors.first_Name?.message}
                    variant="outlined"
                    size="small"
                    inputProps={{ maxLength: 50 }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="last_Name"
                    inputRef={register}
                    helperText={errors.last_Name?.message}
                    variant="outlined"
                    size="small"
                    inputProps={{ maxLength: 50 }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="date_Of_Birth"
                    as={
                      <DatePicker
                        autoOk
                        clearable
                        format="dd/MM/yyyy"
                        label="Date of Birth"
                        helperText={errors.date_Of_Birth?.message}
                        inputVariant="outlined"
                        size="small"
                        fullWidth
                      />
                    }
                    control={control}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="email"
                    label="Email Address"
                    name="email_Address"
                    inputRef={register}
                    helperText={errors.email_Address?.message}
                    variant="outlined"
                    size="small"
                    inputProps={{ maxLength: 150 }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    name="address"
                    multiline
                    rows="4"
                    inputRef={register}
                    helperText={errors.address?.message}
                    variant="outlined"
                    size="small"
                    inputProps={{ maxLength: 200 }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="City"
                    name="city"
                    inputRef={register}
                    helperText={errors.city?.message}
                    variant="outlined"
                    size="small"
                    inputProps={{ maxLength: 50 }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Zip Code"
                    name="zip_Code"
                    inputRef={register}
                    helperText={errors.zip_Code?.message}
                    variant="outlined"
                    size="small"
                    inputProps={{ maxLength: 10 }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="country"
                    as={
                      <TextField
                        label="Country"
                        select
                        helperText={errors.country?.message}
                        variant="outlined"
                        size="small"
                        inputProps={{ maxLength: 50 }}
                        fullWidth
                      >
                        {countryOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    }
                    control={control}
                  />
                </Grid>
              </Grid>
              <br />
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                style={{ marginRight: 15, textTransform: "none" }}
              >
                Save User
              </Button>
              <br />
              <br />
            </form>
            <Busy open={loading} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateUser;
