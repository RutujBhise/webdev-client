"use client";

import Link from "next/link";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";

export default function Lab4() {
  function sayHello(message: string) {
    alert(message);
  }
  function sampleFromParent() {
    alert("Sample from parent");
  }
  function sayMyName() {
    alert("Rutuj Bhise");
  }
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <p>
        More Lab 4 pages:{" "}
        <Link href="/labs/lab4/profile-form" id="wd-lab4-profile-forms-link">
          Profile forms
        </Link>{" "}
        ·{" "}
        <Link href="/labs/lab4/hooks" id="wd-lab4-hooks-link">
          Custom hooks
        </Link>
      </p>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello"
        theFunction={sayHello}
        theOtherFunction={sampleFromParent}
        myFunction={sayMyName}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <hr />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ZustandExamples />
      <ReduxExamples />
      <Effect />
    </div>
  );
}
