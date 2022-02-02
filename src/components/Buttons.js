const Buttons = (props) => {
  const labely = props;
  return (
    <button className="btn" type="button">
      {labely.label}
    </button>
  );
};
export default Buttons;
