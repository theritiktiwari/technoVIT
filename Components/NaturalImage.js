import Image from "next/image";
import { useState } from "react";

const NaturalImage = (props) => {
  const [ratio, setRatio] = useState(16 / 9); // default to 16:9
  // const height = props.height;
  const width = props.width;
  return (
    <Image
      alt="..."
      {...props}
      // set the dimension (affected by layout)
      width={width}
      height={width / ratio}
      layout="fixed" // you can use "responsive", "fill" or the default "intrinsic"
      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
        setRatio(naturalWidth / naturalHeight)
      }
    />
  );
};
export default NaturalImage;
