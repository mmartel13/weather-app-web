import React, { useState } from 'react';

export default function Main() {
    const [location, setLocation] = useState('')

    // const getWeather = (e) => {

    // }
 
    return(
        <section>
            <div>
                <form>
                    <label>
                        City or Zip Code 
                        <input type="text" placeholder="Enter city or zip code here"/>
                    </label>
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
} 