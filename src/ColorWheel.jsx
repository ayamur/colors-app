import Primary from "./Primary";

const ColorWheel = (props) => {
  return (
    <>
      <div>{props.name}
        <Primary name='Red' secondaries={['Violet', 'Orange']} />
        <Primary name='Blue' secondaries={['Green', 'Violet']} />
        <Primary name='Yellow' secondaries={['Orange', 'Green']} />
      </div>
    </>
  );
}

export default ColorWheel