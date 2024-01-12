interface ButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined,
  label?: string
  onClick?: () => void
}

const Button = ({ label, type, onClick }: ButtonProps) => {

  return (
    <button
      className="border-[1px] p-1 w-28 hover:opacity-80"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button;