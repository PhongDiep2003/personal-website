import React from 'react'
import DicordIcon from './DicordIcon'
import HoveredDiscordIcon from './HoveredDiscordIcon'
import Link from 'next/link'
import LinkedInIcon from './LinkedInIcon'
import HoveredLinkedInIcon from './HoveredLinkedInIcon'
const Footer = () => {
  return (
    <div className='footer'>
      {/* Name */}
      <div>
        <p className='text-base font-serif font-thin text-primary-footer'>Phong Diep —</p>
        <p className='text-base font-serif font-thin text-primary-footer'>Software Engineering</p>
      </div>

      {/* Contact */}
      <div>
        <p className='text-base font-serif font-thin text-primary-footer'>Contact —</p>
        <p className='text-base font-serif font-thin text-primary-footer'>phongdiep0712@gmail.com</p>
      </div>
      
      {/* Social Media */}
      <div>
        <p className='text-base font-serif font-thin text-primary-footer '>Social —</p>
        <div className='flex flex-row gap-10'>
          <Link className='relative' href={'https://discord.com/channels/@me'} target='_blank'>
              <DicordIcon/>
              <HoveredDiscordIcon/>
          </Link>

          <Link className='relative' href={'https://www.linkedin.com/in/phong-diep-63647b267/'} target='_blank'>
              <LinkedInIcon/>
              <HoveredLinkedInIcon/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
