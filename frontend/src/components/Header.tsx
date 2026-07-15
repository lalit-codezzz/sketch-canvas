import { useAuthContext } from "../context/AuthContext";
import Logo from "./Logo";
import ProfileIcon from "./private/ProfileIcon";

export default function Header () {

    const {isAuthenticated} = useAuthContext();

    return <header className="w-full h-[10%] flex justify-between items-center">

        <Logo />

        {
            isAuthenticated && <ProfileIcon />
        }

    </header>
}