import React from "react"
import Header from "./components/Header"
import Location from "./components/Location"
import data from "./data"

export default function App() {
    const dataMap = data.map(item => {
        return (
            <Location
                title={item.title}
                location={item.location}
                googlemapsurl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}
            />
        )
    })
    return (
        <div>
            <Header/>
            {dataMap}
       
          
        </div>
    )
}