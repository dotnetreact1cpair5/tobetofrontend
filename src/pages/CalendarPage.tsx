import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchPosts, selectAllPosts } from "../slices/postsSlice";
import { AppDispatch, RootState } from "../store";

function Calendar() {
  const dispatch: AppDispatch = useDispatch();
  const postsData = useSelector(selectAllPosts);
  const data = useSelector((state: RootState) => state.posts.posts);
  // console.log(data);
  // console.log(postsData);
  // console.log(useSelector((state: RootState) => state));
  console.log(useSelector((state: RootState) => state.courses.courses));
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {postsData.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
      <button onClick={() => dispatch(fetchPosts())}>click me</button>
    </div>
  );
}
export default Calendar;
