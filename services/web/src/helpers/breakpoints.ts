export const bp = {
  xxs: 320,
  xs: 360,
  sm: 425,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
  xxxl: 2560,
}

export const lt = (width: number, bp: number) => width < bp
export const lte = (width: number, bp: number) => width <= bp
export const gt = (width: number, bp: number) => width > bp
export const gte = (width: number, bp: number) => width >= bp
export const inRange = (width: number, min: number, max: number) => width > min && width < max
export const inRangeEq = (width: number, min: number, max: number) => width >= min && width <= max
export const outRange = (width: number, min: number, max: number) => width < min || width > max
export const outRangeEq = (width: number, min: number, max: number) => width <= min || width >= max
