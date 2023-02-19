export default function Quote(props) {
  if (props.isFilled) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={32}
        viewBox="0 96 960 960"
        width={32}
        fill={"#FE4D6B"} //base 500
        {...props}
      >
        <path d="m618 802 80-171H511V308h323v319l-82 175H618Zm-383 0 80-171H128V308h322v319l-82 175H235Z" />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={32}
        viewBox="0 96 960 960"
        width={32}
        fill={"#62006B"} // purpura 900
        {...props}
      >
        <path d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
      </svg>
    );
  }
}
