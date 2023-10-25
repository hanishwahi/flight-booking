import React, { useEffect, useState } from 'react'

function PlaneMoving() {

    const [planeHide, setPlaneHide] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setPlaneHide(false)
        }, 4000)

    }, [])


    return (
        <>
            <div className="container-fluid">
                {planeHide &&
                    <div class="cloud cloud1">
                        <img src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png" alt='' />
                    </div>
                }
            </div>
        </>
    )
}

export default PlaneMoving