import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

import Header from "../components/Header";

export default function RootLayout () {
    return <article className="h-full w-full bg-neutral-900">
        <Header />
        <Outlet />

        <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </article>
}