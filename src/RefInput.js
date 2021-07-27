import React, { useRef,useState } from 'react';

const RefInput = () => {
  const [text, setText] = useState('')
  const input = useRef();
  const showValue = () => {
    alert(`Input contains: ${input.current.value}`);
    setText(input.current.value)
  };
  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={showValue}>
        Alert the Value!
</button>
     {text}
    </div>
  );
};

export default RefInput;