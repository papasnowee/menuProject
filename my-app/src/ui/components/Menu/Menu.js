import React from "react"
import { Link } from "react-router-dom"

function Menu({ routes, handleSlideToggle, menu }) {
  const menuBuilder = routes =>
    routes.map(({ id, linkPath, label, routes = null }) => (
      <li className="menu__item" key={id}>
        <Link to={linkPath}>{label}</Link>
        {routes ? (
          <>
            <button type="button" onClick={handleSlideToggle(id)}>
              {menu.get(id) ? "-" : "+"}
            </button>
            <ul style={{ display: `${menu.get(id) ? "block" : "none"}` }}>
              {menuBuilder(routes)}
            </ul>
          </>
        ) : null}
      </li>
    ))

  return (
    <nav>
      <ul>{menuBuilder(routes)}</ul>
    </nav>
  )
}
export default Menu
