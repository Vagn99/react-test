import "./Paragraph.css";

const Paragraph = ({
  type,
  children,
  className,
}) => {
  className = className ? className : "";
  let types = ['p', 'paragraph-hero', 'paragraph-section', 'paragraph-small', 'paragraph-contact'];
  if (types.includes(type))
    return <p className={className + " " + type}>{children}</p>;
  return <p className={className}>{children}</p>;
}
 
export default Paragraph;