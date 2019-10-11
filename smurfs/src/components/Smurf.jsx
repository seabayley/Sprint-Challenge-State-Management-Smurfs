import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default props => {
    return (
        <Card className='smurf_card'>
            <CardContent>
                Name: {props.smurf.name}
                <p>Age: {props.smurf.age}</p>
                <p>Height: {props.smurf.height}</p>
            </CardContent>
        </Card>
    )
}