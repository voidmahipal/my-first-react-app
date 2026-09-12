import { useState } from "react";
import { Outlet } from "react-router";
function Dashboard() {
    const [cnt,setCnt] = useState(0);
    return <>
        <p>View your details here!</p>
        <Outlet context={{cnt,setCnt}}></Outlet>
    </>
}

export default Dashboard;