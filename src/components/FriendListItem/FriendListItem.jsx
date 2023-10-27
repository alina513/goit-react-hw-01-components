
import css from "./FriendListItem.module.css"
export const FriendListItem = ({value}) => 
    (<li className={css.item}>
    {value.isOnline ? (<span className={css.online}></span>) : (<span className={css.offline}></span>)}
    <img className={css.avatar} src={value.avatar} alt="User avatar" width="48" />
    <p className="name">{value.name}</p>
  </li>)
