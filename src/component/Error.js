import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const errorRouter = useRouteError();
    console.log(errorRouter);
    return(
        <div>
            <h1>Error! {errorRouter.status}</h1>
            <h3>{errorRouter.data}</h3>
        </div>
    )
}
export default Error