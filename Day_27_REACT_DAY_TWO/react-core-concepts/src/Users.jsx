import { use } from "react"
import User from "./User";

export default function Users({fetchUsers}){
    const user = use(fetchUsers);
    console.log(user)

    return (
        <div className="card">
            <h3>Users: {user.length} </h3>
            {
                user.map(user => <User user={user}></User>)
            }
        </div>
    )
}