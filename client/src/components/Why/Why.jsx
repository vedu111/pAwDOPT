import React from 'react'
import Card from './Card';
function Why() {
    return (
        <div className='benefits bg-lgrn'>
            <h1>Why Adopt</h1>
            <div class="flex flex-wrap ">
                <div class="flex justify-center items-center w-full md:w-1/2 mt-20">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg body-top p-7 bg-dgrn">
                        <img class="w-full" src="" alt="Card image cap" />
                        <div class="">
                            <div class="font-bold text-xl mb-2 top clr-mgrn">CardioqSDFGHJKLSDFCVGBHNJJSCV BNMBNM</div>
                            <p class="text-gray-700 text-base">
                                <ul class="body-upper clr-lgrn">
                                    <li>Treadmills</li>
                                    <li>Stationary bikes</li>
                                    <li>Rowing machines</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center items-center w-full md:w-1/2 mt-20">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white body-top p-4">
                        <img class="rounded object-cover" src="https://images.squarespace-cdn.com/content/v1/61042cbcc245122bc58574b7/0443839f-b9f5-4130-a6ce-79a9fcb7edbe/paw+pads.jpeg" alt="" />
                        <div class="">
                            <div class="font-bold text-xl mb-2 top">Free W</div>
                            <p class="text-gray-700 text-base">
                                <ul class="body-upper">
                                    <li>Dumbbells</li>
                                    <li>Barbells</li>
                                    <li>Kettlebells</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex w-full md:w-1/2 justify-center items-center mt-20">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white body-bot p-7">
                        <img class="w-full" src="" alt="Card image cap" />
                        <div class="">
                            <div class="font-bold text-xl mb-2 bottom">Strength Training Machines</div>
                            <p class="text-gray-700 text-base">
                                <ul class="body-lower">
                                    <li>Chest press machine</li>
                                    <li>Shoulder press machine</li>
                                    <li>Leg press machine, Leg extension machine, Leg curl machine, Lat pulldown machine</li>
                                    <li>Seated row machine</li>
                                    <li>Smith machine</li>
                                    <li>Cable crossover machine</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex'></div>
                <Card />
            </div>

        </div>
    )
}

export default Why