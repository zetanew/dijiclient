import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// Define columns based on your data
const columns = [
  { id: 'id', label: 'ID', minWidth: 70 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'categorized', label: 'Categorized', minWidth: 150 },
  { id: 'scannedDocs', label: 'Scanned Docs', minWidth: 150 },
  { id: 'scannedPlans', label: 'Scanned Plans', minWidth: 150 },
  { id: 'parcelIndexCreated', label: 'Parcel Index Created', minWidth: 200 },
  { id: 'scannedDocsIndexed', label: 'Scanned Docs Indexed', minWidth: 200 },
  { id: 'smarted', label: 'Smarted', minWidth: 150 },
  { id: 'rulerIndexed', label: 'Ruler Indexed', minWidth: 200 },
  { id: 'archived', label: 'Archived', minWidth: 150 },
  { id: 'physical', label: 'Physical', minWidth: 150 },
  { id: 'stateId', label: 'State ID', minWidth: 100 },
  { id: 'state', label: 'State', minWidth: 100 },
];

export default function StickyHeadTable() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Use effect to load data
  useEffect(() => {
    // Load data into state (mocking the data here, but you can fetch it from an API)
    const data = [
      {
        id: 4,
        name: 'belediye binasi',
        categorized: 1231231,
        scannedDocs: 123123,
        scannedPlans: 412312,
        parcelIndexCreated: 123123,
        scannedDocsIndexed: 1231231,
        smarted: 123123,
        rulerIndexed: 12312312,
        archived: 123123,
        physical: 123123123,
        stateId: 1,
        state: null
      },
      {
        id: 5,
        name: '1. bölge müdürlüğü',
        categorized: 3111555,
        scannedDocs: 169079,
        scannedPlans: 665643,
        parcelIndexCreated: 388098,
        scannedDocsIndexed: 5591602,
        smarted: 3556462,
        rulerIndexed: 33854392,
        archived: 3646490,
        physical: 323707565,
        stateId: 4,
        state: null
      },
      {
        id: 6,
        name: '2. bölge müdürlüğü',
        categorized: 9802683,
        scannedDocs: 25287,
        scannedPlans: 615139,
        parcelIndexCreated: 5282911,
        scannedDocsIndexed: 5116614,
        smarted: 3597395,
        rulerIndexed: 28864030,
        archived: 750860,
        physical: 111760195,
        stateId: 4,
        state: null
      }
    ];
    setRows(data);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value !== null && value !== undefined ? value : 'N/A'}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
