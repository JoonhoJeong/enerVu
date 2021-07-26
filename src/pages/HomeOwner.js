import React from 'react'
import DashBoard from "./DashBoard/DashBoard.js";
import MenuDrawer from "./MenuDrawer.js";

function HomeOwner() {
    return (
        <div>
            <MenuDrawer />
            <DashBoard />
        </div>
    )
}

export default HomeOwner
