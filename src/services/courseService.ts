import axiosInstance from "../core/interceptors/axiosInterceptor";

interface Course {
  id: number;
  name: string;
  accountId: number;
  userId: number;
  categoryName: string;
  organizationName: string;
  contentTypeId: number;
  contentTypeName: string;
  pathFileId: number;
  estimatedVideoDuration: string;
  startDate: Date;
  endDate: Date;
}
class CourseService {
  getAllCourses() {
    return axiosInstance.get("Course");
  }
}

export default new CourseService();
