import history from './routes'

export const navigateToHome = () => {
    history.push('/')
}

export const navigateToReservations = () => {
    history.push('/reservations')
}

export const navigateToProfile = () => {
    history.push('/profile')
}