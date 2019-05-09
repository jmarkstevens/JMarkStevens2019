import classNames from 'classnames'
import React from 'react'

import HomeText from './home-text'

const sec1ImgUrl = './img/162284b.jpg'

const Home = () => {
  const homePageSty = {
    backgroundImage: `url(${sec1ImgUrl})`,
    backgroundSize: 'cover'
  }

  const HeadClass = classNames('home-text', 'home-text-heading')
  const SubHeadClass = classNames('home-text', 'home-text-subhead')
  return (
    <div className="home-container" style={homePageSty}>
      <div className="home-center">
        <div className="home-inner-text">
          <div className="home-inner-padding">
            <img
              alt="head shot"
              className="home-inner-image"
              src="img/jms04.jpg"
            />
            <div className={HeadClass}>{HomeText.head1}</div>
            <div className={SubHeadClass}>{HomeText.head2}</div>
            <div className="home-text">{HomeText.text1}</div>
            <div className="home-text">{HomeText.text2}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
