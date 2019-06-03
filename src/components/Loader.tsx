import React from "react"
import ContentLoader from "react-content-loader"

export default () => (
  <ContentLoader
    height={24}
    width={130}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="5" y="4" rx="1" ry="1" width="80" height="3" />
    <rect x="5" y="10" rx="1" ry="1" width="20" height="2" />
    <rect x="5" y="20" rx="1" ry="1" width="30" height="3" />
  </ContentLoader>
)
