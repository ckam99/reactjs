import React from 'react'
import styled from 'styled-components'
import { isNumeric } from '../../helpers'

const Shimmer = ({ width = '100%', height = 10, corner = 1, theme = 'light', className = null }) => {

  const classes = `shimmer ${className}`
  const _width = isNumeric(width) ? width + 'px' : width
  const _height = isNumeric(height) ? height + 'px' : height
  const _corner = isNumeric(corner) ? corner + 'px' : corner
  const _background = theme === 'dark' ? 'rgba(255,255,255, 0.2)' : '#eee'

  const styles = {
    width: _width,
    height: _height,
    borderRadius: _corner,
    background: _background,
  }

  return <Wrapper>
    <div className={classes} style={styles}></div>
  </Wrapper>
}

const Wrapper = styled.div`
.shimmer {
  position: relative;
  overflow: hidden;
  /* width: _width;
  height: _height;
  border-radius: _corner;
  background: _background; */
}
.shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  animation: wave 1.3s linear 0.5s infinite;
}
@keyframes wave {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  65% {
    opacity: 1;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(100%);
  }
}
`

export default Shimmer