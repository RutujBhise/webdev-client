export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const myShop = { shop: "Stormyshop", category: "gaming" };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
      myShop = {JSON.stringify(myShop)} <br />
      sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })}
      <hr />
    </div>
  );
}
