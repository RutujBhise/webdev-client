export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
       
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          AI sample: this box is declared 120px wide and 60px tall, so a long
          sentence like this one cannot make the box any bigger.
        </div>
        
        <div className="wd-dimension-rutuj wd-bg-color-green wd-fg-color-white">
          Rutuj&apos;s 250×150 box keeps its size whether the text is short or long.
        </div>
      </div>
    </div>
  );
}
