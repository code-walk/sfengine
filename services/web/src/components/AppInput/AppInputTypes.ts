export interface AppInputProps {
  id?: string
  for?: string
  error?: string
  name?: string
  label?: string
  placeholder?: string
  autocomplete?: string
  modelValue?: number | string

  minValue?: number
  maxValue?: number
  minLength?: number
  maxLength?: number

  loading?: boolean
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  full?: boolean

  variant?: 'solid' | 'outlined'
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  type?: 'text' | 'password' | 'search' | 'number' | 'file' | 'tel'
}

export interface AppInputAttrs {
  class?: string
  style?: string
}
