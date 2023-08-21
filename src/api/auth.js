import { redirect } from "react-router-dom";
import socket from "../middleware/socket";

const auth = async () => {

    const sessionID = localStorage.getItem("sessionID");

    if (sessionID) {
        socket.auth = { sessionID };
        socket.connect();
    }

    socket.on("session", ({ sessionID, userID }) => {
        // attach the session ID to the next reconnection attempts
        socket.auth = { sessionID };
        // store it in the localStorage
        localStorage.setItem("sessionID", sessionID);
        // save the ID of the user
        socket.userID = userID;
    });

    socket.on("connect_error", (err) => {
        if (err.message === "invalid username") {
        }
    });


    const token = localStorage.getItem("token") || null;
    const res = await fetch(`${process.env.REACT_APP_URL}/auth/user`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
    const status = await res.status;
    console.log(status)
    if (status !== 200) {
        return redirect("/login");
    }
    return null;
}
export default auth;