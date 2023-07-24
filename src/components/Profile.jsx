import React from 'react';
import css from "./profile.module.css"

export const Profile = props => (
  <div className={css.profile}>
    <div className={css.description}>
    <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        className={css.avatar}
    />
      <p className={css.name}>Petra Marica</p>
    <p className={css.tag}>@pmarica</p>
      <p className={css.location}>Salvador, Brasil</p>
  </div>

    <ul className={css.stats}>
    <div>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </div>
    <div>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </div>
    <div>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </div>
  </ul>
</div>
);