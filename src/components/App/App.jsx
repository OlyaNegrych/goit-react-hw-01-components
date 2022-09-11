import user from '../data/user.json';
import friends from '../data/friends.json';
import statistics from '../data/statistics.json';
import transactions from '../data/transactions.json';
import { Box } from '../App/App.styled';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Box>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload statistics" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};