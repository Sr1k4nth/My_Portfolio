import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidemenu from '../Sidemenu/Sidemenu';

function DefaultLayout() {

    const [sidemenuActive, setsidemenuActive] = useState(() => {
        const activeIdTab = sessionStorage.getItem("sidemenuActive");
        return Number(activeIdTab) || 1;
    });

    useEffect(() => {
        sessionStorage.setItem("sidemenuActive", sidemenuActive);
        // eslint-disable-next-line
    }, [sidemenuActive]);

    return (
        <div className="defaultLayout_container">
            <div className="sidemenu_section">
                <Sidemenu
                    sidemenuActive={sidemenuActive}
                    setsidemenuActive={setsidemenuActive}
                />
            </div>
            <div className="body_section">
                <Outlet />
            </div>
        </div>
    )
}

export default DefaultLayout