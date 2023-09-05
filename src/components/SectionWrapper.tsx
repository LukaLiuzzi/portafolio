interface SectionWrapperProps {
  children: React.ReactNode
  id: string
  styles?: string
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  styles = "pt-20",
}) => {
  return (
    <section className={styles} id={id}>
      {children}
    </section>
  )
}

export default SectionWrapper
