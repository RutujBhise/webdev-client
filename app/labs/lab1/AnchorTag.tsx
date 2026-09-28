export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/RutujBhise/webdev-client" id="wd-github">
        GitHub
      </a>
      <br />
      <a href="https://www.northeastern.edu/" id="wd-your-link">
        Northeastern University
      </a>
      <br />
      <a
        href="https://github.com/RutujBhise"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub Profile
      </a>
      <br />
      {/* With AI §1.3.9 */}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}