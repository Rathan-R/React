import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>
        <h2>
          {err.status} : {err.statusText}
        </h2>
      </p>
      <p>{err.data}</p>
    </div>
  );
};

export default Error;
