export default {
  palette: {
    tonalOffset: 0.2,
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    contrastThreshold: 3,
    grey: {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
      A700: "#616161",
      A100: "#d5d5d5",
      A400: "#303030",
      A200: "#aaaaaa",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    type: "light",
    action: {
      hoverOpacity: 0.08,
      hover: "rgba(0, 0, 0, 0.08)",
      selected: "rgba(0, 0, 0, 0.14)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabled: "rgba(0, 0, 0, 0.26)",
      active: "rgba(0, 0, 0, 0.54)",
    },
    primary: {
      main: "#29B6F6",
      light: "rgb(83, 196, 247)",
      dark: "rgb(28, 127, 172)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    userNextVariants: true,
  },
  spreadthis: {
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage: "url(https://source.unsplash.com/random/)",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#fafafa",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 20,
    },
    avatar: {
      margin: "8px",
      width: "56px",
      height: "56px",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: "8px",
    },
    submit: {
      margin: "24px 0px 16px",
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10,
    },
    progress: {
      position: "absolute",
    },
    invisibleSeparator: {
      border: "none",
    },
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20,
    },

    profile: {
      "& .image-wrapper": {
        textAlign: "center",
        position: "relative",
        "& button": {
          position: "absolute",
          top: "80%",
          left: "70%",
        },
      },
      "& .profile-image": {
        width: 200,
        height: 200,
        objectFit: "cover",
        maxWidth: "100%",
        borderRadius: "50%",
      },
      "& .profile-details": {
        textAlign: "center",
        "& span, svg": {
          verticalAlign: "middle",
        },
        "& a": {
          color: "#29B6F6",
        },
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0",
      },
      "& svg.button": {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    buttons: {
      textAlign: "center",
      "& a": {
        margin: "20px 10px",
      },
    },
  },
};
