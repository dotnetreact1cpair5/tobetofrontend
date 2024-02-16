import axiosInstance from "../core/interceptors/axiosInterceptor";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";

export interface GetAllCoursesResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: Course[];
  hasPrevious: boolean;
  hasNext: boolean;
}
export interface Course {
  id: number;
  accountId: number;
  userId: number;
  categoryName: string;
  organizationName: string;
  contentTypeId: number;
  contentTypeName: string;
  pathFileId: number;
  name: string;
  estimatedVideoDuration: string;
  startDate: Date;
  endDate: Date;
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
    this.apiUrl = BASE_API_URL + "Course";
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
    // http://localhost:49805/api/Course/getbyuserid?userId=4
    console.log(response);
    return response.data.items;
  }
}

export default new CourseService();
