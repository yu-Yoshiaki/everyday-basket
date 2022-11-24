"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const Error = (props: Props) => {
  const handleReset = () => {
    return props.reset();
  };
  return (
    <div>
      <p>Something went wrong!</p>
      <p>{props.error.message}</p>
      <button onClick={handleReset}>Reset error boundary</button>
    </div>
  );
};

export default Error;
