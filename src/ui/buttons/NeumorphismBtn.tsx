import "./NeumorphismBtn.css"

interface Props {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

const NeumorphismBtn = ({ className, children, onClick }: Props) => {
  return (
    <button
      className={`btn bg-[F4F2E9] dark:bg-[#141414] shadow-lg shadow-[#e0e0e0] dark:shadow-[#1c1c1c] border border-[#fff8de] dark:border-[#1c1c1c] fill-[#333333] dark:fill-[#c5c5c5] hover:border-[#0000001a] hover:dark:border-[#ffffff1a] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default NeumorphismBtn
