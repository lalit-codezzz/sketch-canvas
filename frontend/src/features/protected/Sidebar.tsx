import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";

const sidebar = [
    {
        id: "dash-1",
        label: "Dashboard",
        endpoint: "/user/dashboard",
    },
    {
        id: "canv-2",
        label: "All Canvases",
        endpoint: "/user/canvases",
    }
];


export default function Sidebar() {
    const { setOpenedTab } = useAuthContext();
    const [currentTab, setCurrentTab] = useState("dashboard");
    const navigate = useNavigate();

    return <aside className="h-full w-[12%] border-r border-neutral-800 p-2">
        {
            sidebar.map((link) => <button className={ ((link.endpoint.split("/")[2] === currentTab) ? "bg-blue-700 font-semibold" : "bg-neutral-500 font-normal ") + " cursor-pointer block text-center py-2 rounded-sm w-full mt-4 text-sm text-white"} onClick={() => {
                navigate(link.endpoint);
                setCurrentTab(link.endpoint.split("/")[2]);
                setOpenedTab(link.label);
            }} >{link.label}</button>)
        }
    </aside>
}