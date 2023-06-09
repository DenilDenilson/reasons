const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    width={48}
    viewBox="0 0 48 48" // Acá va el tamaño original
    fill={props.color}
    {...props}
  >
    <path d="M24 23.35q-3.85 0-6.225-2.4-2.375-2.4-2.375-6.2 0-3.8 2.375-6.2Q20.15 6.15 24 6.15q3.8 0 6.225 2.375t2.425 6.225q0 3.8-2.4 6.2-2.4 2.4-6.25 2.4ZM6.9 41.5v-5.8q0-2.2 1.15-3.825T11 29.4q3.4-1.6 6.575-2.35 3.175-.75 6.375-.75 3.3 0 6.45.8 3.15.8 6.55 2.3 1.9.8 3.05 2.45 1.15 1.65 1.15 3.85v5.8Z" />
  </svg>
);

export default SvgComponent;
