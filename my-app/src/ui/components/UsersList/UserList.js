import React from "react"

export default data => {
  console.log("data", data)
  return <div>{JSON.stringify(data)}</div>
}
