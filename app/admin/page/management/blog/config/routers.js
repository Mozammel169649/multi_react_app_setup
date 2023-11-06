import All from "../all";
import Create from "../create";
import Layout from "../layout";
import setup from "./setup";

const { route_prefix } = setup;

export default {
    path: route_prefix,
    element: <Layout/>,
    children: [
        {
            path: '',
            element: <All/>
        },
        {
            path: 'create',
            element: <Create />
        },
    ]
};