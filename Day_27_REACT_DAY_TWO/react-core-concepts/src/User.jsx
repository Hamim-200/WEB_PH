export default function User({user}){
    console.log(user);

    const {name,email} = user;
    return(
        <div className="card">
            <h4>Name : {name} </h4>
            <h6>Email : {email} </h6>
        </div>
    )
}

