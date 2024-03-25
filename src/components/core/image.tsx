import { getImageProps } from 'next/image'
import { prepareSrc } from "./helper";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ImageProps = {
  src: string | StaticImport;
  alt: string;
  [key: string]: any;
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
    <>
      <picture>
        <img
          alt=""
          { ...rest }
        />
      </picture>
    </>
  )
}


