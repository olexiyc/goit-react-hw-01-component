import PropTypes from 'prop-types';
import css from "./friendList.module.css"

export const FriendListItem = ({ avatar, name, status }) => {
  return (
      <div className={css.friendlist}>
      <div className={css.item}>
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
      </div>
      </div>
    );
  };

  FriendListItem.propTypes = {
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}