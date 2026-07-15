import Sidebar from "../../features/protected/Sidebar";
import { Outlet } from "react-router";
import { useAuthContext } from "../../context/AuthContext";

export default function UserLayout() {

    const { openedTab } = useAuthContext();

    console.log(openedTab);

    return <main className="h-[90%] border-t border-neutral-800 flex items-start">

        <Sidebar />

        <div className="w-[88%] p-2">
            <h2 className="text-white border-b-2 pb-4 border-neutral-800 text-3xl font-semibold pl-4">{openedTab}</h2>

            <Outlet />

        </div>

    </main>

}