export default function Clock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={48}
      viewBox="0 96 960 960"
      width={48}
      fill={props.color}
      {...props}
    >
      <path d="M588 742q10.14 12 27.888 11.5t30.068-12.457Q658 730 658 712t-11-30L522 558.566V405q0-14.949-11.312-26.474Q499.375 367 484 367q-17.375 0-29.188 11.65Q443 390.3 443 406v167q0 8.826 4 17.699 4 8.872 10 14.301l131 137ZM480.413 997q-86.053 0-163.768-32.886-77.716-32.886-134.772-89.906-57.057-57.019-89.965-134.684Q59 661.859 59 575.834q0-86.281 33.162-163.058 33.163-76.778 90.175-133.667 57.011-56.889 134.481-90.999Q394.288 154 480.276 154q86.349 0 163.07 34.093 76.72 34.093 133.594 90.967 56.874 56.874 90.967 133.621Q902 489.428 902 575.808q0 86.38-34.11 163.612t-90.999 134.243q-56.889 57.012-133.529 90.174Q566.723 997 480.413 997ZM480 576Zm-.747 330Q615 906 712.5 810.115T810 576.738Q810 440 712.871 343q-97.13-97-233.124-97Q343 246 246.5 342.638T150 576.262Q150 714 246.376 810t232.877 96Z" />
    </svg>
  );
}
