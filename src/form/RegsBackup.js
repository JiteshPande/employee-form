// import {
//   Grid,
//   Avatar,
//   TextField,
//   Box,
//   TableContainer,
//   Paper,
//   tableCellClasses,
// } from '@mui/material';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Radio from '@mui/joy/Radio';
// import RadioGroup from '@mui/joy/RadioGroup';
// import axios from 'axios';
// import {
//   PropagateLoader,

// } from 'react-spinners';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import {
//   styled,
// } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// // import LoadingOverlay from 'react-loading-overlay';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses?.head}`]: {
//       backgroundColor: theme?.palette?.common?.black,
//       color: theme?.palette?.common?.white,
//   },
//   [`&.${tableCellClasses?.body}`]: {
//       fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//       backgroundColor: theme?.palette?.action?.hover,
//   },
//   '&:last-child td, &:last-child th': {
//       border: 0,
//   },
// }));

// const RegistrationForm = () => {

//   const [open, setOpen] = useState(false);
//   const [user, updateUser] = useState('');
//   const [email, updateEmail] = useState('');
//   const [date, updateDate] = useState('');
//   const [gender, updateGender] = useState('');
//   const [qualification, updateQualification] = useState('');
//   const [profile, updateProfile] = useState('');
//   const [data, setData] = useState([]);
//   const [recount, setCount] = useState(false);
//   const [print, setPrint] = useState(null);
//   const inputImage = useRef();
//   const [clickEdit, setClickEdit] = useState(false);
//   const [id, setId] = useState('');
//   const [emailArray, setEmailArray] = useState([]);
//   const [editEmail, setEditEmai] = useState('');
//   /*eslint-disable */
//   const regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   const regexUser = /^[A-Za-z]*$/;
//   const [emp, setAddEmp] = useState(true);
//   const [deleteData, setDeleteData] = useState(true);
//   const [editData, setEditData] = useState(true);
//   // const [loading, setLoading] = useState(false);
//   const [error,setError]=useState('none');
//   const [errorMsg,setErrorMsg]=useState('');
//   let emailAvailable = 0;


//   useEffect(() => {
//       fetchData();

//   }, [recount, clickEdit]);

//   const addEmployeeBtn = () => {
//       setAddEmp(false);
//       setPrint(null);
//       setOpen(true);
//       setPrint('print');
//       setAddEmp(true);
//       updateUser('');
//       updateEmail('');
//       updateGender('');
//       updateDate('');
//       updateQualification('');
//       updateProfile('');
//       setLoading(true);

//   };

//   const cancelButton = () => {
//       updateUser('');
//       updateEmail('');
//       updateGender('');
//       updateDate('');
//       updateQualification('');
//       updateProfile('');
//       setOpen(false);
//       setClickEdit(false);
//       setLoading(false);

//   };

//   const submitButton = async () => {
//       setAddEmp(true);
//       let payload = { user, email, date, gender, qualification, profile };
//       if (validationForm()) {
//           if (clickEdit) {
//               await axios.put(`${process.env?.REACT_APP_BASE_URL}/${id}`, payload).then(() => { setClickEdit(false); });
//               alert('editted sucessfully');
//               setOpen(false);
//               setLoading(false);
//           }
//           else {
//               await axios.post(process.env?.REACT_APP_BASE_URL, payload).then(res => {
//                   setCount(!recount);
//               });
//               alert('data submmited');
//               setOpen(false);
//               setLoading(false);
//           }
//       }

//   };

//   const validationForm = () => {
//       for (let i of data) {
//           emailArray.push(i.email);
//       }
//       if (clickEdit === true) {
//           setEmailArray(emailArray.splice(emailArray.indexOf(editEmail), 1));
//           emailAvailable++;
//       }
//       for (let j of emailArray) {
//           if (email === j && emailAvailable === 0) {
//               alert('email is availible');
//               return false;
//           }
//       }
//       if (user === '' || email === '' || date === '' || profile === '' || qualification === '' || gender === '') {
//           // alert('all the fiels are mandatory');
//           setErrorMsg('all fields are mandatory');
//           setError('flex')
//           setTimeout(() => {
//               setError('none')
//               setErrorMsg('');

              
//           }, 2000);

//           return false;
//       }
//       if (!regxEmail.test(email)) {
        
//           setErrorMsg('Incorrectly Written Email');

//           setError('flex')
//           setTimeout(() => {
//               setError('none')
//               setErrorMsg('');

//           }, 2000);
//           return false;
//       }
//       if (!regexUser.test(user)) {
//           // alert('incorrectly written username');
//           // setError('flex')
//           // setTimeout(() => {
//           //     setError('none')
              
//           // }, 2000);
//           return false;
//       }

//       return true;

//   };

//   const fetchData = async () => {
//       await axios.get(process.env?.REACT_APP_BASE_URL).then((response) => {
//           setData(response?.data);
//           setPrint('print');
//       });

//   };

//   const delButtonIcon = async (e) => {
//       setDeleteData(false);
//       await axios.delete(`${process.env?.REACT_APP_BASE_URL}/${e}`).then(() => {
//           setCount(!recount);
//       });
//       setDeleteData(true);

//   };

//   const editButtonIcon = async (e) => {
//       let editItem = 0;
//       setEditData(false);
//       setId(e);
//       await axios.get(`${process.env?.REACT_APP_BASE_URL}/${e}`).then((res) => {
//           updateUser(res?.data.user);
//           updateEmail(res?.data?.email);
//           updateDate(res?.data?.date);
//           updateGender(res?.data?.gender);
//           updateQualification(res?.data?.qualification);
//           updateProfile(res?.data?.profile);
//           editItem++;
//           setEditEmai(res?.data?.email);
//       }).then(() => {
//           if (editItem > 0) {
//               setEditData(true);
//           }
//       });
//       setOpen(true);

//   };

//   const getBase64 = () => {
//       const reader = new FileReader();
//       reader.onload = () => { updateProfile(reader?.result); };
//       if (inputImage?.current?.children[0]?.children[0]?.files[0]) {
//           reader.readAsDataURL(inputImage?.current?.children[0]?.children[0]?.files[0]);
//       }

//   };

//   const propagate = {
//       padding: '15px',
//       fontSize: '20px',
//       display: 'flex',
//       justifyContent: 'center',
//       margin: 'auto',
//       width: '100vw',
//   };
//   const radio = {
//       paddingLeft: '10px',
//       marginLeft: '6px',
//       fontSize: '20px'
//   };
//   const boxStyle = {
//       margin: '5px',
//       borderBox: '1px solid red',
//   };
//   const buttonCenter = {
//       padding: '0.5rem 2.5rem 0.5rem 2.5rem',
//       fontSize: '1.0rem',
//       fontWeight: '600',
//      color: 'rgb(28 24 24)',
//       backgroundColor: '#d1c4e9',
//       display: 'flex',
//       margin: 'auto',
//      border:'none',
     
//       // marginTop: '10px',
//   };
//   const boldStyle = {
//       fontSize: '18px',
//       backgroundColor: 'rgb(109, 109, 109)',
//       textAlign: 'center',
//   };
//   const centerData = {
//       textAlign: 'center',
//   };
//   const centerHeader = {
//       fontSize: '19px',
//       display: 'flex',
//       margin: 'auto',
//   };
//   const ProfielAlign = {
//       paddingLeft: '28px',
//   };
//   const formStyle = {
//       fontSize: '15px',
//       padding: '5px',
//       marginTop: '15px'
//   };
//   const LabelStyle = {
//       fontSize: '20px',
//       margin: '35px 0px 10px 0px',
//       color: '#2979ff',
//   };
//   const tableMargin = {
//       margin: '50px 0px 10px 0px',
//   }
//   console.log(error)
//   return (
//       <>
//           <AppBar position="static">
//               <Toolbar variant="dense">
//                   <Typography variant="h6" color="inherit" component="div" style={centerHeader} tabIndex="0">
//                       <AssignmentIcon /> Employee Registration Form
//                   </Typography>
//               </Toolbar>
//           </AppBar>
//           <Box style={boxStyle}>
//               <Grid container md={12} xl={12} xs={12}>
//                   <TableContainer component={Paper} sx={{ maxHeight: 440 }} style={tableMargin}>
//                       <Table stickyHeader aria-label="sticky table">
//                           <TableHead>
//                               <TableRow>
//                                   <StyledTableCell style={boldStyle} tabIndex="0" >ID</StyledTableCell>
//                                   <StyledTableCell align="right" style={boldStyle} tabIndex="0">UserName</StyledTableCell>
//                                   <StyledTableCell align="right" style={boldStyle} tabIndex="0">Email</StyledTableCell>
//                                   <StyledTableCell align="right" style={boldStyle} tabIndex="0" >Date</StyledTableCell>
//                                   <StyledTableCell align="right" style={boldStyle} tabIndex="0">Gender</StyledTableCell>
//                                   <StyledTableCell align="right" style={boldStyle} tabIndex="0">Qualification</StyledTableCell>
//                                   <StyledTableCell align="right" style={boldStyle} tabIndex="0" >Profile </StyledTableCell>
//                                   <StyledTableCell align="right" style={boldStyle} tabIndex="0"> operation</StyledTableCell>
//                               </TableRow>
//                           </TableHead>
//                           <TableBody>
//                               {(print) ? data.map((row) => (
//                                   <StyledTableRow component="th" scope="row"
//                                       key={row.name}
//                                       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
//                                       <StyledTableCell style={centerData} tabIndex="0" alt={"id"}>{row.id}</StyledTableCell>
//                                       <StyledTableCell align="right" style={centerData} tabIndex="0">{row.user}</StyledTableCell>
//                                       <StyledTableCell align="right" style={centerData} tabIndex="0">{row.email}</StyledTableCell>
//                                       <StyledTableCell align="right" style={centerData} tabIndex="0">{row.date}</StyledTableCell>
//                                       <StyledTableCell align="right" style={centerData} tabIndex="0">{row.gender}</StyledTableCell>
//                                       <StyledTableCell align="right" style={centerData} tabIndex="0">{row.qualification}</StyledTableCell>
//                                       <StyledTableCell align="right" style={ProfielAlign} tabIndex="0"><Avatar alt={`${row.user}`} src={row.profile} size="lg" /></StyledTableCell>
//                                       <StyledTableCell align="right" style={centerData} >
//                                           <Button id={row.id} onClick={() => { editButtonIcon(row.id); setClickEdit(true); }} aria-label={"edit"} disabled={!deleteData} >{<EditIcon />}</Button>
//                                           <Button id={row.id} onClick={() => { delButtonIcon(row.id); }} aria-label={"delete"} disabled={clickEdit} style={{ color: "red" }}>{<DeleteOutlineIcon />}</Button>
//                                       </StyledTableCell>
//                                   </StyledTableRow>
//                               )) : <PropagateLoader color="rgba(214, 54, 78, 1)" size="20" style={propagate} />}
//                           </TableBody>
//                       </Table>
//                   </TableContainer>
//               </Grid>
//               <Button variant="outlined" onClick={addEmployeeBtn} style={buttonCenter} >
//                   Add Employee
//               </Button>
//               {deleteData && editData ? <></> : <PropagateLoader color="rgba(214, 54, 78, 1)" size="20" style={propagate} />}
//           </Box>
//           <Box >
//               {emp ?
//                   <Box >
//                       <Dialog open={open} PaperProps={{
//                           style: {
//                               backgroundColor: "#eeeeee",
//                               color: "black",
//                           },
//                       }} fullWidth="true" maxWidth={'md'} >
//                           <DialogTitle style={{ padding:"6px" , backgroundColor: "#2979ff", display: "flex", justifyContent: "center", color: "white", fontWeight:'600'}} tabIndex="0"  >Registration</DialogTitle>
//                           <DialogTitle style={{ backgroundColor: "red", display:`${error}`, justifyContent: "center", color: "white", }} tabIndex="0"  >{errorMsg}</DialogTitle>
//                           <DialogContent>
//                               <DialogContentText style={{ color: "red" }} tabIndex="0">
//                               </DialogContentText>
//                               <Box sx={{ color: "black", p: 2, borderRadius: "25px", fontSize: "29px" }}>
//                                   <Grid container spacing={2}>
//                                       <Grid item xs={12}>
//                                           <form>
//                                               <FormControl>
//                                                   <TextField fullWidth label="Name" style={formStyle} name="user" onChange={(e) => { if (e.target.value.match(regexUser)) { updateUser(e.target.value); } }} value={user} />
//                                                   <TextField fullWidth label="Email" style={formStyle} name="email" onChange={(e) => updateEmail(e.target.value)} value={email} />
//                                                   <TextField fullWidth style={formStyle} name="date" onChange={(e) => { updateDate(e.target.value); }} type="date" value={date} />
//                                               </FormControl>
//                                               <FormControl>
//                                                   <FormLabel style={LabelStyle} name="gender" tabIndex="0" >Gender</FormLabel>
//                                                   <RadioGroup style={{ display: "initial", marginTop: '-10px' }} value={gender} onChange={(e) => { updateGender(e.target.value); }} >
//                                                       <Radio value="female" label="Female" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                       <Radio value="male" label="Male" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                   </RadioGroup>
//                                               </FormControl>
//                                               <FormControl>
//                                                   <FormLabel style={LabelStyle} name="qualification" tabIndex="0" >Qualification</FormLabel>
//                                                   <RadioGroup style={{ display: "initial", marginTop: '-10px' }} value={qualification} onChange={(e) => { updateQualification(e.target.value); }} >
//                                                       <Radio value="10" label="10th" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                       <Radio value="12" label="12th" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                       <Radio value="graduation" label="Graduation" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                       <Radio value="phd" label="PhD" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                   </RadioGroup>
//                                               </FormControl>
//                                               <FormLabel style={LabelStyle} name="Profile" tabIndex="0" >Profile Photo</FormLabel>

//                                               <TextField fullWidth type="file" accept="image/png, image/jpeg" name="profile" ref={inputImage} onChange={() => { getBase64(); }} />
//                                               {/* <img src={inputImage}></img> */}
//                                           </form>
//                                           {/* <LoadingOverlay active={loading} spinner={<ScaleLoader color="#36d7b7" />}  ></LoadingOverlay> */}
//                                       </Grid>
//                                   </Grid>
//                               </Box>
//                           </DialogContent>
//                           <DialogActions >
//                               <Button variant="contained" style={{ backgroundColor: 'white', color: "black" }} onClick={cancelButton}>Cancel</Button>
//                               <Button variant="contained" style={{ backgroundColor: 'rgb(109, 109, 109)', color: "white" }} onClick={submitButton}>Submit</Button>
//                           </DialogActions>
//                       </Dialog>
//                   </Box> : <PropagateLoader color="rgba(214, 54, 78, 1)" size="20" style={propagate} />}
//           </Box>
//       </>
//   );
// };

// export default RegistrationForm;
