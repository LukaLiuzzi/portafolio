interface LogoProps {
  src: string
  title: string
}

const Logo: React.FC<LogoProps> = ({ src, title }) => {
  return (
    <div className="p-2 rounded-md flex flex-col items-center gap-2 className={`btn bg-[F4F2E9] dark:bg-[#141414] shadow-lg shadow-[#e0e0e0] dark:shadow-[#1c1c1c] border border-[#fff8de] dark:border-[#1c1c1c] fill-[#333333] dark:fill-[#c5c5c5] hover:border-[#0000001a] hover:dark:border-[#ffffff1a]">
      <img
        src={src}
        alt={`Logo de ${title}`}
        className="w-10 h-10 animate-spin spin-once"
      />
      <p>{title}</p>
    </div>
  )
}

export default Logo
