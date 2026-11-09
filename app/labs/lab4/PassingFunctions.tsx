export default function PassingFunctions({
  message,
  theFunction,
  theOtherFunction,
  myFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  theOtherFunction: () => void;
  myFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="me-2 rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Other Function
      </button>
      <button
        type="button"
        onClick={myFunction}
        id="wd-pass-functions-rutuj-click"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Say My Name
      </button>
      <hr />
    </div>
  );
}
