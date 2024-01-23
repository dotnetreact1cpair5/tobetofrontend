import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Course {
  id: number;
  name: string;
  createdDate: string;
  imageUrl: string;
}

interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  loading: true,
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await axios.get<Course[]>(
      "http://localhost:49805/api/Course?PageIndex=0&PageSize=10"
    );
    console.log(response.data);

    // return response.data as Post[];
    return response.data;
  }
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.courses = action.payload;
    });
    builder.addCase(fetchCourses.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.loading = false;

      state.error = action.error.message || "Failed to fetch courses";
    });
  },
});

export default coursesSlice.reducer;
