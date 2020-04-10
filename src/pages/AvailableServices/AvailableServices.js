import React from 'react'
import image from '../../assets/bike.jpg'
import image3 from '../../assets/breakfast.jpg'
import image4 from '../../assets/burgers.jpg'
import image5 from '../../assets/camera.jpg'
import medicine from '../../assets/medicine.jpg'
import nursing from '../../assets/medicine.jpg'
import image6 from '../../assets/hats.jpg'
import image7 from '../../assets/morning.jpg'
import GridList from '../../components/GridList/GridList'

const tileData = [
    {
        img: medicine,
        name: 'medicine',
        title: 'Medicina',
        author: 'author',
    },
    {
        img: nursing,
        name: 'nursing',
        title: 'Enfermeria',
        author: 'author',
    },
    {
        img: image3,
        name: 'odontology',
        title: 'odontologia',
        author: 'author',
    },
    {
        img: image4,
        name: 'medicine',
        title: 'Asistente Social',
        author: 'author',
    },
    {
        img: image5,
        name: 'medicine',
        title: 'Asistente Social',
        author: 'author',
    },
    {
        img: image6,
        name: 'medicine',
        title: 'Asistente Social',
        author: 'author',
    },
    {
        img: image7,
        name: 'medicine',
        title: 'Asistente Social',
        author: 'author',
    },
]

export const AvailableServices = () => {
    return (
        <GridList data={tileData} title="Servicios disponibles para agendar" />
    )
}
