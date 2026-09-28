export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>

      My favorite recipe:
      <ol id="wd-your-favorite-recipe">
        <li>Heat oil in a pan and add ginger and garlic powder.</li>
        <li>Toss in chopped vegetables and stir-fry until tender.</li>
        <li>Add day-old rice and soy sauce, then mix thoroughly.</li>
        <li>Cook on high heat until warmed through and serve hot.</li>
      </ol>

      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>

      My favorite movies and shows:
      <ul id="wd-your-books">
        <li>Interstellar</li>
        <li>Avengers: Endgame</li>
        <li>Demon Slayer</li>
      </ul>

      {/* With AI §1.3.3 */}
      HTML tags from this chapter
      <ul id="wd-ai-html-tags">
        <li>h1 – the largest, top-level heading</li>
        <li>p – a paragraph with vertical spacing</li>
        <li>ol – an ordered, numbered list</li>
        <li>ul – an unordered, bulleted list</li>
        <li>table – rows and columns of data</li>
        <li>img – an image from a local or remote source</li>
        <li>form – a group of input controls</li>
      </ul>
    </div>
  );
}