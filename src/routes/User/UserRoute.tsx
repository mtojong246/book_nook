import { Routes, Route } from "react-router-dom";
import User from "./User";
import MyBooks from "./MyBooks/MyBooks";

export default function UserRoute() {
    return (
        <Routes>
            <Route index element={<User />} />
            <Route path='/my-books' element={<MyBooks />} />
        </Routes>
    )
}