// React Router
import { Link, useRouteError } from "react-router-dom";

const ErrorScreen = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-xl">
        <span className="font-bold text-red-500">{error.status}!!!!</span> Page
        not found 😕
      </h1>
      <Link to={"/"} className="underline font-semibold">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorScreen;
