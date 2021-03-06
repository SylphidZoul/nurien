import React, {useState, useEffect} from 'react'
import {Slogan, Seccion} from './SeccionVideos'
import { Image,Transformation } from 'cloudinary-react'
import { GalleryWrapper } from '../assets/css/StyledFotografias'
import CarrouselFotos from '../components/CarrouselFotos'
import ScrollIntoView from 'react-scroll-into-view'

const SeccionFotografias = () => {

    const [ gallery, setGallery ] = useState([])
    const [ selectedIndex, setSelectedIndex ] = useState(-1)
    const [ crop, setCrop ] = useState('')
    const [ height, setHeight] = useState(0)

    const handleSelectedImage = (e) => {
        setSelectedIndex(e.target.alt)
    }

    useEffect(() => {
        fetch('https://res.cloudinary.com/nurienstudio/image/list/nurien.json')
        .then(res => res.json())
        .then(data => {
            setGallery(data.resources)
        })
        
        if (window.innerWidth < 1000) {
            setHeight(150)
            setCrop("limit")
        }
        else if(window.innerWidth < 1500) {
            setHeight(400)
            setCrop("fit")
        }
        else {
            setHeight(700)
            setCrop("scale")
        }
       
    }, [])
         return(
            <Seccion>
            <Slogan>
                -Portfolio-
            </Slogan>
            <CarrouselFotos selectedIndex={selectedIndex} gallery={gallery} height={height} crop={crop}/>
            <Slogan>
                -Fotografías-
            </Slogan>
            <GalleryWrapper >
                {gallery.map((image, index)=> (
                    <div key={index}>
                        <ScrollIntoView selector='#carrousel'>
                            <Image cloudName="nurienstudio" publicId={image.public_id} alt={index} onClick={handleSelectedImage}>
                                <Transformation height={height} crop={crop} />
                            </Image> 
                        </ScrollIntoView>
                    </div>
                ))}
            </GalleryWrapper>
            <Slogan>
                -We make your project reality-
            </Slogan>
            
        </Seccion>
    ) 
}

export default SeccionFotografias
