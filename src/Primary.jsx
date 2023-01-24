import Secondary from "./Secondary";

const Primary = (props) => {
  return (
    <div>
      {props.name}
      {props.secondaries?.map(secondary =>
        <Secondary name={secondary} />
      )}
    </div>
  );
}

export default Primary;