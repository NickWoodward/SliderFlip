import { Flip1 } from "./Flip1";
import { Flip2 } from "./Flip2";
export default function Home() {
  return (
    <div>
      <div className="text-2xl font-bold p-6">
        Two Separate Images Flipping Fine
      </div>
      <Flip1 />
      <div className="text-2xl font-bold p-6">It Breaks with a Slider</div>
      <Flip2 />
    </div>
  );
}
