import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';


import { Profile } from './Profile.jsx';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friendList/friendList';
import { TransactionHistory } from './transactionHistory/transactionHistory';

export const App = () => {
  return (
     
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
       <Statistics title="Upload stats" stats={data} />
     {/* <Statistics stats={data} /> */}

      <FriendList friends={friends} />
       <TransactionHistory />
</div>    
  );
};

