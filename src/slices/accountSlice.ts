// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// interface AccountData {
//   id: number;
//   name: string;
//   // ... other fields
// }

// interface AccountState {
//   data: AccountData | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AccountState = {
//   data: null,
//   loading: "idle",
//   error: null,
// };

// // export const fetchAccountData = createAsyncThunk(
// //   "account/fetchAccountData",
// //   async (accountId: number) => {
// //     const response = await fetch(
// //       `https://api.example.com/accounts/${accountId}`
// //     );
// //     if (!response.ok) {
// //       throw new Error(
// //         `Failed to fetch account data (Status: ${response.status})`
// //       );
// //     }
// //     const data = await response.json();
// //     return data;
// //   }
// // );

// const accountSlice = createSlice({
//   name: "account",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAccountData.pending, (state) => {
//         state.loading = "pending";
//         state.error = null;
//       })
//       .addCase(fetchAccountData.fulfilled, (state, action) => {
//         state.loading = "succeeded";
//         state.data = action.payload;
//       })
//       .addCase(fetchAccountData.rejected, (state, action) => {
//         state.loading = "failed";
//         state.error = action.error.message || "Failed to fetch account data";
//       });
//   },
// });

// export default accountSlice.reducer;
// export const { select: selectAccountData } = accountSlice;
