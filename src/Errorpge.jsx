import { Link, useRouteError } from "react-router-dom";
const Errorpge = () => {
    const error = useRouteError();
    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen">
            <h1>Oops!</h1>
            <p>An unexpected error has occurred.</p>
            <p> Error: 
                <i className="text-red-500"> {error.statusText || error.message}</i>
            </p>
            <Link to={'/'} className="text-blue-500 bg-white border-2 px-3 py-1 rounded shadow">Back to home</Link>
        </div>
    );
};

export default Errorpge;