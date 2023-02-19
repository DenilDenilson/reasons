export default function Cloudy(props) {
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
        <path d="M253 918q-94.936 0-163.468-67.224Q21 783.551 21 685.505q0-81.435 51-147.47T204 459q22-100 100.051-162.5t178.26-62.5Q597 234 678.5 316.5T767 515v24q75 8 123.5 60.706Q939 652.413 939 729q0 79.083-54.958 134.042Q829.083 918 750 918H253Z" />
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
        <path d="M251 896q-88 0-149.5-61.5T40 685q0-78 50-137t127-71q20-97 94-158.5T482 257q112 0 189 81.5T748 534v24q72-2 122 46.5T920 727q0 69-50 119t-119 50H251Zm0-60h500q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-91-61-154t-149-63q-88 0-149.5 63T267 534h-19q-62 0-105 43.5T100 685q0 63 44 107t107 44Zm229-260Z" />
      </svg>
    );
  }
}
