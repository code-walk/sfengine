export interface AppFormFieldProps {
  /** Подпись к элементу формы */
  label?: string
  /** Текст ошибки под элементом формы */
  error?: string
  /** Идентификатор для label */
  for?: string
  /** Добавляет звездочку к лейблу, обозначая поле как обязательное */
  required?: boolean
  /** Передает размер компонета */
  labelSize?: 'lg'
}
