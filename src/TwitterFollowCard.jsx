import { useState } from "react";

export function TwitterFollowCard({
  children,
  userName = "unknown",
  initialsisFollowing
}) {
  const [isFollowing, setIsFollowing] = useState(initialsisFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
    ? "tw-follow-card-btn is-following"
    : "tw-follow-card-btn";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-avatar"
          src={`https://unavatar.io/telegram/${userName}`}
          alt="Avatar de Dr David Soft"
        />
        <div className="tw-follow-card-info">
          <strong>{children}</strong>
          <span className="tw-follow-card-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejas de seguir</span>
        </button>
      </aside>
    </article>
  );
}
