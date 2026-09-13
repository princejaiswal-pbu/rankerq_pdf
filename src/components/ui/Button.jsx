import './button.css'

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <Component className={`btn btn--${variant} btn--${size} ${className}`} {...props}>
      {children}
    </Component>
  )
}
