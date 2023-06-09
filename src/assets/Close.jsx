export default function Close(props) {
  return (
    <svg
      // onClick={closeBody}
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 96 960 960"
      width={24}
      fill={"#FBFDFE"} //BG
      {...props}
    >
      <path d="M480 640 282 838q-14 14-32.5 14T218 838q-14-13-14-31.5t14-31.5l198-199-198-198q-13-13-13-32t13-32q12-13 31-13t33 13l198 199 199-200q13-13 31.5-13t32.5 13q13 14 13 32.5T743 377L544 575l198 199q14 14 14 32.5T742 838q-13 14-32 14t-31-14L480 640Z" />
    </svg>
  );
}
