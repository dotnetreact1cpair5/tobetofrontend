import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import courseService from "../services/courseService";
import { useSelector } from "react-redux";
import { RootState } from "../store";

// const id = useSelector((state: RootState) => state.user.user?.id);

interface Course {
  id: number;
  name: string;
  createdDate: string;
  imageUrl: string;
}
// export interface Course {
//   id: number;
//   name: string;
//   accountId: number;
//   userId: number;
//   categoryName: string;
//   organizationName: string;
//   contentTypeId: number;
//   contentTypeName: string;
//   pathFileId: number;
//   estimatedVideoDuration: string;
//   startDate: Date;
//   endDate: Date;
// }
interface CoursesState {
  courses: Course[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  isLoading: true,
  error: null,
};
// const asyncFunction = () => {
//   return new Promise((resolve) => {
//     return resolve;
//   });
// };
// const apiFetch = async () => {
//   await asyncFunction();
// };

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await courseService.getAllCourses();
    console.log(response.data);

    return response.data;
  }
);
export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getUserCourses: (state) => {
      // state.courses = fetchCourses();
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(fetchCourses.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.error = null;
  //     state.courses = action.payload;
  //   });
  //   builder.addCase(fetchCourses.pending, (state) => {
  //     state.loading = true;
  //     state.error = null;
  //   });

  //   builder.addCase(fetchCourses.rejected, (state, action) => {
  //     state.loading = false;

  //     state.error = action.error.message || "Failed to fetch courses";
  //   });
  // },
});

export const coursesReducer = coursesSlice.reducer;
export const { getUserCourses } = coursesSlice.actions;
