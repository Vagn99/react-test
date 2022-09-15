import "./Header.css";

const Header = ({
  type,
  children,
  className
}) => {
  className = className ? className : "";
  switch (type) {
    case 'h1':
      return <h1 className={className + " " + type}>{children}</h1>
    case 'h2':
      return <h2 className={className + " " + type}>{children}</h2>
    case 'h3':
      return <h3 className={className + " " + type}>{children}</h3>
    default:
      return <h1 className={className + " " + 'h1'}>No header type selected.</h1>
  }
}
 
export default Header;