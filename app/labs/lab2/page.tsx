import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>

      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      {/* With AI §2.1.1 */}
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        AI sample: this paragraph uses the style attribute for a purple
        background and white text.
      </p>
     
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        Rutuj&apos;s paragraph: a green background with yellow text, set right
        on the element with the style attribute.
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        {/* With AI §2.1.3 */}
        <p id="wd-ai-id-selector">
          AI sample: a fourth paragraph styled by its own ID selector.
        </p>
        
        <p id="wd-id-selector-3">
          Rutuj&apos;s third ID paragraph gets its own dark green look.
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        {/* With AI §2.1.4 */}
        <p className="wd-ai-class-selector">
          AI sample: this paragraph shares a class with the heading below.
        </p>
        <h4 className="wd-ai-class-selector">
          AI sample: this heading has the same style as the paragraph above
        </h4>
       
        <p className="wd-rutuj-class">
          Rutuj&apos;s class gives this paragraph a teal look...
        </p>
        <h4 className="wd-rutuj-class">...and this heading the same one</h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              {/* With AI §2.1.5 */}
              <span className="wd-ai-selector-5">
                AI sample: this span is a descendant of .wd-selector-1
              </span>
            </p>
          
            <div className="wd-rutuj-nested">
              Rutuj&apos;s nested div: styled because it is a descendant of
              .wd-selector-1
            </div>
          </div>
        </div>
      </div>

      <div id="wd-css-cascade">
        <h3>Cascade: specificity and source order</h3>
       
        <div id="wd-ai-cascade-demo">
          <p id="wd-ai-cascade" className="wd-ai-cascade">
            AI sample: a tag rule (green), a class rule (yellow), and an id rule
            (red) all set this background. The id rule wins.
          </p>
        </div>
       
        <div id="wd-rutuj-cascade-demo">
          <p id="wd-rutuj-cascade" className="wd-rutuj-cascade">
            Rutuj&apos;s experiment: the tag rule says light blue, the class rule
            says blue, and the id rule says dark blue. The id rule wins.
          </p>
        </div>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}
