import AssignmentItem from "./AssignmentItem";

// §1.4.7 ON YOUR OWN — book stub. You fill this in.
export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      {/* search input, + Group, + Assignment */}
      {/* h3 wd-assignments-title */}
      <ul id="wd-assignment-list">
        {/* at least three AssignmentItems using cid */}
      </ul>
    </div>
  );
}
