interface InputProps {
  type: string,
  placeholder?: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ 
  type, 
  placeholder,
  value,
  onChange
}: InputProps) => {

  return (
    <input
      className="p-1 bg-transparent border-[1px] outline-none w-full placeholder: px-2"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input;