import avatar from "images/Avatars/5.png";

import prod1 from "images/products/prod1.jpg";
import prod2 from "images/products/prod2.jpg";
import prod3 from "images/products/prod3.jpg";
import prod4 from "images/products/prod4.jpg";
import prod5 from "images/products/prod5.jpg";
import prod6 from "images/products/prod6.jpg";
import prod7 from "images/products/prod7.jpg";
import prod8 from "images/products/prod8.jpg";
import prod9 from "images/products/prod9.jpg";
import prod10 from "images/products/prod10.jpg";
import prod11 from "images/products/prod11.jpg";
import prod12 from "images/products/prod12.jpg";
import prod13 from "images/products/prod13.jpg";
import prod14 from "images/products/prod14.jpg";
import prod15 from "images/products/prod15.jpg";

export const ProductList = [
  {
    id: "1",
    productType: "HOUSE",
    isOwner: true,
    isEnable: true,
    address: "Điện Biên Phủ, phường 17, quận BT",
    name: 'Căn hộ Masteri Millennium view đẹp',
    images: [
      {
        src: prod1,
        alt: "Khu vui chơi trẻ em"
      },
      {
        src: prod2,
        alt: "Trung tâm thương mại"
      },
      {
        src: prod3,
        alt: "Hồ bơi tràn bờ ngắm cảnh"
      }

    ],
    utilities: {
      beds: "2",
      baths: "2",
      areas: "66.6m2",
      direction: "Tây Bắc ",
      balcons: "2"
    },
    basePrice: "34-40",
    totalPrice: "7.2",
    commission: "2.1%",
    status: "Đã bán",
    contactPhone: "0123456789",
    likes: "212",
    views: "332",
    shareSocials: "facebook",
    //Thông tin dành cho dự án
    investor: "",
    numberOfUnits: "",
    projectArea: "",
    scale: "",
    date: "",
    model: "",
    //Thông tin hiển thị của môi giới
    broker: {
      brokerAvatar: avatar,
      brokerName: "Lương triều thanh"
    },
    isSharing: true,
    isReceive: false
  },

  {
    id: "2",
    productType: "PROJECT",
    isOwner: false,
    isEnable: true,
    address: "Điện Biên Phủ, phường 17, quận BT",
    name: 'Căn hộ Masteri Millennium view đẹp',
    images: [
      {
        src: prod4,
        alt: "Khu vui chơi trẻ em"
      },
      {
        src: prod5,
        alt: "Trung tâm thương mại"
      },
      {
        src: prod6,
        alt: "Hồ bơi tràn bờ ngắm cảnh"
      }

    ],
    utilities: {
      beds: "2",
      baths: "2",
      areas: "84.5m2",
      direction: "Đông Nam ",
      balcons: "2"
    },
    basePrice: "34-40",
    totalPrice: "7.2",
    commission: "2.1%",
    status: "Sắp mở bán",
    contactPhone: "0123456789",
    likes: "212",
    views: "332",
    shareSocials: "facebook",
    //Thông tin dành cho dự án
    investor: "Himlam land",
    numberOfUnits: "4200 căn",
    projectArea: "60 hec",
    scale: "3",
    date: "10-2022",
    model: "",
    //Thông tin hiển thị của môi giới
    broker: {
      brokerAvatar: avatar,
      brokerName: "Lương triều thanh"
    },
    isSharing: 1,
    isReceive: false
  },

  {
    id: "3",
    productType: "PROJECT",
    isOwner: false,
    isEnable: false,
    address: "Điện Biên Phủ, phường 17, quận BT",
    name: 'Căn hộ Masteri Millennium view đẹp',
    images: [
      {
        src: prod7,
        alt: "Khu vui chơi trẻ em"
      },
      {
        src: prod8,
        alt: "Trung tâm thương mại"
      },
      {
        src: prod9,
        alt: "Hồ bơi tràn bờ ngắm cảnh"
      }

    ],
    utilities: {
      beds: "2",
      baths: "2",
      areas: "66.6m2",
      direction: "Tây Bắc ",
      balcons: "2"
    },
    basePrice: "34-40",
    totalPrice: "7.2",
    commission: "2.1%",
    status: "Đang bán",
    contactPhone: "0123456789",
    likes: "212",
    views: "332",
    shareSocials: "facebook",
    //Thông tin dành cho dự án
    investor: "",
    numberOfUnits: "",
    projectArea: "",
    scale: "",
    date: "",
    model: "",
    //Thông tin hiển thị của môi giới
    broker: {
      brokerAvatar: avatar,
      brokerName: "Lương triều thanh"
    },
    isSharing: 1,
    isReceive: false
  },

  {
    id: "4",
    productType: "HOUSE",
    isOwner: true,
    isEnable: true,
    address: "Điện Biên Phủ, phường 17, quận BT",
    name: 'Căn hộ Masteri Millennium view đẹp',
    images: [
      {
        src: prod10,
        alt: "Khu vui chơi trẻ em"
      },
      {
        src: prod11,
        alt: "Trung tâm thương mại"
      },
      {
        src: prod12,
        alt: "Hồ bơi tràn bờ ngắm cảnh"
      }

    ],
    utilities: {
      beds: "2",
      baths: "2",
      areas: "66.6m2",
      direction: "Tây Bắc ",
      balcons: "2"
    },
    basePrice: "34-40",
    totalPrice: "7.2",
    commission: "2.1%",
    status: "Sắp mở bán",
    contactPhone: "0123456789",
    likes: "212",
    views: "332",
    shareSocials: "facebook",
    //Thông tin dành cho dự án
    investor: "",
    numberOfUnits: "",
    projectArea: "",
    scale: "",
    date: "",
    model: "",
    //Thông tin hiển thị của môi giới
    broker: {
      brokerAvatar: avatar,
      brokerName: "Lương triều thanh"
    },
    isSharing: 1,
    isReceive: false
  },

  {
    id: "5",
    productType: "PROJECT",
    isOwner: false,
    isEnable: true,
    address: "Điện Biên Phủ, phường 17, quận BT",
    name: 'Căn hộ Masteri Millennium view đẹp',
    images: [
      {
        src: prod13,
        alt: "Khu vui chơi trẻ em"
      },
      {
        src: prod14,
        alt: "Trung tâm thương mại"
      },
      {
        src: prod15,
        alt: "Hồ bơi tràn bờ ngắm cảnh"
      }

    ],
    utilities: {
      beds: "2",
      baths: "2",
      areas: "66.6m2",
      direction: "Tây Bắc ",
      balcons: "2"
    },
    basePrice: "34-40",
    totalPrice: "7.2",
    commission: "2.1%",
    status: "Đang bán",
    contactPhone: "0123456789",
    likes: "212",
    views: "332",
    shareSocials: "facebook",
    //Thông tin dành cho dự án
    investor: "ANZ Company",
    numberOfUnits: "4500",
    projectArea: "60.000",
    scale: "12",
    date: "12/2025",
    model: "căn hộ",
    //Thông tin hiển thị của môi giới
    broker: {
      brokerAvatar: avatar,
      brokerName: "Lương triều thanh"
    },
    isSharing: 1,
    isReceive: true
  },

  {
    id: "6",
    productType: "PROJECT",
    isOwner: true,
    isEnable: true,
    address: "Điện Biên Phủ, phường 17, quận BT",
    name: 'Căn hộ Masteri Millennium view đẹp',
    images: [
      {
        src: prod13,
        alt: "Khu vui chơi trẻ em"
      },
      {
        src: prod14,
        alt: "Trung tâm thương mại"
      },
      {
        src: prod15,
        alt: "Hồ bơi tràn bờ ngắm cảnh"
      }

    ],
    utilities: {
      beds: "2",
      baths: "2",
      areas: "66.6m2",
      direction: "Tây Bắc ",
      balcons: "2"
    },
    basePrice: "34-40",
    totalPrice: "7.2",
    commission: "2.1%",
    status: "Sắp mở bán",
    contactPhone: "0123456789",
    likes: "212",
    views: "332",
    shareSocials: "facebook",
    //Thông tin dành cho dự án
    investor: "",
    numberOfUnits: "",
    projectArea: "",
    scale: "",
    date: "",
    model: "",
    //Thông tin hiển thị của môi giới
    broker: {
      brokerAvatar: avatar,
      brokerName: "Lương triều thanh"
    },
    isSharing: 1,
    isReceive: false
  },

  {
    id: "7",
    productType: "PROJECT",
    isOwner: false,
    isEnable: false,
    address: "Điện Biên Phủ, phường 17, quận BT",
    name: 'Căn hộ Masteri Millennium view đẹp',
    images: [
      {
        src: prod13,
        alt: "Khu vui chơi trẻ em"
      },
      {
        src: prod14,
        alt: "Trung tâm thương mại"
      },
      {
        src: prod15,
        alt: "Hồ bơi tràn bờ ngắm cảnh"
      }

    ],
    utilities: {
      beds: "2",
      baths: "2",
      areas: "66.6m2",
      direction: "Tây Bắc ",
      balcons: "2"
    },
    basePrice: "34-40",
    totalPrice: "7.2",
    commission: "2.1%",
    status: "Đang bán",
    contactPhone: "0123456789",
    likes: "212",
    views: "332",
    shareSocials: "facebook",
    //Thông tin dành cho dự án
    investor: "",
    numberOfUnits: "",
    projectArea: "",
    scale: "",
    date: "",
    model: "",
    //Thông tin hiển thị của môi giới
    broker: {
      brokerAvatar: avatar,
      brokerName: "Lương triều thanh"
    },
    isSharing: 1,
    isReceive: false
  },

  {
    id: "8",
    productType: "PROJECT",
    isOwner: true,
    isEnable: false,
    address: "Điện Biên Phủ, phường 17, quận BT",
    name: 'Căn hộ Masteri Millennium view đẹp',
    images: [
      {
        src: prod13,
        alt: "Khu vui chơi trẻ em"
      },
      {
        src: prod14,
        alt: "Trung tâm thương mại"
      },
      {
        src: prod15,
        alt: "Hồ bơi tràn bờ ngắm cảnh"
      }

    ],
    utilities: {
      beds: "2",
      baths: "2",
      areas: "66.6m2",
      direction: "Tây Bắc ",
      balcons: "2"
    },
    basePrice: "34-40",
    totalPrice: "7.2",
    commission: "2.1%",
    status: "Đang bán",
    contactPhone: "0123456789",
    likes: "212",
    views: "332",
    shareSocials: "facebook",
    //Thông tin dành cho dự án
    investor: "",
    numberOfUnits: "",
    projectArea: "",
    scale: "",
    date: "",
    model: "",
    //Thông tin hiển thị của môi giới
    broker: {
      brokerAvatar: avatar,
      brokerName: "Lương triều thanh"
    },
    isSharing: 1,
    isReceive: false
  },

  {
    id: "9",
    productType: "HOUSE",
    isOwner: true,
    isEnable: true,
    address: "Điện Biên Phủ, phường 17, quận BT",
    name: 'Căn hộ Masteri Millennium view đẹp',
    images: [
      {
        src: prod15,
        alt: "Khu vui chơi trẻ em"
      },
      {
        src: prod7,
        alt: "Trung tâm thương mại"
      },
      {
        src: prod9,
        alt: "Hồ bơi tràn bờ ngắm cảnh"
      }

    ],
    utilities: {
      beds: "2",
      baths: "2",
      areas: "280m2",
      direction: "Tây Bắc ",
      balcons: "2"
    },
    basePrice: "34-40",
    totalPrice: "7.2",
    commission: "2.1%",
    status: "Đang bán",
    contactPhone: "0123456789",
    likes: "212",
    views: "332",
    shareSocials: "facebook",
    //Thông tin dành cho dự án
    investor: "",
    numberOfUnits: "",
    projectArea: "",
    scale: "",
    date: "",
    model: "",
    //Thông tin hiển thị của môi giới
    broker: {
      brokerAvatar: avatar,
      brokerName: "Lương triều thanh"
    },
    isSharing: 0,
    isReceive: false
  }


]