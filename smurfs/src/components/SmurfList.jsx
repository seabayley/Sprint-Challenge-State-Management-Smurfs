import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Smurf from './Smurf'
import { postSmurf } from '../actions'
import { putSmurf } from '../actions'
import { deleteSmurf } from '../actions'

export default () => {
    const dispatch = useDispatch();
    const smurfs = useSelector(state => state.smurfs)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [newDialogOpen, setNewDialogOpen] = useState(false)
    const [editDialogOpen, setEditDialogOpen] = useState(false)
    const [currentSmurf, setCurrentSmurf] = useState({ name: '', age: 0, height: '' })

    const handleClose = () => {
        setDialogOpen(false)
    }

    const handleOpen = () => {
        setDialogOpen(true)
    }

    const handleNewOpen = () => {
        setNewDialogOpen(true)
    }

    const handleNewClose = () => {
        setNewDialogOpen(false)
    }

    const handleNewSave = () => {
        dispatch(postSmurf(currentSmurf))
    }

    const handleEditOpen = smurf => {
        setEditDialogOpen(true)
        setCurrentSmurf(smurf)
    }

    const handleEditClose = () => {
        setEditDialogOpen(false)
    }

    const handleEditSave = () => {
        dispatch(putSmurf(currentSmurf, currentSmurf.id))
    }

    const handleNameChange = newName => {
        setCurrentSmurf({ ...currentSmurf, name: newName })
    }

    const handleAgeChange = newAge => {
        setCurrentSmurf({ ...currentSmurf, age: newAge })
    }
    const handleHeightChange = newHeight => {
        setCurrentSmurf({ ...currentSmurf, height: newHeight })
    }

    const handleDeleteSmurf = smurfId => {
        dispatch(deleteSmurf(smurfId))
    }

    return (
        <div className="smurf_container">
            <div className="smurf_list">
                {smurfs.map((smurf, index) => {
                    return <Smurf key={index} smurf={smurf} />
                })}
            </div>
            <div className="smurf-form">
                <Button color='primary' onClick={handleOpen}>Edit Smurfs</Button>
            </div>

            <Dialog open={dialogOpen} onClose={handleClose}>
                <DialogTitle id="dialog-title">Edit Smurfs</DialogTitle>
                <List>
                    {smurfs.map((smurf, index) => {
                        return (<ListItem key={index}>
                            <Button onClick={() => handleEditOpen(smurf)}> {smurf.name}</Button>
                        </ListItem>)
                    })}
                </List>
                <Button variant='contained' color='primary' onClick={handleNewOpen}>New Smurf</Button>
            </Dialog>

            <Dialog open={editDialogOpen} onClose={handleEditClose}>
                <DialogTitle id="edit-dialog-title>">{currentSmurf.name}</DialogTitle>
                <TextField
                    id="edit-dialog-name"
                    label="Name"
                    defaultValue={currentSmurf.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    margin="normal"
                />

                <TextField
                    id="edit-dialog-age"
                    label="Age"
                    defaultValue={currentSmurf.age}
                    onChange={(e) => handleAgeChange(e.target.value)}
                    margin="normal"
                />
                <TextField
                    id="edit-dialog-height"
                    label="Height"
                    defaultValue={currentSmurf.height}
                    onChange={(e) => handleHeightChange(e.target.value)}
                    margin="normal"
                />
                <Button variant='contained' color='primary' onClick={handleEditSave}>Save</Button>
                <Button variant='contained' color='secondary' onClick={() => handleDeleteSmurf(currentSmurf.id)}>Delete</Button>
            </Dialog>

            <Dialog open={newDialogOpen} onClose={handleNewClose}>
                <DialogTitle id="new-dialog-title>">{currentSmurf.name}</DialogTitle>
                <TextField
                    id="new-dialog-name"
                    label="Name"
                    defaultValue={currentSmurf.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    margin="normal"
                />

                <TextField
                    id="new-dialog-age"
                    label="Age"
                    defaultValue={currentSmurf.age}
                    onChange={(e) => handleAgeChange(e.target.value)}
                    margin="normal"
                />
                <TextField
                    id="new-dialog-height"
                    label="Height"
                    defaultValue={currentSmurf.height}
                    onChange={(e) => handleHeightChange(e.target.value)}
                    margin="normal"
                />
                <Button variant='contained' color='primary' onClick={handleNewSave}>Save</Button>
                <Button variant='contained' color='secondary'>Cancel</Button>
            </Dialog>
        </div>
    )
}