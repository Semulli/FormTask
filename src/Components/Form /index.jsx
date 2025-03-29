import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../../Features/Slices/addUserSlice";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Routers } from "../../Constants/Router.jsx";

const MuiForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const editingUser = useSelector((state) => state.addUser.editingUser);

    const initialState = {
        id: null,
        firstName: "",
        lastName: "",
        age: "",
        email: "",
    };

    const [formData, setFormData] = useState(initialState);


    useEffect(() => {
        if (editingUser) {
            setFormData(editingUser);
        }
    }, [editingUser]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.id) {
            dispatch(updateUser(formData));
        } else {
            dispatch(addUser({ ...formData, id: Date.now() }));
        }

        setFormData(initialState);
        navigate(Routers.Home);
    };

    return (
        <Paper sx={{ maxWidth: 400, margin: "auto", mt: 4, p: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" align="center" gutterBottom>
                {formData.id ? "Edit User" : "Add User"}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required fullWidth />
                <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required fullWidth />
                <TextField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} required fullWidth />
                <TextField label="E-mail" name="email" type="email" value={formData.email} onChange={handleChange} required fullWidth />
                <Button type="submit" variant="contained" color="secondary" fullWidth>
                    {formData.id ? "Update" : "Submit"}
                </Button>
            </Box>
        </Paper>
    );
};

export default MuiForm;
