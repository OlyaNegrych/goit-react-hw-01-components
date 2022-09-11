import PropTypes from 'prop-types';
import {
  ProfileBox,
  UserDescription,
  UserPhoto,
  UserName,
  UserInfo,
  StatList,
  StatItem,
} from './Profile.styled';

export const Profile = ({ username, location, tag, avatar, stats }) => {
  return (
    <ProfileBox>
      <UserDescription>
        <UserPhoto src={avatar} alt="User avatar" />
        <UserName >{username}</UserName>
        <UserInfo >@{tag}</UserInfo>
        <UserInfo >{location}</UserInfo>
      </UserDescription>

      <StatList>
        <StatItem>
          <span>Followers</span>
          <br />
          <span>
            <b>{stats.followers}</b>
          </span>
        </StatItem>
        <StatItem>
          <span>Views</span>
          <br />
          <span>
            <b>{stats.views}</b>
          </span>
        </StatItem>
        <StatItem>
          <span>Likes</span>
          <br />
          <span>
            <b>{stats.likes}</b>
          </span>
        </StatItem>
      </StatList>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
