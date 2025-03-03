import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">TextUtils</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                
            </ul>
            <div className='colorbar'>
                <div className='colorbar1' onClick={props.showcolor1}></div>
                <div className='colorbar2' onClick={props.showcolor2}></div>
                <div className='colorbar3' onClick={props.showcolor3}></div>
            </div>
            <div class="form-check form-switch mx-2">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick = {props.ssmode} />
                <label class="form-check-label" style={{color : props.mode==='dark'?'white':'black'}} htmlFor="flexSwitchCheckDefault">{props.tttt}</label>
            </div>

            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
  )
}
