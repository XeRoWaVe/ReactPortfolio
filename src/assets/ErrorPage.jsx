import { useRouteError } from "react-router";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error)

    return (
        <div id="error page">
            <h1>Boom!</h1>
            <p>Sorry, something blew up!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}