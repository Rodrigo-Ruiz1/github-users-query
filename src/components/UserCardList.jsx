import UserCard from './UserCard';

function UserCardList(props) {
    return (
        <>
            {props.users.map(user => {
                return (
                    <UserCard
                        key={user.id}
                        url={user.html_url}
                        username={user.login}
                        picture={user.avatar_url}
                        followers={user.followers}
                        following={user.following}
                    />
                )
            })}
        </>
    )
}

export default UserCardList;