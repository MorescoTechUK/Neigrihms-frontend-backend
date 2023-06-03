import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavbarTop = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-success text-light">
                <div className="container">
                    <div className="navbar-brand col-4" >
                        <div className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row jus">
                            <div className='border-end pe-1'>
                                <FacebookIcon />

                            </div>
                            <div className='border-end px-1'>
                                <InstagramIcon />

                            </div>
                            <div className='border-end px-1'>
                                <LinkedInIcon />

                            </div>
                            <div className='border-end px-1'>
                                <TwitterIcon />

                            </div>
                            <div className='border-end px-1'>

                                <YouTubeIcon />
                            </div>

                        </div>
                    </div>
                    <div className="col-8 " style={{display:'contents'}} >
                        <div className="d-none  d-xs-block d-sm-block">
                            <div className='d-inline-block'>
                                <a className="nav-link border-end pe-1 text-white" aria-current="page" href="#">Privacy Policy</a>
                            </div>
                            <div className='d-inline-block'>
                                <a className="nav-link border-end pe-1 text-white" href="#">Disclaimer</a>
                            </div>
                            
                            <div className='d-inline-block'>
                                <a className="nav-link border-end pe-1 text-white" href='#'>Contact</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </nav>
            


        </>
    )
}

export default NavbarTop