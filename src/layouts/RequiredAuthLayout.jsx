import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const staticServerUrl = process.env.REACT_APP_PATH || "";


function RequiredAuthLayout() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token") ===  null) {
            alert("로그인이 필요한 서비스입니다.");
            navigate(staticServerUrl+"/login");
        }
    }, [navigate]);

    return (
        <>
        <Outlet />
        </>
    );
}

export default RequiredAuthLayout;