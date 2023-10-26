import css from "./FriendList.module.css"
import { FriendListItem } from "components/FriendListItem/FriendListItem";
export const FriendList = ({friends}) => (
<ul className={css.list}>
    < FriendListItem friends = {friends}/>
</ul>)