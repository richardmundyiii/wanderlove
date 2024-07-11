import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signOut } from "aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import { getUser } from "../../graphql/queries";
import { updateUser } from "../../graphql/mutations";

const client = generateClient();

const initialState = {
  user: {
    name: "",
    phone: "",
    sex: "",
    age: "",
    location: "",
  },
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk("profile/fetchUser", async () => {
  const { attributes } = await signIn.currentAuthenticatedUser();
  const userData = await client.graphql(
    graphqlOperation(getUser, { id: attributes.sub })
  );
  return userData.data.getUser;
});

export const saveUser = createAsyncThunk("profile/saveUser", async (user) => {
  const { attributes } = await Auth.currentAuthenticatedUser();
  const input = {
    id: attributes.sub,
    email: attributes.email,
    ...user,
  };
  const updatedUser = await client.graphql(
    graphqlOperation(updateUser, { input })
  );
  return updatedUser.data.updateUser;
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state.user[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(saveUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(saveUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateField } = profileSlice.actions;

export default profileSlice.reducer;
