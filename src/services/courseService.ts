import axiosInstance from "../core/interceptors/axiosInterceptor";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { Course } from "../slices/coursesSlice";

export interface GetAllCoursesResponse {
  // from: number;
  // index: number;
  // size: number;
  // count: number;
  // pages: number;
  // items: Course[];
  // hasPrevious: boolean;
  // hasNext: boolean;
  from?: number;
  index?: number;
  size?: number;
  count?: number;
  pages?: number;
  items: Course[];
  hasPrevious?: boolean;
  hasNext?: boolean;
  isLoading: boolean;
  error: null;
}

class CourseService extends BaseService<
  GetAllCoursesResponse,
  any,
  any,
  any,
  any,
  any
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "AccountCourse";
  }
  async getAllCourses(userId: any) {
    const response = await axiosInstance.get<GetAllCoursesResponse>(
      this.apiUrl
    );

    console.log(response.data.items);
    console.log("userId:", userId);
    const userCourses = response.data?.items.filter((c) => c.userId === userId);
    console.log(userCourses);
    return userCourses;
  }
  async getUserCourses(userId: any) {
    const response = await axiosInstance.get<GetAllCoursesResponse>(
      this.apiUrl + `/getbyuserid?userId=${userId}`
    );
    // http://localhost:49805/api/AccountCourse
    // http://localhost:49805/api/Course/getbyuserid?userId=4
    // http://localhost:49805/api/AccountCourse/getbyuserid?userId=3
    console.log(response);
    return response.data.items;
  }

  async getCourseById(courseId: any) {
    const response = await axiosInstance.get<GetAllCoursesResponse>(
      this.apiUrl + `/getbycourseid?courseId=${courseId}`
    );
    console.log(response.data);
    return response.data.items[0];
  }
}

export default new CourseService();
