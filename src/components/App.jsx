import React from "react";
import { Profile} from "./Profile/Profile";
import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import { FriendList } from "./FriendList/FriendList";
import { Statistics} from "./Statistics/Statistics";
import transactions from "../transactions.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
const title = "";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingTop: 20,
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
{title && <Statistics title={title} stats={data} />} 
<Statistics stats={data}/>
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
    </div>
  );
};
