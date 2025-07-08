export interface AppButtonProps {
  to?: string
  label?: string

  isLoading?: boolean
  isDisabled?: boolean

  type?: 'button' | 'submit' | 'reset'
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'solid' | 'outline' | 'soft' | 'ghost'
  rounded?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
