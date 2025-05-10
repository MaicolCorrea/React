import { useState } from "react";
import "./App.jsx";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev" isFollowing>
        MiduDev
      </TwitterFollowCard>

      <TwitterFollowCard userName="elonmusk">
        Elon Musk
      </TwitterFollowCard>
    </section>
  );
}
 