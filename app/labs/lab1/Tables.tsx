export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          {/* With AI §1.3.4 — Q4 through Q10 */}
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Next.js Routing</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Client State</td>
            <td align="center">3/10/21</td>
            <td align="right">80</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Node.js</td>
            <td align="center">3/17/21</td>
            <td align="right">94</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">Express REST APIs</td>
            <td align="center">3/24/21</td>
            <td align="right">86</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">MongoDB</td>
            <td align="center">3/31/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Deployment</td>
            <td align="center">4/7/21</td>
            <td align="right">100</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            {/* (85+90+95+88+92+80+94+86+90+100) / 10 = 900 / 10 = 90 */}
            <td colSpan={3}>Average</td>
            <td align="right">90</td>
          </tr>
        </tfoot>
      </table>
      <br />
      <h5>My courses this term</h5>
      <table border={1} width="100%" id="wd-your-table">
        <thead>
          <tr>
            <th>Course</th>
            <th align="center">Day</th>
            <th align="center">Time</th>
            <th align="right">Credits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CS 5610 Web Development</td>
            <td align="center">Tuesday</td>
            <td align="center">6:00 PM</td>
            <td align="right">4</td>
          </tr>
          <tr>
            <td>CS 6983 AI for Impact</td>
            <td align="center">Thursday</td>
            <td align="center">11:45 AM</td>
            <td align="right">4</td>
          </tr>
          <tr>
            <td>CS 5800 Algorithms</td>
            <td align="center">Monday / Wed</td>
            <td align="center">1:30 PM</td>
            <td align="right">4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
