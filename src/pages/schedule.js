import React, { useState } from "react"
import { Container, Button, Typography, FormHelperText, TextField, MenuItem, IconButton, InputAdornment} from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers"
import InputMask from "react-input-mask"
import MomentUtils from "@date-io/moment"
import TodayIcon from "@material-ui/icons/Today"

// Internal Components
import Layout from "../components/layout"

const styles = theme => ({
  root: {
    marginTop: 170,
    [theme.breakpoints.up("md")]: {
      marginTop: 40,
    },
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
  },
  section: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      width: "100%",
    },
  },
  sectionTitle: {
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
    },
  },
  container: {
    width: '75%',
    margin: '0 auto',
  }
})

const Schedule = ({ classes }) => {
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  const [selectedDate, handleDateChange] = useState(tomorrow)
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [salesman, setSalesman] = useState("")
  const [referral, setReferral] = useState("")
  const [emailError, setEmailError] = useState(false)
  
  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem('close_nag', true)
  }

  const providers = [
      "Greg Becker",
      "Brad Mays",
      "Chad Mays",
      "Mark Lucas",
      "Mays-Wilson Construction Company, LLC"
  ]

  const validateEmail = (text) => {
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
    if (!pattern.test(text)) {
        setEmailError("Please enter valid email address.")
    } else {
        setEmailError(false)
    }
    setEmail(text)
  }

  const bookIt = () => {

  }

  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <div className={classes.section}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <form className={classes.container} noValidate action="https://getform.io/f/b0c3a569-efca-4ee3-bc67-67e1382c3941" method="POST">
                <Typography variant="h3" component="h2" style={{ marginBottom: 20 }}>
                    Schedule an appointment
                </Typography>
                <div>
                  <DateTimePicker
                    autoOk
                    value={selectedDate}
                    onChange={handleDateChange}
                    required
                    id="date_and_time"
                    label="Select date &amp; time"
                    minDateMessage="Appointment may not be within 24 hours"
                    minDate={tomorrow}
                    fullWidth={true}
                    name="Appointment"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <TodayIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                
                
                <div>
                  <TextField
                    id="name"
                    label="Your Name"
                    name="Name"
                    required
                    defaultValue=""
                    fullWidth={true}
                    value={name}
                    onChange={(evt) => setName(evt.target.value)}
                  />
                </div>
                <div>
                  <InputMask
                    mask="(999) 999-9999"
                    value={phoneNumber}
                    required
                    disabled={false}
                    name="Phone Number"
                    maskChar=" "
                    onChange={evt => setPhoneNumber(evt.target.value)}
                  >
                    <TextField
                      id="phone_number"
                      label="Phone Number"
                      required
                      defaultValue=""
                      fullWidth={true}
                    />
                  </InputMask>
                </div>
                <div>
                    <TextField
                        id="email"
                        label="Email Address"
                        required
                        validations={["required", "email"]}
                        defaultValue=""
                        name="Email Address"
                        value={email}
                        fullWidth={true}
                        onChange={(evt) => validateEmail(evt.target.value)}
                    />
                    { emailError? <FormHelperText id="email-error-text">{emailError}</FormHelperText> : null }
                </div>
                <div>
                  <TextField
                    select
                    id="salesman"
                    label="Provider"
                    value={salesman}
                    fullWidth={true}
                    name="Provider"
                    onChange={evt => setSalesman(evt.target.value)}
                  >
                    {providers.map((person, idx) => (
                      <MenuItem key={idx} value={person}>
                        {person}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    id="how_did_you_hear_about_us"
                    label="How did you hear about us?"
                    name="Referral"
                    fullWidth={true}
                    value={referral}
                    onChange={(evt) => setReferral(evt.target.value)}
                    multiline
                    rows={4}
                    defaultValue=""
                  />
                </div>
                <Button 
                    variant="contained" 
                    size="large" 
                    style={{marginTop: 10}} 
                    color="primary" 
                    type="submit" 
                    disabled={
                        !selectedDate ||
                        name === "" ||
                        phoneNumber === "" ||
                        email === "" ||
                        emailError
                    }
                    onClick={bookIt}
                >
                    Confirm Booking
                </Button>
              </form>
            </MuiPickersUtilsProvider>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default withStyles(styles)(Schedule)