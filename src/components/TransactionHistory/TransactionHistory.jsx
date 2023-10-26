import css from "./TransictionHistory.module.css"
export const TransactionHistory = ({items}) => (
<table className={css.history}>
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>

<tbody>
  {items.map(value => (<tr key = {value.id}>
    <td>{value.type}</td>
    <td>{value.amount}</td>
    <td>{value.currency}</td>
  </tr>))}
</tbody>
</table>)