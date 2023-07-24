import css from "./statistics.module.css"

export const Statistics = props => (
  <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>

    <ul className={css.statlist}>
    <div class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </div>
    <div class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </div>
    <div class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </div>
    <div class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </div>
  </ul>
</section>)