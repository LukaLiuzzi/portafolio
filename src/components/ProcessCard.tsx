interface ProcessCardProps {
  title: string
  svg: string
  description: string
  alt: string
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  title,
  svg,
  description,
  alt,
}) => {
  return (
    <article className="flex gap-3 justify-center items-center mt-4 border-2 rounded p-4 border-gray-200 dark:border-gray-700">
      <img src={svg} alt={alt} className="w-20 h-20 object-contain" />
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-left">{title}</h3>
        <p className="text-left">{description}</p>
      </div>
    </article>
  )
}

export default ProcessCard
