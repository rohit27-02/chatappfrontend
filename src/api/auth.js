import { redirect } from "react-router-dom";

const auth = async () => {
    const token = localStorage.getItem("token");
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