import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#00004d",
      dark: "#d4af37",
    },
    secondary: {
      main: "#0058A0",
    },
    grey: {
      main: "#f6f6f6",
    },
  },
  typography: {
    fontSize: 18,
    "@media (min-width:400px)": {
      fontSize: 8,
    },
    fontFamily: ["Verdana"],
  },
  overrides: {
    MuiTypography: {
      // Landing Page
      h1: {
        fontSize: 34,
        fontWeight: 400,
        fontFamily: "Georgia",
        textAlign: "center",
        "@media (max-width:760px)": {
          fontSize: 26,
          fontWeight: 700,
        },
      },
      // Navigation Header
      h2: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "Georgia",
        color: "#00004d",
        textAlign: "center",
        marginBottom: 20,
        "@media (max-width:760px)": {
          fontSize: 24,
          marginTop: 15,
          marginBottom: 15,
        },
      },
      // Section Header
      h3: {
        fontSize: 52,
        color: "black",
        fontWeight: 400,
        fontFamily: "Georgia",
        marginBottom: 30,
        "@media (max-width:760px)": {
          fontSize: 34,
          fontWeight: 400,
          marginBottom: 0,
        },
      },
      // Service Headers/Titles
      h4: {
        fontSize: 30,
        fontColor: "#00004d",
        marginBottom: 10,
        "@media (max-width:800px)": {
          fontSize: 32,
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
      },
      // Section Body Content
      body1: {
        fontSize: 18,
        fontWeight: 400,
        marginBottom: 20,
        "@media (max-width:760px)": {
          fontSize: 16,
          marginBottom: 15,
        },
      },
      // Footer Two
      subtitle1: {
        fontSize: 18,
        paddingTop: 20,
        paddingBottom: 20,
        color: "#fff",
        textAlign: "center",
        "@media (max-width:760px)": {
          fontSize: 12,
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
