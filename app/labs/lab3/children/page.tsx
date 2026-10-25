import BoxDemo from "./BoxDemo";
import BoxModelDemo from "./BoxModelDemo";
import NestingOrderDemo from "./NestingOrderDemo";
import CardDemo from "./CardDemo";

export default function ChildrenPage() {
  return (
    <div id="wd-lab3-children">
      <h2>Composing Styles with Children</h2>
      <BoxDemo />
      <BoxModelDemo />
      <NestingOrderDemo />
      <CardDemo />
    </div>
  );
}
