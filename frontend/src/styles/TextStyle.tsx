export const styleButton = {
    backgroundColor: "#4caf50",
    "&:hover": {
      backgroundColor: "#388e3c"
    }

}

export const styleTextField =  {
    "& label": {
      "&.Mui-focused": {
        color: '#4caf50'
      }
    },
    ".MuiFilledInput-underline:after":{
        borderBottomColor: '#4caf50'
    }
}

export const passwordStyleTextField = {
  ...styleTextField,
  width: "60%",
}

export const calendarButton = {
  height: "8%",
  fontSize: "100%"
}