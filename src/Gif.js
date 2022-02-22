import { useEffect, useState } from "react";
// import { Button } from "./Buttons";
// // import Dailog from "./Dailog";

const GifButton = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 7000);
  });
  return (
    <div>
      <div className="gif">
        {visible ? <img src="/images/gida.gif" alt="loading..." /> : <div />}
      </div>
    </div>
  );
};

export default GifButton;
