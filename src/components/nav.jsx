import data from '../data'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Link } from 'react-router'
import { Store } from './productContext'

export function Nav({ dark, toggle }) {
  const { cartProduct } = useContext(Store)

  return (
    <div
      className={clsx(
        'w-full',
        'flex',
        'flex-row',
        'py-4',
        'items-center',
        'justify-between',
        'px-10',
        dark ? 'bg-black text-white' : 'bg-lime-700 text-blue-100', // Adjust background and text color based on dark state
      )}
    >
      <div>
        <h2 className="text-2xl">
          <Link to="/">{data.nav.brand}</Link>
        </h2>
      </div>
      <div className="flex flex-row gap-4">
        {data.nav.nav_item.map((item) => (
          <li key={item.item_name} className="list-none gap-4">
            <Link
              className={`text-[20px] text-2xl ${
                dark ? 'text-white' : 'text-blue-100' // Conditional text color
              }`}
              to={`${item.link}`}
            >
              {item.item_name}
            </Link>
          </li>
        ))}
        <span className="px-4 font-bold text-red-600 bg-amber-100 rounded-4xl">
          {cartProduct.reduce((total, item) => total + item.quantity, 0)}
        </span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={dark}
            onChange={toggle} // This triggers the toggle function passed from the parent
          />
          <div className="w-12 h-6 bg-gray-300 rounded-full dark:bg-gray-600"></div>
          <div
            className={`${
              dark ? 'translate-x-6' : 'translate-x-0'
            } absolute left-0 top-0 bottom-0 w-6 h-6 bg-white rounded-full transition-transform`}
          ></div>
        </label>
      </div>
    </div>
  )
}

// Correctly defining propTypes outside of the component
Nav.propTypes = {
  dark: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}
