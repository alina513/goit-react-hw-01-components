import css from "./Statistics.module.css";

export const Statistics = ({title, stats}) => {return (
    <section className={css.statistics}>
   {title && <h2 className={css.title}>{title}</h2>}
  <ul className={css.list}>
    {stats.map((value) =>  (
    <li className={css.item} key = {value.id}>
      <span className={css.label}>{value.label}</span>
      <span className={css.percentage}>{value.percentage}</span> </li>))}
  </ul>
</section>
);};