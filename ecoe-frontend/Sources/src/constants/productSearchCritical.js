import { MS } from "./domainType";

export const typeSearch1 = {
  townHouse: {
    townHouse_all: {
      name: "Nhà phố",
      value: false
    },
    facade: {
      name: "Mặt tiền",
      value: false,
    },
    allay: {
      name: "Nhà trong hẻm",
      value: false,
    },
    // carAllay: {
    //     name: "Hẽm Ôtô",
    //     value: false,
    // }
  },
  condo: {
    condo_all: {
      name: "Căn hộ",
      value: false,
    },
    apartment: {
      name: "Chung cư",
      value: false
    },
    shopHouse: {
      name: "Shophouse",
      value: false
    },
    penHouse: {
      name: "Penthouse",
      value: false
    },
    officetel: {
      name: "Officetel",
      value: false
    },
  },
  villa: {
    villa_all: {
      name: "Biệt thự",
      value: false
    }

  },
  land: {
    land_all: {
      name: "Đất nền",
      value: false
    }
  }
}

export const projectTypeSearch = {
  house: [
    {
      key: 1,
      name: "Nhà phố",//townHouse
      value: false
    },

    {
      key: 2,
      name: "Liền kề",//facade
      value: false
    },
    {
      key: 3,
      name: "Shophouse",//allay
      value: false,
    },
   
  ],
  building: [
    {
      key: 1,
      name: "Căn hộ",//condo_all
      value: false,
    },
    {
      key: 2,
      name: "Chung cư",//apartment
      value: false
    },
    {
      key: 3,
      name: "Penhouse",//shopHouse
      value: false
    },
    {
      key: 4,
      name: "Duplex",//shopHouse
      value: false
    },
    {
      key: 5,
      name: "Shophouse",//shopHouse
      value: false
    },   
    {
      key: 6,
      name: "Officetel",//officetel
      value: false
    },
    {
      key: 7,
      name: "Khác",//officetel
      value: false
    }
  ],
  maison: [
    {
      key: 1,
      name: "Biệt thự",//villa_all
      value: false
    },
    {
      key: 2,
      name: "Liền kề",//villa_all
      value: false
    },
    {
      key: 3,
      name: "Đơn lập",//villa_all
      value: false
    },
    {
      key: 4,
      name: "Song lập",//villa_all
      value: false
    },
    {
      key: 5,
      name: "Shophouse",//villa_all
      value: false
    }

  ],
  land: [
    {
      key: 1,
      name: "Đất nền",//land_all
      value: false
    }
  ]
}

export const houseTypeSearch = {
  house: [
    {
      key: 1,
      name: "Nhà phố",//townHouse
      value: false
    },

    {
      key: 2,
      name: "Mặt tiền",//facade
      value: false
    },
    {
      key: 3,
      name: "Trong hẻm",//allay
      value: false,
    }    
  ],
  building: [
    {
      key: 1,
      name: "Căn hộ",//condo_all
      value: false,
    }  
  ],
  maison: [
    {
      key: 1,
      name: "Biệt thự",//villa_all
      value: false
    }

  ],
  land: [
    {
      key: 1,
      name: "Đất nền",//land_all
      value: false
    }
  ]
}

export const areaSearch = {
  name: "Khu vực",
  value: false,
  HoChiMinh: {
    name: "TP Hồ Chí Minh",
    value: true,
  },
  BinhDuong: {
    name: "Bình Dương",
    value: false,
  },
  longAn: {
    name: "Long An",
    value: false,
  },
  DongNai: {
    name: "Đồng Nai",
    value: false,
  },
  other: {
    name: "Khác",
    value: false,
  }
}
export const CriticalSearch =
{
  projectType: 1,
  searchContent: "Nguyễn văn thủ",
  domainSearch: {
    type: projectTypeSearch,
    area: areaSearch
  },
};

export const authorSearch = [
  {
    key: 'AUTHOR_ME',
    name: 'Tôi'
  },
  {
    key: 'AUTHOR_OTHER',
    name: 'Môi giới khác'
  },
];

export const dropdownType = [
  {
    key: "PROJECT",
    name: "Dự Án",
    value: true,
  },
  {
    key: "HOUSE",
    name: "Nhà Đất",
    value: false,
  },
]

export const statusSearch = {
  PRJ: [
    {
      key: 'PRJ_OPENING_SOON',
      name: 'Sắp mở bán'
    },
    {
      key: 'PRJ_OPENING',
      name: 'Đang mở bán'
    },
    {
      key: 'PRJ_SOLD',
      name: 'Đã bàn giao'
    }
  ],
  HM: [
    {
      key: 'HM_OPENING',
      name: 'Đang bán'
    },
    {
      key: 'HM_SOLD',
      name: 'Đã bán'
    }
  ]
};


export const bedsSearch = [
  {
    key: 'ONE',
    name: '1'
  },
  {
    key: 'TWO',
    name: '2'
  },
  {
    key: 'THREE',
    name: '3'
  },
  {
    key: 'FOUR',
    name: '4'
  },
  {
    key: 'FIVE',
    name: '≥ 5'
  },
];

export const bathsSearch = [
  {
    key: 'ONE',
    name: '1'
  },
  {
    key: 'TWO',
    name: '2'
  },
  {
    key: 'THREE',
    name: '3'
  },
  {
    key: 'FOUR',
    name: '4'
  },
  {
    key: 'FIVE',
    name: '≥ 5'
  },
];

export const directionsSearch = [
  {
    key: 'EAST',
    name: 'Đông'
  },
  {
    key: 'WEST',
    name: 'Tây'
  },
  {
    key: 'SOUTH',
    name: 'Nam'
  },
  {
    key: 'NORTH',
    name: 'Bắc'
  },
  {
    key: 'EAST_NORTH',
    name: 'Đông Bắc'
  },
  {
    key: 'EAST_SOUTH',
    name: 'Đông Nam'
  },
  {
    key: 'WEST_NORTH',
    name: 'Tây Bắc'
  },
  {
    key: 'WEST_SOUTH',
    name: 'Tây Nam'
  }
];

export const juridicalSearch = [
  {
    key: 'LAND_DEED',
    name: 'Sổ đỏ/Sổ hồng'
  },
  {
    key: 'CONTRACT',
    name: 'Hợp đồng mua bán'
  },
  {
    key: 'OTHER',
    name: 'Khác'
  },
];

export const areaSearchTest = {
  city: [
    {
      key: 1,
      name: "TP Hồ Chí Minh",
      value: false,
    },
    {
      key: 2,
      name: "Bình Dương",
      value: false,
    },
    {
      key: 3,
      name: "Long An",
      value: false,
    },
    {
      key: 4,
      name: "Đồng Nai",
      value: false,
    },
    {
      key: 5,
      name: "Khác",
      value: false,
    }
  ],
  districts: [
    {
      key: 0,
      province_id: 1,
      name: "Tất cả",
      value: false,
    },
    {
      key: 1,
      province_id: 1,
      name: "Quận 1",
      value: false,
    },
    {
      key: 2,
      province_id: 1,
      name: "Quận 2",
      value: false,
    },
    {
      key: 3,
      province_id: 1,
      name: "Quận 3",
      value: false,
    },
    {
      key: 4,
      province_id: 1,
      name: "Quận 4",
      value: false,
    },
    {
      key: 5,
      province_id: 1,
      name: "Quận 5",
      value: false,
    },
    {
      key: 6,
      province_id: 1,
      name: "Quận 6",
      value: false,
    },
    {
      key: 7,
      province_id: 1,
      name: "Quận 7",
      value: false,
    },
    {
      key: 8,
      province_id: 1,
      name: "Quận 8",
      value: false,
    },
    {
      key: 9,
      province_id: 1,
      name: "Quận 9",
      value: false,
    },
    {
      key: 10,
      province_id: 1,
      name: "Quận 10",
      value: false,
    },
    {
      key: 11,
      province_id: 1,
      name: "Quận 11",
      value: false,
    },
    {
      key: 12,
      province_id: 1,
      name: "Quận 12",
      value: false,
    }
    ,
    {
      key: 13,
      province_id: 3,
      name: "Tất cả",
      value: false,
    }
    ,
    {
      key: 14,
      province_id: 3,
      name: "TP. Tân An",
      value: false,
    }
    ,
    {
      key: 15,
      province_id: 3,
      name: "Bến Lức",
      value: false,
    }
    ,
    {
      key: 16,
      province_id: 3,
      name: "Cần Giuộc",
      value: false,
    }
  ],
  wards: [
    {
      key: 0,
      district_id: 1,
      name: "Tất cả",
      value: false,
    },
    {
      key: 1,
      district_id: 1,
      name: "Phường 1",
      value: false,
    },
    {
      key: 2,
      district_id: 1,
      name: "Phường 2",
      value: false,
    },
    {
      key: 3,
      district_id: 1,
      name: "Phường 3",
      value: false,
    },
    {
      key: 4,
      district_id: 16,
      name: "Tất cả",
      value: false,
    },
    {
      key: 5,
      district_id: 16,
      name: "TT. Cần Giuộc",
      value: false,
    },
    {
      key: 6,
      district_id: 16,
      name: "Xã Long Thượng",
      value: false,
    },
    {
      key: 7,
      district_id: 16,
      name: "Xã Phước Lâm",
      value: false,
    },
    {
      key: 8,
      district_id: 16,
      name: "Xã Trường Binh",
      value: false,
    },
  ],
}

export const searchCritical =
{
  freeText: "",
  productType: "PROJECT",
  domainType: MS,
  userId: 0,
  commonSearch: {
    area: {
      wards: [],
      districts: [],
      cities: [],
    },
    estateType: {
      house: [],
      building: [],
      maison: [],
      land: [],
    },
    status: [],
    price: { min: 0, max: 0, unit: 'tỷ' },
    authors: []
  },
  advanceSearch: {
    investors: [],
    acreage: {
      min: 0,
      max: 0,
      unit: 'm2'
    },
    beds: [],
    baths: [],
    directions: [],
    juridical: []
  },
  category: "",
  searchText: "",
  orderBy: {
    field: "",
    isDesc: true
  },
  pagination: {
    pageIndex: 1,
    pageSize: 10
  }
};


export const searchCriticals = [
  [{ searchCritical }, { ...searchCritical, productType: 'HOUSE' }],
  [{ searchCritical }, { ...searchCritical, productType: 'HOUSE' }],
  [{ searchCritical }, { ...searchCritical, productType: 'HOUSE' }]
];

export const homeSearchCritical =
{  
  productType: "PROJECT",
  domainType: MS,
  userId: 0,
  category: ""  ,
  pageSize: 4
};


