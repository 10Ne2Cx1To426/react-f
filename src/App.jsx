import React, { useEffect, useState } from "react";
import { ColorfullMessage } from "./components/ColorfullMessage";
export const App = () => {
  console.log("読み込み");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setShowFlag] = useState(true);

  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickSwichiShowFlag = () => {
    setShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setShowFlag(true);
    } else {
      faceShowFlag && setShowFlag(false);
    }
  }, [num]);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfullMessage color="blue">お元気ですか</ColorfullMessage>
      <ColorfullMessage color="pink">元気です</ColorfullMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwichiShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};
