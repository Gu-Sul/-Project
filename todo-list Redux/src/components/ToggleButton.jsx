export const ToggleButton = ({ todo, toggleCheckbox }) => {
  return (
    <>
      <div className="toggle-wrapper">
        <input
          className="toggle-checkbox"
          type="checkbox"
          checked={todo.checked}
          onChange={toggleCheckbox}
        />
        <div className="toggle-container">
          <div className="toggle-button"></div>
        </div>
      </div>
    </>
  );
};
