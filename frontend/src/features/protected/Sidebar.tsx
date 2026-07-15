import { NavLink } from "react-router";
import { useAuthContext } from "../../context/AuthContext";

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
    return <aside className="h-full w-[12%] border-r border-neutral-800 p-2">
        {
            sidebar.map((link) => <NavLink className={({ isActive }) => {
                let clas = "";
                if (isActive) {
                    console.log(11);
                    clas += "bg-blue-700 font-semibold";
                    setOpenedTab(link.label);
                } else {
                    clas += "bg-neutral-800";
                }
                clas += " block text-center py-2 rounded-sm w-full mt-4 text-sm text-white";

                return clas;
            }} to={link.endpoint}>{link.label}</NavLink>)
        }
    </aside>
}