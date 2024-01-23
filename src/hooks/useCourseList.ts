import { useEffect, useReducer } from "react";
import axios from "axios";

const useCourseList = () => {
  const response = axios.get("https://dummyjson.com/posts?skip=5&limit=10");
};

// interface State {
//   data: Course[] | null;
//   error: string | null;
//   loading: boolean;
// }

// interface Course {
//   id: number;
//   name: string;
//   createdDate: string;
//   imageUrl: string;
// }
// enum ActionType {
//   LOADING,
//   SUCCESS,
//   FAILED,
// }
// type Action =
//   | { type: ActionType.LOADING }
//   | { type: ActionType.SUCCESS; payload: Course[] }
//   | { type: ActionType.FAILED; payload: string };

// const initialState: State = {
//   data: null,
//   error: null,
//   loading: false,
// };

// const reducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case ActionType.LOADING:
//       return { loading: true, error: null, data: null };
//     case ActionType.FAILED:
//       return { loading: false, error: action.payload, data: null };
//     case ActionType.SUCCESS:
//       return { loading: false, error: null, data: action.payload };
//     default:
//       return initialState;
//   }
// };

// const useCourseList = () => {
//   const [{ data, loading, error }, dispatch] = useReducer(
//     reducer,
//     initialState
//   );

//   useEffect(() => {
//     fetchCourseList();
//   }, []);

//   const fetchCourseList = async () => {
//     dispatch({ type: ActionType.LOADING });
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return { data, loading, error };
// };

export default useCourseList;
