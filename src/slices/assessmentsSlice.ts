import { createSlice } from "@reduxjs/toolkit";

type Assessment = {
  id: number;
  name: string;
};
interface AssessmentsState {
  assessments: Assessment[];
}
const initialState: AssessmentsState = {
  assessments: [],
};

const assessmentsSlice = createSlice({
  name: "assessments",
  initialState,
  reducers: {},
});

export default assessmentsSlice.reducer;
// export const { login, logout } = assessmentsSlice.actions;
