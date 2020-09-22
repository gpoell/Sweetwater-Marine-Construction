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
        fontSize: 64,
        color: "#fff",
        fontWeight: 400,
        fontFamily: "Georgia",
        "@media (max-width:760px)": {
          fontSize: 26,
          fontWeight: 700,
        },
      },
      // Navigation
      h2: {
        fontSize: 28,
        fontWeight: 700,
        fontFamily: "Georgia",
        color: "#0058A0",
        "@media (max-width:760px)": {
          fontSize: 34,
          marginBottom: 15,
          textAlign: "center",
        },
      },
      h3: {
        fontSize: 38,
        color: "#fff",
        fontWeight: 400,
        fontFamily: "Georgia",
        marginBottom: 30,
        "@media (max-width:760px)": {
          fontSize: 18,
          fontWeight: 400,
          marginBottom: 20,
        },
      },
      // Footer
      h4: {
        fontSize: 14,
        fontWeight: 700,
        fontColor: "#00004d",
        "@media (max-width:800px)": {
          fontSize: 14,
          fontWeight: 700,
        },
      },
      // Header for Service Locations; text alignment is messed up
      h5: {
        fontSize: 58,
        fontWeight: 500,
        fontFamily: "Georgia",
        marginBottom: 30,
        color: "#0058A0",
        maxHeight: 128,
        "@media (max-width:800px)": {
          fontSize: 24,
          fontWeight: 700,
          marginBottom: 15,
        },
      },
      // Navigation Contact
      h6: {
        fontSize: 16,
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
  },
});
