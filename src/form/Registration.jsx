import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  Avatar,
  TextField,
  Box,
  TableContainer,
  Paper,
  tableCellClasses,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { NavLink } from "react-router-dom";
// import { Audiotrack } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses?.head}`]: {
    backgroundColor: theme?.palette?.common?.black,
    color: theme?.palette?.common?.white,
  },
  [`&.${tableCellClasses?.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme?.palette?.action?.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function RegistrationForm() {
  const [open, setOpen] = useState(false);
  const [user, updateUser] = useState("");
  const [email, updateEmail] = useState("");
  const [date, updateDate] = useState("");
  const [gender, updateGender] = useState("");
  const [qualification, updateQualification] = useState("");
  const [profile, updateProfile] = useState("");
  const [audiomsg, updateAudiomsg] = useState("");
  const [data, setData] = useState([]);
  const [recount, setCount] = useState(false);
  const [print, setPrint] = useState(null);
  const inputImage = useRef();
  const [id, setId] = useState("");
  const [emailArray, setEmailArray] = useState([]);
  const [editEmail, setEditEmai] = useState("");
  const regxEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const regexUser = /^[A-Za-z]*$/;
  const [emp, setAddEmp] = useState(true);
  const [deleteData, setDeleteData] = useState(true);
  const [editData, setEditData] = useState(true);
  const [error, setError] = useState("none");
  const [errorMsg, setErrorMsg] = useState("");
  const [datasubmit, setDataSubmit] = useState("");
  const [datasubmitDisplay, setDataSubmitDisplay] = useState("none");
  const [clickEdit, setClickEdit] = useState(false);
  let emailAvailable = 0;

  const fetchData = async () => {
    await axios.get(process.env?.REACT_APP_BASE_URL).then((response) => {
      setData(response?.data);
      setPrint("print");
    });
  };
  console.log("data", data);
  useEffect(() => {
    fetchData();
  }, [recount, clickEdit]);

  const addEmployeeBtn = () => {
    setAddEmp(false);
    setPrint(null);
    setOpen(true);
    setPrint("print");
    setAddEmp(true);
    updateUser("");
    updateEmail("");
    updateGender("");
    updateDate("");
    updateQualification("");
    updateProfile("");
    updateAudiomsg("");
  };

  const cancelButton = () => {
    updateUser("");
    updateEmail("");
    updateGender("");
    updateDate("");
    updateQualification("");
    updateProfile("");
    updateAudiomsg("");
    setOpen(false);
    setClickEdit(false);
  };
  const validationForm = () => {
    data.forEach((element) => {
      emailArray.push(element);
    });
    if (clickEdit === true) {
      setEmailArray(emailArray.splice(emailArray.indexOf(editEmail), 1));
      emailAvailable += 1;
    }
    emailArray.forEach((j) => {
      if (email === j && emailAvailable === 0) {
        setErrorMsg("Email is available");
        setError("flex");
        setTimeout(() => {
          setError("none");
          setErrorMsg("");
        }, 2000);
        return false;
      }
      return emailAvailable;
    });
    if (
      user === "" ||
      email === "" ||
      date === "" ||
      profile === "" ||
      qualification === "" ||
      gender === "" ||
      audiomsg === ""
    ) {
      setErrorMsg("all fields are mandatory");
      setError("flex");
      setTimeout(() => {
        setError("none");
        setErrorMsg("");
      }, 2000);
      return false;
    }
    if (!regxEmail.test(email)) {
      setErrorMsg("Incorrectly Written Email");
      setError("flex");
      setTimeout(() => {
        setError("none");
        setErrorMsg("");
      }, 2000);
      return false;
    }

    if (!regexUser.test(user)) {
      return false;
    }

    return true;
  };

  const submitButton = async () => {
    setAddEmp(true);
    const payload = {
      user,
      email,
      date,
      gender,
      qualification,
      profile,
      audiomsg,
    };
    if (validationForm()) {
      if (clickEdit) {
        await axios
          .put(`${process.env?.REACT_APP_BASE_URL}/${id}`, payload)
          .then(() => {
            setClickEdit(false);
          });
        setDataSubmit("Editted sucessfully ");
        setDataSubmitDisplay("flex");
        setTimeout(() => {
          setDataSubmitDisplay("none");
          setDataSubmit("");
          setOpen(false);
        }, 1000);
      } else {
        await axios.post(process.env?.REACT_APP_BASE_URL, payload).then(() => {
          setCount(!recount);
        });
        setDataSubmit("Data Submitted");
        setDataSubmitDisplay("flex");
        setTimeout(() => {
          setDataSubmitDisplay("none");
          setDataSubmit("");
          setOpen(false);
        }, 2000);
      }
    }
  };
  const delButtonIcon = async (e) => {
    setDeleteData(false);
    await axios.delete(`${process.env?.REACT_APP_BASE_URL}/${e}`).then(() => {
      setCount(!recount);
    });
    setDeleteData(true);
  };

  const editButtonIcon = async (e) => {
    let editItem = 0;
    setEditData(false);
    setId(e);
    await axios
      .get(`${process.env?.REACT_APP_BASE_URL}/${e}`)
      .then((res) => {
        updateUser(res?.data.user);
        updateEmail(res?.data?.email);
        updateDate(res?.data?.date);
        updateGender(res?.data?.gender);
        updateQualification(res?.data?.qualification);
        updateProfile(res?.data?.profile);
        updateAudiomsg(res?.data.audio);
        editItem += 1;
        setEditEmai(res?.data?.email);
      })
      .then(() => {
        if (editItem > 0) {
          setEditData(true);
          console.log(editData);
        }
      });
    setOpen(true);
  };
  // profile
  const getBase64 = () => {
    const reader = new FileReader();
    reader.onload = () => {
      updateProfile(reader?.result);
    };
    if (inputImage?.current?.children[0]?.children[0]?.files[0]) {
      reader.readAsDataURL(
        inputImage?.current?.children[0]?.children[0]?.files[0]
      );
    }
  };
  // audio
  let mediaRecorder = null;
  const startHandler = (event) => {
    event.preventDefault();
    if ("mediaDevices" in navigator) {
      const constraints = {
        audio: true,
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((value) => {
          const options = { mimeType: "audio/webm" };
          const recordedChunks = [];
          mediaRecorder = new MediaRecorder(value, options);
          mediaRecorder.start();
          console.log("media recorder started");
          mediaRecorder.addEventListener("dataavailable", (e) => {
            if (e.data.size > 0) {
              recordedChunks.push(e.data);
            }
          });
          mediaRecorder.addEventListener("stop", (ee) => {
            console.log("media recorder stopped");
            console.log(ee);
            const base64 = URL.createObjectURL(new Blob(recordedChunks));
            console.log(base64);
            const reader = new FileReader();
            reader.addEventListener(
              "load",
              (ev) => {
                document.getElementById(
                  "my-audio"
                ).src = `data:audio/webm;${reader.result.substring(30)}`;
                console.log(ev);
                updateAudiomsg(
                  `data:audio/webm;${reader.result.substring(30)}`
                );
              },
              false
            );
            reader.readAsDataURL(new Blob(recordedChunks));
          });
        })
        .catch((reason) => {
          console.log(reason);
        })
        // Error callback
        .catch((err) => {
          console.error(`The following getUserMedia error occurred: ${err}`);
        });
    } else {
      console.log("getUserMedia not supported on your browser!");
    }
  };

  const stopHandler = (event) => {
    event.preventDefault();
    if (mediaRecorder !== null) {
      mediaRecorder.stop();
    }
    console.log(audiomsg);
    console.log("recording is stopped");
  };

  const propagate = {
    fontSize: 20,
    justifyContent: "center",
    margin: "auto",
    width: "100vw",
    display: "flex",
  };
  const radio = {
    paddingLeft: 10,
    marginLeft: 6,
    fontSize: 20,
  };
  const boxStyle = {
    margin: 5,
    borderBox: "1px solid #FF0000",
  };
  const buttonCenter = {
    padding: "0.5rem 2.5rem 0.5rem 2.5rem",
    fontSize: "1.0rem",
    fontWeight: "600",
    color: "#1C1818",
    backgroundColor: "#d1c4e9",
    display: "flex",
    margin: "auto",
    border: "none",
  };
  const boldStyle = {
    fontSize: 18,
    backgroundColor: "#6D6D6D",
    textAlign: "center",
  };
  const centerData = {
    textAlign: "center",
  };
  const centerHeader = {
    fontSize: 19,
    display: "flex",
    margin: "auto",
  };
  const ProfielAlign = {
    paddingLeft: 28,
  };
  const formStyle = {
    fontSize: 15,
    padding: 5,
    marginTop: 15,
  };
  const LabelStyle = {
    fontSize: 20,
    margin: "35px 0px 10px 0px",
    color: "#2979ff",
  };
  const tableMargin = {
    margin: "50px 0px 10px 0px",
  };
  const audioMsgBtn = {
    fontSize: 20,
    // padding: '10px 15px',
    marginLeft: 15,
    borderRadius: 15,
  };
  const audioTable = {
    width: 160,
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={centerHeader}
          >
            <AssignmentIcon /> Employee Registration Form
          </Typography>
        </Toolbar>
      </AppBar>
      <Box style={boxStyle}>
        <Grid container md={12} xl={12} xs={12}>
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 440 }}
            style={tableMargin}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <StyledTableCell style={boldStyle}>ID</StyledTableCell>
                  <StyledTableCell align="right" style={boldStyle}>
                    UserName
                  </StyledTableCell>
                  <StyledTableCell align="right" style={boldStyle}>
                    Email
                  </StyledTableCell>
                  <StyledTableCell align="right" style={boldStyle}>
                    Date
                  </StyledTableCell>
                  <StyledTableCell align="right" style={boldStyle}>
                    Gender
                  </StyledTableCell>
                  <StyledTableCell align="right" style={boldStyle}>
                    Qualification
                  </StyledTableCell>
                  <StyledTableCell align="right" style={boldStyle}>
                    Profile{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right" style={boldStyle}>
                    Audio{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right" style={boldStyle}>
                    {" "}
                    operation
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {print ? (
                  data.map((row) => (
                    <StyledTableRow
                      component="th"
                      scope="row"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell style={centerData} alt="id">
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell align="right" style={centerData}>
                        {row.user}
                      </StyledTableCell>
                      <StyledTableCell align="right" style={centerData}>
                        {row.email}
                      </StyledTableCell>
                      <StyledTableCell align="right" style={centerData}>
                        {row.date}
                      </StyledTableCell>
                      <StyledTableCell align="right" style={centerData}>
                        {row.gender}
                      </StyledTableCell>
                      <StyledTableCell align="right" style={centerData}>
                        {row.qualification}
                      </StyledTableCell>
                      <StyledTableCell align="right" style={ProfielAlign}>
                        <Avatar
                          alt={`${row.user}`}
                          src={row.profile}
                          size="lg"
                        />
                      </StyledTableCell>
                      <StyledTableCell style={centerData}>
                        <audio style={audioTable} src={row.audiomsg} controls />
                      </StyledTableCell>
                      <StyledTableCell align="right" style={centerData}>
                        <Button
                          id={row.id}
                          onClick={() => {
                            editButtonIcon(row.id);
                            setClickEdit(true);
                          }}
                          aria-label="edit"
                          disabled={!deleteData}
                        >
                          <EditIcon />
                        </Button>
                        <Button
                          id={row.id}
                          onClick={() => {
                            delButtonIcon(row.id);
                          }}
                          aria-label="delete"
                          disabled={clickEdit}
                          style={{ color: "red" }}
                        >
                          <DeleteOutlineIcon />
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                ) : (
                  <PropagateLoader
                    color="#d6364e"
                    size="20"
                    style={propagate}
                  />
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Button
          variant="outlined"
          onClick={addEmployeeBtn}
          style={buttonCenter}
        >
          Add Employee
        </Button>
        <NavLink to="/grid" className="navlink">
          Grid application
        </NavLink>
      </Box>
      <Box>
        {emp ? (
          <Box>
            <Dialog
              open={open}
              PaperProps={{
                style: {
                  backgroundColor: "#eeeeee",
                  color: "black",
                },
              }}
              fullWidth="true"
              maxWidth="md"
            >
              <DialogTitle
                style={{
                  padding: 6,
                  backgroundColor: "#2979ff",
                  display: "flex",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontWeight: "600",
                }}
              >
                Registration
              </DialogTitle>
              <DialogTitle
                style={{
                  backgroundColor: "#FF0000",
                  display: `${error}`,
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >
                {errorMsg}
              </DialogTitle>
              <DialogTitle
                style={{
                  backgroundColor: "#008000",
                  display: `${datasubmitDisplay}`,
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >
                {datasubmit}
              </DialogTitle>
              <DialogContent>
                <DialogContentText style={{ color: "#FF0000" }} />
                <Box
                  sx={{
                    color: " #000000.",
                    p: 2,
                    borderRadius: "25px",
                    fontSize: "29px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <form>
                        <FormControl>
                          <TextField
                            fullWidth
                            label="Name"
                            style={formStyle}
                            name="user"
                            onChange={(e) => {
                              if (e.target.value.match(regexUser)) {
                                updateUser(e.target.value);
                              }
                            }}
                            value={user}
                          />
                          <TextField
                            fullWidth
                            label="Email"
                            style={formStyle}
                            name="email"
                            onChange={(e) => updateEmail(e.target.value)}
                            value={email}
                          />
                          <TextField
                            fullWidth
                            style={formStyle}
                            name="date"
                            onChange={(e) => {
                              updateDate(e.target.value);
                            }}
                            type="date"
                            value={date}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel style={LabelStyle} name="gender">
                            Gender
                          </FormLabel>
                          <RadioGroup
                            style={{ display: "initial", marginTop: "-10px" }}
                            value={gender}
                            onChange={(e) => {
                              updateGender(e.target.value);
                            }}
                          >
                            <Radio
                              value="female"
                              label="Female"
                              style={radio}
                              control={<Radio />}
                              aria-checked="false"
                            />
                            <Radio
                              value="male"
                              label="Male"
                              style={radio}
                              control={<Radio />}
                              aria-checked="false"
                            />
                          </RadioGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel style={LabelStyle} name="qualification">
                            Qualification
                          </FormLabel>
                          <RadioGroup
                            style={{ display: "initial", marginTop: "-10px" }}
                            value={qualification}
                            onChange={(e) => {
                              updateQualification(e.target.value);
                            }}
                          >
                            <Radio
                              value="10"
                              label="10th"
                              style={radio}
                              control={<Radio />}
                              aria-checked="false"
                            />
                            <Radio
                              value="12"
                              label="12th"
                              style={radio}
                              control={<Radio />}
                              aria-checked="false"
                            />
                            <Radio
                              value="graduation"
                              label="Graduation"
                              style={radio}
                              control={<Radio />}
                              aria-checked="false"
                            />
                            <Radio
                              value="phd"
                              label="PhD"
                              style={radio}
                              control={<Radio />}
                              aria-checked="false"
                            />
                          </RadioGroup>
                        </FormControl>
                        <FormLabel style={LabelStyle} name="Profile">
                          Profile Photo
                        </FormLabel>
                        <TextField
                          fullWidth
                          type="file"
                          accept="image/png, image/jpeg"
                          name="profile"
                          ref={inputImage}
                          onChange={() => {
                            getBase64();
                          }}
                        />
                        <FormLabel style={LabelStyle} name="Audio">
                          Audio
                        </FormLabel>
                        <audio
                          id="my-audio"
                          controls
                          style={{ display: "block" }}
                        />
                        <Button
                          id="start"
                          onClick={startHandler}
                          style={audioMsgBtn}
                        >
                          Record
                        </Button>
                        <Button
                          id="stop"
                          onClick={stopHandler}
                          style={audioMsgBtn}
                        >
                          Stop
                        </Button>
                      </form>
                    </Grid>
                  </Grid>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
                  onClick={cancelButton}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#6d6d6d", color: "#FFFFFF" }}
                  onClick={submitButton}
                >
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        ) : (
          <PropagateLoader color="#d6364e" size="20" style={propagate} />
        )}
      </Box>
    </div>
  );
}
export default RegistrationForm;
