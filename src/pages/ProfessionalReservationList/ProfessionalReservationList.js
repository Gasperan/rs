import React from 'react'
import ActionList from '../../components/ActionList/ActionList'
import { useLocation } from 'react-router-dom'

const appointments = [
    {
        status: 'SCHEDULED',
        startTime: '11:00',
        finishTime: '11:20',
        patient: {
            name: 'Juan Perez',
            rut: '11.456.098-k',
        },
    },
    {
        status: 'SCHEDULED',
        startTime: '11:20',
        finishTime: '11:40',
        patient: {
            name: 'Rodrigo Mondaca',
            rut: '7.256.369-9',
        },
    },
    {
        status: 'SCHEDULED',
        startTime: '11:40',
        finishTime: '12:00',
        patient: {
            name: 'Camila Segovia',
            rut: '10.789.456-k',
        },
    },
    {
        status: 'FREE',
        startTime: '12:00',
        finishTime: '12:20',
        patient: null,
    },
    {
        status: 'FREE',
        startTime: '12:40',
        finishTime: '13:00',
        patient: null,
    },
    {
        status: 'FREE',
        startTime: '13:20',
        finishTime: '13:40',
        patient: null,
    },
    {
        status: 'FREE',
        startTime: '14:00',
        finishTime: '14:20',
        patient: null,
    },
    {
        status: 'SCHEDULED',
        startTime: '14:40',
        finishTime: '15:00',
        patient: {
            name: 'Camila Segovia',
            rut: '10.789.456-k',
        },
    },
]

export const ProfesionalReservationList = () => {
    let location = useLocation()
    return <ActionList items={appointments}></ActionList>
}
