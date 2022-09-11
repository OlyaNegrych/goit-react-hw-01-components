import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import {FriendListUl} from './FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </FriendListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
