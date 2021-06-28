import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import useScrollBox from '../hooks/useScrollBox'
import styles from './scrollBox.module.css'

function ScrollBox({ children }) {
  const scrollWrapperRef = useRef()
  const { isDragging } = useScrollBox(scrollWrapperRef)
  return (
    <div>
      <div ref={scrollWrapperRef}>
        <div
          role="list"
          style={{ pointerEvents: isDragging ? 'none' : undefined }}
          className="flex-1 overflow-y-hidden pt-20 flex gap-6 h-2/4"
        >
          {children.map((child, i) => (
            <div role="listitem" key={`scroll-box-item-${i}`}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

ScrollBox.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ScrollBox
