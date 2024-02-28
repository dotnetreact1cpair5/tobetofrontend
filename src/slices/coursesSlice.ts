import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import courseService from "../services/courseService";
import { RootState } from "../store";

export interface Course {
  // id: number;
  // accountId: number;
  // userId: number;
  // categoryName: string;
  // organizationName: string;
  // contentTypeId: number;
  // contentTypeName: string;
  // pathFileId: number;
  // name: string;
  // estimatedVideoDuration: string;
  // startDate: Date;
  // endDate: Date;
  courseId: number;
  userId: number;
  courseName: string;
  contentName: string;
  lessonName: string;
  sessionRecord: string;
  instructor: string;
  categoryLesson: string;
  categoryCourse: string;
  organizationName: string;
  contentTypeCourse: string;
  contentTypeLesson: string;
  pathFileCourse: string;
  pathFileLesson: string;
  estimatedVideoDuration: string;
  lessonVideoDuration: string;
  startDate: Date;
  endDate: Date;
  createdDate: Date;
}
export interface CoursesState {
  // from?: number;
  // index?: number;
  // size?: number;
  // count?: number;
  // pages?: number;
  // hasPrevious?: boolean;
  // hasNext?: boolean;
  // courses: Course[];
  // isLoading: boolean;
  // error: null;
  from?: number;
  index?: number;
  size?: number;
  count?: number;
  pages?: number;
  courses: Course[];
  hasPrevious?: boolean;
  hasNext?: boolean;
  isLoading: boolean;
  error: null;
}
const initialState: CoursesState = {
  courses: [],
  isLoading: true,
  error: null,
};
export const fetchAllCourses = createAsyncThunk(
  "courses/fetchAllCourses",
  async (userId: any) => {
    // return await courseService.getUserCourses(userId);
    return await courseService.getUserCourses(1);
  }
);
// export const fetchCourseById = createAsyncThunk(
//   "courses/fetchCoursesById",
//   async (courseId: any) => {
//     return await courseService.getCourseById(courseId);
//   }
// );
export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchAllCourses.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.isLoading = false;
          state.courses = action.payload;
          console.log(state.courses);
        }
      )
      .addCase(fetchAllCourses.rejected, (state) => {
        state.isLoading = false;
        // state.error = action.error.message;
      });
    // builder.addCase(
    //   fetchCourseById.fulfilled,
    //   (state, action: PayloadAction<Course[]>) => {
    //     state.courses = action.payload;
    //     console.log(state.courses);
    //   }
    // );
  },
});

export default coursesSlice.reducer;
