import classNames from 'classnames'
import React from 'react'

const PageIndicator = ({ activeIndex, count, onClick }) => {
  const handleDotClick = e => {
    if (onClick) onClick(parseInt(e.target.id, 10))
  }

  const renderDots = () => {
    const dots = []

    for (let i = 0; i < count; i += 1) {
      const DotClass = classNames('page-indicator-dot', {
        'page-indicator-dot-active': activeIndex === i
      })
      const ele = (
        <span
          className={DotClass}
          key={`dot${i}`}
          id={i}
          onClick={handleDotClick}
          onKeyPress={handleDotClick}
          role="button"
          tabIndex={0}
        />
      )
      dots.push(ele)
    }
    return dots
  }

  const renderedDots = renderDots()

  return <div className="page-indicator">{renderedDots}</div>
}

export default PageIndicator
