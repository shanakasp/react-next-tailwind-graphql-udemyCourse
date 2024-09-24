import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="text" />
    </div>
  );
};

export default UseRef;
