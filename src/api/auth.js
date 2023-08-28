import { redirect } from "react-router-dom";
import socket from "../middleware/socket";

const auth = async () => {

    const token = localStorage.getItem("token") || null;

    const res = await fetch(`${process.env.REACT_APP_URL}/auth/user`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
    const status = await res.status;
    if (status !== 200) {
        return redirect("/login");
    }
    if (token) {
        socket.auth = { token };
        socket.connect();
    }

    return null;
}
export default auth;