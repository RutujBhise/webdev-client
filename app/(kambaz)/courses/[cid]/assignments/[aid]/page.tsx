import Link from "next/link";

const field = "w-full rounded border border-neutral-300 px-3 py-2";
const label = "mb-1 block font-medium";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className={label}>
          Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={field} />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-description" className={label}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
          className={field}
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="wd-points" className={label}>
            Points
          </label>
          <input id="wd-points" defaultValue={100} className={field} />
        </div>
        <div>
          <label htmlFor="wd-group" className={label}>
            Assignment Group
          </label>
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
        <div>
          <label htmlFor="wd-display-grade-as" className={label}>
            Display Grade as
          </label>
          <select
            id="wd-display-grade-as"
            defaultValue="PERCENTAGE"
            className={field}
          >
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
          </select>
        </div>
        <div>
          <label htmlFor="wd-submission-type" className={label}>
            Submission Type
          </label>
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className={field}
          >
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
          </select>
        </div>
      </div>

      <fieldset className="mb-4 rounded border border-neutral-300 p-3">
        <legend className="px-1 font-medium">Online Entry Options</legend>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Uploads</label>
        </div>
      </fieldset>

      <fieldset className="mb-4 rounded border border-neutral-300 p-3">
        <legend className="px-1 font-medium">Assign</legend>
        <div className="mb-3">
          <label htmlFor="wd-assign-to" className={label}>
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={field} />
        </div>
        <div className="mb-3">
          <label htmlFor="wd-due-date" className={label}>
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue="2024-05-13"
            className={field}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="wd-available-from" className={label}>
              Available from
            </label>
            <input
              type="date"
              id="wd-available-from"
              defaultValue="2024-05-06"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="wd-available-until" className={label}>
              Until
            </label>
            <input
              type="date"
              id="wd-available-until"
              defaultValue="2024-05-20"
              className={field}
            />
          </div>
        </div>
      </fieldset>

      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className={label}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={field} />
      </div>

      <hr className="mb-4" />
      <div className="flex justify-end gap-2">
        <Link
          id="wd-cancel"
          href={`/courses/${cid}/assignments`}
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          id="wd-save"
          href={`/courses/${cid}/assignments`}
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
