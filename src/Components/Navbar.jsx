import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Navbar() {
  let [q, setQ]= useState("all")
  let [language, setLanguage]= ("hi")

  let[searchParams]= useSearchParams()
  useEffect(()=> {
    setQ(searchParams.get("q")??"hi")
  }, [searchParams])
  return (
    <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="#">Newsapp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to="#">Home</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to="#">Politics</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to="#">Crime</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to="#">Eucation</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to="#">Jobs</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to="#">Science</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to="#">Techmology</Link></li>
        <li className="nav-item dropdown">
          <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Entertainment</Link></li>
            <li><Link className="dropdown-item" href="#">Cricket</Link></li>
            <li><Link className="dropdown-item" href="#">Soccer</Link></li>
            <li><Link className="dropdown-item" href="#">Sports</Link></li>
            <li><Link className="dropdown-item" href="#">Economics</Link></li>
            <li><Link className="dropdown-item" href="#">World</Link></li>
            <li><Link className="dropdown-item" href="#">India</Link></li>
            <li><Link className="dropdown-item" href="#">Jokes</Link></li>
          </ul>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Languages
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">English</Link></li>
            <li><Link className="dropdown-item" href="#">Hindi</Link></li>
          </ul>
        </li>
      </ul>
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
