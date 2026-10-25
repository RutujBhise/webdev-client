export default function TemplateLiterals() {
  const five = 2 + 3;
  const result1 = "2 + 3 = " + five;
  const result2 = `2 + 3 = ${2 + 3}`;
  const username = "alice";
  const greeting1 = `Welcome home ${username}`;
  const loggedIn = false;
  const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
  const myName = "Rutuj";
  const shopLive = true;
  const myStatus = `${myName}'s Stormyshop is ${shopLive ? "live" : "offline"} while he studies in Boston`;
  const published = true;
  const courseStatus = `RS101 published: ${published ? "Yes" : "No"}`;
  return (
    <div id="wd-template-literals">
      <h4>Template Literals</h4>
      result1 = {result1} <br />
      result2 = {result2} <br />
      greeting1 = {greeting1} <br />
      greeting2 = {greeting2} <br />
      myStatus = {myStatus} <br />
      courseStatus = {courseStatus}
      <hr />
    </div>
  );
}
