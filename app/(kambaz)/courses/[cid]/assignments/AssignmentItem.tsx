import Link from "next/link";

// §1.4.7 ON YOUR OWN — book stub. You fill this in.
export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  return (
    <li className="wd-assignment-list-item">
      {/* Link the title to /courses/${cid}/assignments/${aid}
          (className wd-assignment-link), then show details underneath */}
    </li>
  );
}
