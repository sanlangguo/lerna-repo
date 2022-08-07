import React, { memo } from 'react'
const classNames = require('classnames');
import './index.less'

function Button(props) {
  const classObj = {}
  const sizeClassNameMap = { large: 'lg', small: 'sm', middle: 'md', };
  const typeClassNameMap = {
    primary: 'primary',
    dashed: 'dashed',
    hover: 'hover',
    danger: 'danger',
    action: 'action',
    warning: 'warning',
    success: 'success',
    main: 'main',
    info: 'info'
  };
  if (props.size) {
    classObj[props.size] = sizeClassNameMap[props.size] ? 'ym-btn-' + sizeClassNameMap[props.size] : 'ym-btn-default';
  }
  if (props.type) {
    classObj[props.type] = typeClassNameMap[props.type] ? 'ym-btn-' + typeClassNameMap[props.type] : 'ym-btn-default';
  }
  console.log(props, classObj)
  const btnClass = classNames({
    'ym-btn-default': true,
    [classObj[props.type]]: props.type,
    [classObj[props.size]]: props.size,
  })

  return (
    <button disabled={props.disabled} onClick={() => props.onClick && props.onClick()} className={btnClass}>{props.children}</button>
  )
}

export default memo(Button)