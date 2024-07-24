import { useState , useEffect } from 'react'
import { fetchAllStates , fetchAllJobs } from '../api/http'
import './App.css'
import Test from '../components/Test';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// columns !! 

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




function App() {

  const [rows, setRows] = useState([]);
  const [states, setStates] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);



  useEffect(() => {
    async function fetchStates() {
      const states = await fetchAllStates();
      setStates(states);
    }

    async function fetchData() {
      const states = await fetchAllJobs();
      setRows(states);
    }
    fetchStates();
    fetchData();
    console.log(states)
  }, []);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (


    <>
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


    </>
  )
}

export default App
