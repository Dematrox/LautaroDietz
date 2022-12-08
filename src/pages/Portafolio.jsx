import React from 'react';
import { Contact } from '../components/Contact';
import { Me } from '../components/Me';
import { NavBar } from '../components/NavBar';
import { Proyects } from '../components/Proyects';
import { Skills } from '../components/Skills';

export const Portafolio = () => {

  return (
    <>
      <div className='animate__animated animate__fadeInDown slow'>
        <NavBar/>
        <section id='welcome-section'>
          <Me/>
        </section>
        <section id='skills-section'>
          <Skills/>
        </section>
        <section id='proyects-section'>
          <Proyects/>
        </section>
        <section id='contact-section'>
          <Contact/>
        </section>
      </div>
    </>
  )
}
