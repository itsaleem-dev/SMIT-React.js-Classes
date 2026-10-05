import "./App.css";

const PropsPractice = () => {
  return (
    <div>
      <MyBtn title="A" bg="red" textColor="yellow" />
      <MyBtn bg="blue" textColor="white" />
      <MyBtn title="C" bg="green" textColor="white" />
      <MyBtn title="D" bg="yellow" textColor="black" />
    </div>
  );
};

export default PropsPractice;

function MyBtn({ bg, title, textColor }) {
  return (
    <div>
      <button
        style={{
          width: "30%",
          backgroundColor: bg,
          color: textColor,
          borderRadius: "10px",
        }}
      >
        {title || "No Data"}
      </button>
    </div>
  );
}
