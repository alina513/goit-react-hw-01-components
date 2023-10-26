import css from "./Statistics.module.css"
export const Statistics = ({stats}) => {return (
    <section className={css.statistics}>
   <h2 className={css.title}>Upload stats</h2>
  <ul className={css.list}>
    {stats.map((value) =>  (
    <li className={css.item} key = {value.id}>
      <span className={css.label}>{value.label}</span>
      <span className={css.percentage}>{value.percentage}</span> </li>))}
  </ul>
</section>
);};