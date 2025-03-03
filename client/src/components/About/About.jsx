import React from 'react'
import Members from './Members';
import "./About.css";
import shelter from '../../assets/shelter.jpg'
function About() {
    return (
        <div className='about'>
            <div className='text'>
                <div className='left'>
                    <h1 className='nuni'>About us</h1>
                    <p className='upper'>At pAwDOPT, we rescue and rehabilitate pets from various backgrounds, including strays, abandoned pets, and those surrendered by their owners. Our dedicated team of volunteers provides medical care, socialization, and training to ensure each pet is ready for their new home. </p>
                    <p className='nuni'>“Our mission is to connect loving families with pets in need of a forever home. We believe that every pet deserves a second chance, and we are dedicated to making the adoption process smooth and enjoyable for both the animals and their new families.”</p>
                </div>
                <div className='shelter'>
                    <img className='rounded-lg mt-24' src={shelter} alt="Team" />
                </div>
            </div>
            <div className='flex justify-center'>
                `   <hr class="custom-hr" />
            </div>

            <h1 className='nuni meet'>Meet our team</h1>
            <div class="flex flex-wrap justify-between text-center mt-5">
                <Members name="Thampi" position="Chief Veterinary Officer" />
                <Members name="James Anderson" position="Volunteer Coordinator" />
                <Members name="Anant Mishra" position="Adoption Counselor" />


            </div>


        </div>
    )
}

export default About