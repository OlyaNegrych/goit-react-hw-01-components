import PropTypes from 'prop-types';
import {
  Friend,
  OnlineStatus,
  FriendPhoto,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <OnlineStatus
        style={{
          backgroundColor: `${ isOnline ? "green" : "red"}`
        }}
      >
        {isOnline}
      </OnlineStatus>
      <FriendPhoto src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
