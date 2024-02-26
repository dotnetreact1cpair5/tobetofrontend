import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="m-auto flex min-h-screen flex-col items-center justify-center space-y-12 p-12 text-center font-body">
      <h2 className="text-4xl font-bold tracking-wider">Page Not Found</h2>

      <img src="/assets/404.svg" className="mx-auto h-96 w-96 self-center" />
      <p className="text-2xl">
        Go back to the{" "}
        <Link to="/" className="underline underline-offset-2">
          Homepage
        </Link>
      </p>
    </div>
  );
};
export default NotFound;
