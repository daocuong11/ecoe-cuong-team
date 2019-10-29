const theme = {
  fontTypeFace: {
    fontMuli: "Muli, sans-serif",
    fontQuicksand: "Quicksand, sans-serif"
  },
  fontSize: {
    unit  : "1rem",
    small : "1.2rem",
    normal: "1.4rem",
    medium: "1.6rem",
    medium18: "1.8rem",
    large : "2rem",
    projectFooter: "2.2rem",
    projectTitle: "2.4rem",
    sectionTitle: "2.8rem",
  },
  fontWeight: {
    extraBold: "900",
    bold     : "700",
    semiBold : "600",
    regular  : "400"
  },
  background: {
    bg          : "#f4fbfc",
    primaryBlue : "#0a2240",
    primaryGreen: "#00837b",
    darkGreen   : "#045752",
    primaryGrey : "#e8eaeb",
    confirm     : "f4c867",
    warning     : "#edb63b", 
    remove      : "#da6744",
    help        : "#1cbfc6",
    lightCyan   : "#e2f9fa",
    white       : "#fff",
    lightYellow : "#fffbe3"
  },
  textColor: {
    primaryBlue: "#0a2240",
    primaryGreen: "#00837b",
    secondary  : "#10c1ac",
    secondaryMe: "#aab0b7",
    secondaryH : "#e8eaeb",
    grey       : "#7f7f7f",
    lighBlack  : "#333",
    white      : "#fff",
    information: "#1cbfc6",
    error      : "#da6744",
    warning    : "#edb63b",
    label      : "#949fad",
    pastelBlue : "#a8bad3", //color 1F
    hotArea    : "#566f90", //Khu vuc soi dong
    hotArea2   : "#28466a", //Khu vuc soi dong dong 2
    labelAccordion: "#748cad",
  },

  buttonStyle: [
    //backgroundColor
    {
      background: "#00837b",
      hover: "#04a895",
      border: "none",
      color: "#fff"
    },
    //borderColor
    {
      background: "#fff",
      hover: "#04a895",
      border: "1px solid #00837b",
      color: "#00837b"
    }
  ],

  productCard: [

  ],

  logoEcoe: {
    urlLogo: "",
    altLogo: 'One touch to home',
    classLogo: 'test'
  },
 
  itemButton: [
    {
      link: 'dang-bat-dong-san',
      label: 'Đăng bất động sản'
    }
  ],

  avatarStyle: [
    {
      backgroundColor: '#0a2240',
      textColor: '#fff'
    },
    {
      backgroundColor: '#00837b',
      textColor: '#fff'
    },
    {
      backgroundColor: '#e07e37',
      textColor: '#0a2240'
    },
    {
      backgroundColor: '#77ba6a',
      textColor: '#0a2240'
    },
    {
      backgroundColor: '#da6744',
      textColor: '#0a2240'
    },
    {
      backgroundColor: '#1cbfc6',
      textColor: '#0a2240'
    },
    {
      backgroundColor: '#f4c867',
      textColor: '#0a2240'
    }
  ],

  tagStyle: [
    /* 0- Sử dụng cho card đã bán*/
   {
    background: "#da6744",
    color: "#fff"
    },
    {
      background: "#1cbfc6",
      color: "#fff"
    }
  ],  

  iconStyle: [
    {
      colorDefault: "#cfd9e6",
      colorHover: "#0a2240",
      colorActive: "#00837b"
    },
    {
      colorDefault: "green",
      colorHover: "blue",
      colorActive: "red"
    },
    {
      colorDefault: "#fff",
      colorHover: "",
      colorActive: ""
    },
    {
      colorDefault: "#0a2240",
      colorHover: "#072d5d",
      colorActive: ""
    },
    {
      colorDefault: "#fff",
      colorHover: "#0a2240",
      colorActive: "#0a2240"
    }
  ], 

  cardButtonStyle: [
    //backgroundColor
    {
      background: "#00837b",
      hover: "#04a895",
      border: "none",
      color: "#fff"
    },
    //borderColor
    {
      background: "none",
      hover: "#04a895",
      border: "1px solid #00837b",
      color: "#00837b"
    },
    {
      background: "#fff",
      hover: "#04a895",
      border: "0px solid #FFF",
      color: "#00837b"
    }
  ],  

};
  
export default theme;