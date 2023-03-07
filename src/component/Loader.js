import React from 'react'
import Sty from '../css/Loader.module.css'

export default function Loader() {
  return (
    <div className={Sty.lds_facebook}><div></div><div></div><div></div></div>
  )
}
