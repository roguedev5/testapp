import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button } from "@mui/material";
import CustomSearchBar from "../shared/CustomSearch";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const columns = [
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "select",
    label: "Select",
    minWidth: 170,
    align: "center",
    type: "button",
  },
  {
    id: "delete",
    label: "Delete",
    minWidth: 170,
    align: "center",
    type: "button",
  },
];

export default function ColumnGroupingTable({
  isActionEnabled,
  handleSelect,
  rows,
  handleDelete,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searched, setSearched] = useState("");
  const [actionRows, setActionRows] = useState(rows);
  const [open, setOpen] = useState({ isOpen: false, selected: "" });

  const handleClickOpen = (value) => {
    setOpen({ isOpen: true, selected: value });
  };

  const handleClose = () => {
    setOpen({ isOpen: false, selected: "" });
  };

  const requestSearch = (searchedVal) => {
    setSearched(searchedVal);
    if (searchedVal) {
      const filteredRows = rows?.filter((row) => {
        return row.name.toLowerCase().includes(searchedVal.toLowerCase());
      });
      setActionRows(filteredRows);
    } else {
      setActionRows(rows);
    }
  };

  const cancelSearch = () => {
    requestSearch("");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const actionHandleSelect = (row, index) => {
    if (searched) {
      setActionRows((prevState) =>
        prevState.map((item) =>
          item.name === row.name
            ? {
                ...item,
                isSelected: item?.isSelected ? !item.isSelected : true,
              }
            : item
        )
      );
    }
    handleSelect(row, index);
  };

  const actionHandleDelete = (row) => {
    if (searched) {
      setActionRows((prevState) =>
        prevState.filter((item) => item.name !== open.selected.name)
      );
    }
    handleDelete(open.selected);
    handleClose();
  };

  return (
    <Paper sx={{ width: "100%", height: "100%", overflow: "auto" }}>
      {isActionEnabled ? (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomSearchBar onSearch={requestSearch} onClose={cancelSearch} />
        </Box>
      ) : null}
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) =>
                column.type === "button" ? (
                  isActionEnabled && (
                    <TableCell key={column.id} align={column.align}>
                      {column.label}
                    </TableCell>
                  )
                ) : (
                  <TableCell key={column.id} align={column.align}>
                    {column.label}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {(searched ? actionRows : rows)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column?.type !== "button" ? (
                            column.format && typeof value === "number" ? (
                              column.format(value)
                            ) : (
                              value
                            )
                          ) : isActionEnabled ? (
                            column.id === "select" ? (
                              <Button
                                size="small"
                                color={
                                  row?.isSelected ? "success" : "secondary"
                                }
                                variant="contained"
                                onClick={() => actionHandleSelect(row, index)}
                              >
                                {row?.isSelected ? "Selected" : "Select"}
                              </Button>
                            ) : (
                              <>
                                <Button
                                  size="small"
                                  color="error"
                                  variant="contained"
                                  onClick={() => handleClickOpen(row)}
                                >
                                  Delete
                                </Button>
                                <Dialog
                                  open={open.isOpen}
                                  onClose={handleClose}
                                  aria-describedby="alert-dialog-slide-description"
                                >
                                  <DialogTitle>Delete</DialogTitle>
                                  <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                      Are You sure to delete this Item?
                                    </DialogContentText>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button
                                      onClick={() => actionHandleDelete(row)}
                                    >
                                      Yes
                                    </Button>
                                    <Button onClick={handleClose}>No</Button>
                                  </DialogActions>
                                </Dialog>
                              </>
                            )
                          ) : null}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {rows.length ? (
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : null}
    </Paper>
  );
}
