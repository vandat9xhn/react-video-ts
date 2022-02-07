//
export function getClassModuleCss({
  className = '',
  styles
}: {
  className: string
  styles: object
}) {
  return `${className} ${styles[className] || ''}`
}
