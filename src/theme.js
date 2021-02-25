import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#1c4c84",
    },
    secondary: {
      main: "#5493cb",
    },
    grey: {
      main: "#f6f6f6",
    },
    navy_dark: "#1c4c84",
    aqua_blue: "#189AB4",
    maya_blue: "#66D3FA",
    water_blue: "#D5F3FE",
    green: "#79F2C0",
    gold: "#FFE380"
  },
  typography: {
    fontSize: 18,
    "@media (min-width:400px)": {
      fontSize: 8,
    },
    fontFamily: 'Noto Sans JP',
  },
  overrides: {
    MuiTypography: {
      // Landing Page
      h1: {
        fontSize: 52,
        fontWeight: 500,
        textAlign: "center",
        fontFamily: "Noto Sans JP",
        "@media (max-width:760px)": {
          fontSize: 18,
          fontWeight: 400,
          lineHeight: 1.555556,
          color: "#fff"
        },
      },
      // Navigation Header
      h2: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "Noto Sans JP",
        color: "#00004d",
        textAlign: "center",
        paddingLeft: 10,
        letterSpacing: 1,
        // iPad Pro
        "@media (max-width:1040px)": {
          fontSize: 12,
          paddingLeft: 10
        },
        // Mobile
        "@media (max-width:760px)": {
          fontSize: 10,
          marginTop: 5,
        },
      },
      // Landing Page
      h3: {
        fontSize: 36,
        color: "black",
        fontWeight: 400,
        fontFamily: "Georgia",
        marginBottom: 30,
        "@media (max-width:760px)": {
          fontSize: 20,
          fontWeight: 400,
          marginBottom: 0,
        },
      },
      // Service Headers/Titles
      h4: {
        fontSize: 30,
        fontColor: "#00004d",
        marginBottom: 10,
        // Mobile
        "@media (max-width:760px)": {
          fontSize: 26,
          fontWeight: 500
        },
      },
      // Footer One
      h5: {
        fontSize: 48,
        fontWeight: 500,
        fontFamily: "Georgia",
        marginBottom: 30,
        color: "#0058A0",
        textAlign: "center",
        "@media (max-width:800px)": {
          fontSize: 30,
          fontWeight: 700,
          marginBottom: 15,
        },
      },
      // Button Labels
      h6: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 1,
        // iPad
        "@media (max-width:980px)": {
          fontSize: 10,
          letterSpacing: 1,
        },
        // Mobile
        "@media (max-width:760px)": {
          fontSize: 14,
        },
      },
      // Service Body Content
      body1: {
        fontSize: 18,
        fontWeight: 400,
        marginBottom: 20,
        "@media (max-width:760px)": {
          fontSize: 14,
        },
      },
      // Footer Two
      subtitle1: {
        fontSize: 18,
        paddingTop: 20,
        color: "#fff",
        textAlign: "center",
        "@media (max-width:760px)": {
          fontSize: 9,
          paddingTop: 20,
        },
      },
      subtitle2: {
        fontSize: 12,
        paddingBottom: 20,
        color: "#fff",
        textAlign: "center",
        "@media (max-width:760px)": {
          fontSize: 8,
          paddingBottom: 20,  
        },
      },
    },
    MuiListItemIcon: {
      root: {
        paddingRight: 25,
      },
    },
    MuiListItemText: {
      root: {
        marginTop: 15,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        textTransform: "none",
      },
      label: {
        textAlign: "center"
      }
    },
    MuiPaper: {
      outlined: {
        border: "none",
      },
      rounded: {
        borderRadius: "none",
      },
    },
    MuiCardContent: {
      root: {
        paddingLeft: 0,
      },
    },
  },
});
