import React from 'react'

const Resume = () => {
  let deviceType = 'mobile'
  switch (window.navigator.platform) {
    case 'MacIntel':
    case 'Linux x86_64':
    case 'Win32':
      deviceType = 'desktop'
      break
    default:
      break
  }
  let pdfArticle = null
  if (deviceType === 'mobile') {
    window.open('http://jmarkstevens.com/JMarkStevensResume.pdf', '_blank')
  } else {
    pdfArticle = (
      <embed
        width="100%"
        height="100%"
        src="JMarkStevensResume.pdf"
        type="application/pdf"
      />
    )
  }
  return <div className="resume-container">{pdfArticle}</div>
}

export default Resume
