import { getImageProps } from 'next/image'
import { prepareSrc } from "./helper";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ImageProps = {
  src: string | StaticImport;
  alt: string;
}
export default function Image(props: ImageProps) {
  const { src, ...restImageProps } = props
  const {
    props: { ...rest },
  } = getImageProps({
    ...restImageProps,
    src: prepareSrc(src),
  })

  return (
    <img
      alt={ undefined }
      { ...rest }
    />
  )
}


