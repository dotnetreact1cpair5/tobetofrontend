import { Link } from "react-router-dom";
import showMore from "/assets/showmore.svg";
const ShowMore = () => {
  return (
    <Link to="/egitimlerim" className="flex flex-col">
      <img src={showMore} className="h-16 w-16 self-center" />
      <span>Daha Fazla Göster</span>
    </Link>
  );
};
export default ShowMore;
