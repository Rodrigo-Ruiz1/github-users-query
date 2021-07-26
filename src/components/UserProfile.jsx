import { useParams } from 'react-router-dom';

function UserProfile(props) {
    console.log(props.users)
    const { username } = useParams();
    const users = props.users;
    const user = users.find((user) => {
        if (user.login === username) {
            return user;
        }
    })
    console.log(user);
    return (
        <>
        <h1>{user.login}</h1>
        </>
    )

}

export default UserProfile;