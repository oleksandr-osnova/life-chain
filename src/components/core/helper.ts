import nextConfig from "@/../next.config.mjs";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const prepareSrc = (src: string | StaticImport) => {
  try {
    if (typeof src === "string") {
      const isRelativePath = Boolean(src?.startsWith('/'))
      const { basePath = '' } = nextConfig
      const prefix = isRelativePath ? basePath : ''
      return `${prefix}${src}`
    } else {
      return src
    }
  } catch (error) {
    console.error(error)
    return src
  }
}
