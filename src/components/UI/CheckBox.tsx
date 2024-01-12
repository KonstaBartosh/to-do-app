const CheckBox = () => {
  return (
    <div>
      <input
        className="
          text-violet-500 
          focus:ring-violet-300 
          border-gray-300 
          peer 
          rounded-lg
          w-5 h-5 "
        id="custom-checkbox"
        name="custom-checkbox"
        type="checkbox"
        value="custom-checkbox"
      />
    </div>
  );
};

export default CheckBox