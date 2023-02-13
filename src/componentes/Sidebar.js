import Usuario from "./Usuario";
import Sugestao from "./Sugestao";
import Links from "./Links";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario />
      <Sugestao />
      <Links />
    </div>
  );
}
