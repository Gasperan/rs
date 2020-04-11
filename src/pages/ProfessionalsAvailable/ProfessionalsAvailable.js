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
            name: 'medicine/Carlos-Albornoz',
            title: 'Carlos Albornoz',
            author: '12.435.654-8',
            appoiments: [
                {
                    startTime: '11:00',
                    finishTime: '11:20',
                    patient: {
                        name: 'Juan Perez',
                        rut: '11.456.098-k',
                    },
                },
                {
                    startTime: '11:20',
                    finishTime: '11:40',
                    patient: {
                        name: 'Rodrigo Mondaca',
                        rut: '7.256.369-9',
                    },
                },
                {
                    startTime: '11:40',
                    finishTime: '12:00',
                    patient: {
                        name: 'Camila Segovia',
                        rut: '10.789.456-k',
                    },
                },
            ],
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
