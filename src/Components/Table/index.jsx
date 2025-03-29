import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { removeUser, editUser } from "../../Features/Slices/addUserSlice";
import { Routers } from "../../Constants/Router.jsx";
import { useNavigate } from "react-router-dom";

const MuiTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.addUser.users);

    const handleEdit = (user) => {
        dispatch(editUser(user));
        navigate(Routers.Table);
    };

    const handleDelete = (id) => {
        dispatch(removeUser(id));
    };

    if (!users || users.length === 0) {
        return <p style={{ textAlign: "center", marginTop: "20px" }}>No users found.</p>;
    }

    return (
        <TableContainer component={Paper} sx={{ width: "90%", margin: "auto", mt: 4, borderRadius: 2, boxShadow: 3 }}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((el) => (
                        <TableRow key={el.id}>
                            <TableCell>{el.firstName}</TableCell>
                            <TableCell>{el.lastName}</TableCell>
                            <TableCell>{el.age}</TableCell>
                            <TableCell>{el.email}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(el)} color="primary" variant="outlined">
                                    Edit
                                </Button>
                                <Button onClick={() => handleDelete(el.id)} color="secondary" variant="outlined">
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MuiTable;
