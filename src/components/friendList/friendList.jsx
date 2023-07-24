import PropTypes from "prop-types";
import { FriendListItem } from './friendListItem';
import css from "./friendList.module.css"

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendbox}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendListItem
                        key={id}
                        status={isOnline}
                        avatar={avatar}
                        name={name}
                    />);
            })
            }        
        </ul>);
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                isOnline: PropTypes.bool.isRequired
            }
        )
    ).isRequired
}