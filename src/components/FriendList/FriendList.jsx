
import css from "./FriendList.module.css"
import { FriendListItem } from "components/FriendListItem/FriendListItem";
export const FriendList = ({friends}) => (
<ul className={css.list}> {friends.map((value)=> 
    < FriendListItem value = {value} key = {value.id}/>)}
</ul>)