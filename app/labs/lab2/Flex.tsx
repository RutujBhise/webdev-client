export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <h3>Row</h3>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white">Column 3</div>
      </div>
      <h3>Grow</h3>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <h3>Fixed width and grow</h3>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      
      <h3>AI sample</h3>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white wd-width-110px">
          Pinned 110px
        </div>
        <div className="wd-bg-color-yellow">Natural width</div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">
          I stretch
        </div>
      </div>
      
      <h3>Rutuj&apos;s row</h3>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Rutuj: I grow
        </div>
        <div className="wd-bg-color-gray">Natural width</div>
        <div className="wd-bg-color-yellow wd-width-110px">Pinned 110px</div>
      </div>
    </div>
  );
}
