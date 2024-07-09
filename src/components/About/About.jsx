import React from 'react'
import "./About.css";
function About() {
    return (
        <div className='about'>
            <div className='text'>
                <div className='left'>
                    <h1 className='nuni'>About us</h1>
                    <p className='upper'>At pAwDOPT, we rescue and rehabilitate pets from various backgrounds, including strays, abandoned pets, and those surrendered by their owners. Our dedicated team of volunteers provides medical care, socialization, and training to ensure each pet is ready for their new home. </p>
                    <p className='nuni'>“Our mission is to connect loving families with pets in need of a forever home. We believe that every pet deserves a second chance, and we are dedicated to making the adoption process smooth and enjoyable for both the animals and their new families.”</p>
                </div>
                <div className='image'>
                    <img src="" alt="Team" />
                </div>
            </div>
            <div className='flex justify-center'>
            `   <hr class="custom-hr"/>
            </div>
            
            <h1 className='nuni meet'>Meet our team</h1>
            <div class="flex flex-wrap justify-between text-center mt-5">
                <div class="w-full lg:w-1/3 mb-4">
                    <img class="mx-auto rounded-full mb-2" src="" alt="" width="150" height="150" />
                    <h5 class="mb-0">Thampi</h5>
                    <p className='nuni'><strong>Chief Veterinary Officer</strong></p>
                </div>
                <div class="w-full lg:w-1/3 mb-4">
                    <img class="mx-auto rounded-full mb-2" src="" alt="" width="150" height="150" />
                    <h5 class="mb-0">Virus</h5>
                    <p className='nuni'><strong>Adoption Coordinator</strong></p>
                </div>
                <div class="w-full lg:w-1/3 mb-4">
                    <img class="mx-auto rounded-full mb-2" src="" alt="" width="150" height="150" />
                    <h5 class="mb-0">Thomas</h5>
                    <p className='nuni'><strong>Volunteer Manager</strong></p>
                </div>
                
            </div>


        </div>
    )
}

export default About