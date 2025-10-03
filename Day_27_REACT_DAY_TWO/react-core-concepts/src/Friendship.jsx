import { use } from "react"

export default function Friends ({friendsPromise}){

    const friends = use(friendsPromise);
    console.log(friends)
    returb (
        <div className="card">
            <h3>Friends : {friends.length}</h3>
        </div>
    )
}