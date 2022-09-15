import "./SocialIcon.css";

const SocialIcon = ({
  type,
}) => {
  let svg;
  let link;
  switch (type) {
    case 'facebook':
      link = 'https://www.facebook.com/Frankly.Insure';
      svg = 
      (<svg height="20" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.26305 2.26261H6.43852V0.150808C6.23572 0.12203 5.53828 0.0572815 4.72602 0.0572815C3.03122 0.0572815 1.87023 1.1569 1.87023 3.17795V5.03796H0V7.3988H1.87023V13.3391H4.16323V7.39935H5.95782L6.2427 5.03851H4.16269V3.41204C4.16323 2.72969 4.34135 2.26261 5.26305 2.26261Z" fill="#455A64"></path>
      </svg>); break;
    case 'instagram':
      link = 'https://www.instagram.com/franklyinsure/';
      svg = 
      (<svg height="22" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.0625 0.610229H8.9375C11.1808 0.610229 13 2.48676 13 4.80077V9.82943C13 12.1434 11.1808 14.02 8.9375 14.02H4.0625C1.81919 14.02 0 12.1434 0 9.82943V4.80077C0 2.48676 1.81919 0.610229 4.0625 0.610229ZM8.9375 12.7628C10.5056 12.7628 11.7812 11.4469 11.7812 9.82939V4.80074C11.7812 3.18319 10.5056 1.86736 8.9375 1.86736H4.0625C2.49437 1.86736 1.21875 3.18319 1.21875 4.80074V9.82939C1.21875 11.4469 2.49437 12.7628 4.0625 12.7628H8.9375Z" fill="#455A64"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.25 7.31508C3.25 5.4637 4.70519 3.96265 6.5 3.96265C8.29481 3.96265 9.75 5.4637 9.75 7.31508C9.75 9.16646 8.29481 10.6675 6.5 10.6675C4.70519 10.6675 3.25 9.16646 3.25 7.31508ZM4.46875 7.31506C4.46875 8.46998 5.38037 9.41034 6.5 9.41034C7.61963 9.41034 8.53125 8.46998 8.53125 7.31506C8.53125 6.15931 7.61963 5.21979 6.5 5.21979C5.38037 5.21979 4.46875 6.15931 4.46875 7.31506Z" fill="#455A64"></path>
        <ellipse cx="9.99385" cy="3.71124" rx="0.433062" ry="0.446712" fill="#455A64"></ellipse>
      </svg>); break;
    case 'linkedin':
      link = 'https://www.linkedin.com/company/frankly-ins/';
      svg = 
      (<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="22px">
        <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
      </svg>); break;

    default:
      break;
  }
  return (
    <div className="SocialIcon">
      <a href={link}>
        {svg}
      </a>
    </div>
  );
}
 
export default SocialIcon;