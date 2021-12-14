import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

function ModifiedRecipePage() {
  const [deleted, setDeleted] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [recordId,setRecordId] = useState("")


  const handleClickOpen = (id) => {
    setOpen(true);
    setRecordId(id)
    console.log(id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  //刪除
  const deleteData = async function (id) {
    try {
      await deleteDoc(doc(db, "recipes", id));
      console.log(id)
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [recipes, setRecipes] = useState([{}]);
  console.log(recipes);

  useEffect(() => {
    async function readData() {
      const querySnapshot = await getDocs(collection(db, "recipes"));
      const temp = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        temp.push({
          id: doc.id,
          name: doc.data().name,
          authorId: doc.data().authorId,
        });
      });
      console.log(temp);
      setRecipes([...temp]);
    }
    console.log(recipes);
    readData();
  }, [db]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>名稱</TableCell>
              <TableCell>作者</TableCell>
              <TableCell>修改</TableCell>
              <TableCell>刪除</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipes.map((recipe, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {recipe.name}
                </TableCell>
                <TableCell>{recipe.authorId}</TableCell>
                <TableCell>
                  <EditIcon />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleClickOpen(recipe.id)}>
                    <CloseIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"確定刪除？"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                     一經刪除將無法復原!!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>否</Button>
                    <Button onClick={() => deleteData(recordId)} autoFocus>
                      是
                    </Button>
                  </DialogActions>
                </Dialog>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ModifiedRecipePage;
