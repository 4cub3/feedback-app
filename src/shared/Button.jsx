import PropTypes from 'prop-types';

function Button({children,version,type,isDisabled,onClick}) {
  return (
    <button type = {type} disabled={isDisabled} className={`btn btn-${version} disabled:cursor-not-allowed disabled:opacity-20 bg-slate-10`} onClick={onClick}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'button', 
    version: 'primary',
    isDisabled: false,
}
Button.propTypes ={
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    version: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
}
export default Button