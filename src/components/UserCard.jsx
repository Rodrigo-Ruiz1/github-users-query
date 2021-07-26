import {Link} from 'react-router-dom';
function UserCard(props) {
    return (
        <>
        <div>
            <img src={props.picture} alt="user avatar"/>
            <h4><a href={props.url}>{props.username}</a></h4>
            <p>{props.followers}</p>
            <p>{props.following}</p>
            <Link to={`user/${props.username}`}>More</Link>
        </div>
    </>
    )
}

export default UserCard;