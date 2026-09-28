// §1.4.8 ON YOUR OWN — book stub. You complete the rest.
// NOTE: the book stub puts text *between* <textarea> tags. React 19 throws on
// that (see book §1.3.6.2), so the description uses defaultValue instead.
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          {/* Complete on your own — see checklist in §1.4.8 */}
        </tbody>
      </table>
    </div>
  );
}
