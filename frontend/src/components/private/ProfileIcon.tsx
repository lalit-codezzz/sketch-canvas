import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/AuthContext";

export default function ProfileIcon() {
    const navigate = useNavigate();
    const {setOpenedTab} = useAuthContext();
    return <div className="pr-8 flex items-center">
        <button className="rounded-full cursor-pointer" onClick={() => {
            setOpenedTab("User Profile");
            navigate("/user/profile");
        }}><FaUserCircle size={35} color="#fff" /></button>
    </div>
}