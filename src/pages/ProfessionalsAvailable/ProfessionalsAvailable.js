import React from 'react'
import image from '../../assets/bike.jpg'
import image3 from '../../assets/breakfast.jpg'
import image4 from '../../assets/burgers.jpg'
import image5 from '../../assets/camera.jpg'
import image6 from '../../assets/hats.jpg'
import image7 from '../../assets/morning.jpg'
import GridList from '../../components/GridList/GridList'
import { useLocation } from 'react-router-dom'

const data = {
    medicine: [
        {
            img: image5,
            name: 'Carlos Albornoz',
            title: 'Carlos Albornoz',
            author: '12.435.654-8',
        },
        {
            img: image5,
            name: 'Yanis',
            title: 'Yanis',
            author: 'author',
        },
        {
            img: image5,
            name: 'medicine',
            title: 'Sara Piña',
            author: 'author',
        },
        {
            img: image5,
            name: 'medicine',
            title: 'Asistente Social',
            author: 'author',
        },
        {
            img: image5,
            name: 'medicine',
            title: 'Sara Piña',
            author: 'author',
        },
        {
            img: image5,
            name: 'medicine',
            title: 'Asistente Social',
            author: 'author',
        },
    ],
    nursing: [
        {
            img: image5,
            name: 'nursing',
            title: 'Asistente Social',
            author: 'author',
        },
        {
            img: image5,
            name: 'nursing',
            title: 'Asistente Social',
            author: 'author',
        },
        {
            img: image5,
            name: 'nursing',
            title: 'Asistente Social',
            author: 'author',
        },
        {
            img: image5,
            name: 'nursing',
            title: 'Asistente Social',
            author: 'author',
        },
    ],
    odontology: [
        {
            img: image5,
            name: 'nursing',
            title: 'Asistente Social',
            author: 'author',
        },
        {
            img: image5,
            name: 'nursing',
            title: 'Asistente Social',
            author: 'author',
        },
        {
            img: image5,
            name: 'nursing',
            title: 'Asistente Social',
            author: 'author',
        },
        {
            img: image5,
            name: 'nursing',
            title: 'Asistente Social',
            author: 'author',
        },
    ],
    kinesiology: {},
}

export const ProfessionalsAvailable = (props) => {
    let location = useLocation()
    const professionName = location.pathname.substring(1)
    return <GridList data={data[professionName]} title={professionName} />
}
