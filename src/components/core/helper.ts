import nextConfig from "@/../next.config.mjs";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const prepareSrc = (src: string | StaticImport) => {
  try {
    if (typeof src === "string") {
      console.warn('typeof src === "string"')
      const isRelativePath = Boolean(src?.startsWith('/'))
      console.warn('isRelativePath', isRelativePath)
      const { basePath = '' } = nextConfig
      const prefix = isRelativePath ? basePath : ''
      console.warn('prefix', prefix)
      return `${prefix}${src}`
    } else {
      console.warn('typeof src !== "string"')
      return src
    }
  } catch (error) {
    console.warn('error', error)
    console.error(error)
    return src
  }
}
