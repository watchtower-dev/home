import React from "react"
import ContentLoader from "react-content-loader"

const Subheader = (props: any) => {
  return (
    <ContentLoader height={42} width={360} {...props}>
      <rect x="25" y="20" rx="3" ry="3" width={60} height="10" />
    </ContentLoader>
  )
}

const Item = (props: any) => {
  const random = Math.floor(Math.random() * 70 + 1)
  return (
    <ContentLoader height={64} width={360} viewBox="0 0 360 64" {...props}>
      <rect x="40" y="28" rx="2" ry="2" width="16" height="16" />
      <rect x="90" y="18" rx="3" ry="3" width={200 + random} height="15" />
      <rect x="90" y="45" rx="3" ry="3" width={100} height="10" />
    </ContentLoader>
  )
}

export default React.memo((props: any) => (
  <React.Fragment>
    <Subheader {...props} />
    {Array(10)
      .fill("")
      .map((_, i) => (
        <Item
          key={i}
          style={{ opacity: Number(2 / i).toFixed(1) }}
          {...props}
        />
      ))}
  </React.Fragment>
))
