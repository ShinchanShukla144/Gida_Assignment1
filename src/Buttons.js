import GifButton from "./Gif";
import GraphButton from "./Graph";
import { useState } from "react";

export const Button = () => {
  const [gif, setGif] = useState(false);
  const [graph, setGraph] = useState(false);
  return (
    <>
      <button onClick={() => setGif(true)}>Click GIF</button>
      {gif && <GifButton />}
      <button onClick={() => setGraph(true)}>Click GRAPH</button>
      {graph && <GraphButton />}
    </>
  );
};
