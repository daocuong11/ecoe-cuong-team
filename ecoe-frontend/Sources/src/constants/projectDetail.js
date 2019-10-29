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

import apartment from "images/projects/the-loai-can-ho.png";
import officetel from "images/projects/the-loai-officetel.png";
import shophouse from "images/projects/the-loai-shophouse.png";
import house from "images/projects/demoPic2.jpg";

export const HOUSE = "HOUSE";
export const VILLA = "VILLA";
export const APPARTMENT = "APPARTMENT";
export const LAND = "LAND";

//Constant MEDIA
export const TYPE_IMAGE = 'image';
export const TYPE_360 = 'link360';
export const TYPE_VIDEO = 'youTubeLink';
export const TYPE_STREETVIEW = 'streetView';
export const TYPE_3DVIEW = 'link3D';



export const MEDIA_MENU = [
    {
        key: TYPE_IMAGE,
    },
    {
        key: TYPE_360,
    },
    {
        key: TYPE_VIDEO,
    },
    {
        key: TYPE_STREETVIEW,
    },
    {
        key: TYPE_3DVIEW,
    }
];
//End Const Media
//Constant MapUtilites
export const HOSPITAL = 'hospital';
export const SHOPPING = 'shopping';
export const SCHOOL = 'school';
export const OTHER = 'other';
//End Constant MapUtilites

//Radius

export const dropdownRadius = [
    {
        key: 2,
        name: "500m",
        value: "500m",
    },
    {
        key: 3,
        name: "1km",
        value: "1km",
    },
    {
        key: 4,
        name: "2km",
        value: "2km",
    },
]

//End Radius

export const projectDetail = [
    {
        id: 1,
        productType: "PROJECT",
        name: 'Picity thạnh xuân',

        fromPrice: 2500000000,
        toPrice: 13000000000,
        acreageFromPrice: 151500000,
        acreageToPrice: 186400000,
        basePrice: 32000000, //giá m2 dành cho căn hộ
        Price: 3500000000, //giá dành cho nhà phố
        keepingFee: 200,
        commission: "1.5-3.0",

        media: [
            {
                key: 'generalImages',
                name: 'Tổng Quan',
                type: 'image',
                data: [
                    { thumb: prod4, src: prod4, alt: "Khu vui chơi trẻ em" },
                    { thumb: prod5, src: prod5, alt: "Trung tâm thương mại" },
                    { thumb: prod6, src: prod6, alt: "Hồ bơi tràn bờ ngắm cảnh" },
                    { thumb: prod10, src: prod10, alt: "Khu vui chơi trẻ em" },
                    { thumb: prod15, src: prod15, alt: "Trung tâm thương mại" },
                    { thumb: prod13, src: prod13, alt: "Hồ bơi tràn bờ ngắm cảnh" }
                ]
            },
            {
                key: 'floorPlanImages',
                name: 'Mặt bằng',
                type: 'image',
                data: [
                    { thumb: prod1, src: prod1, alt: "Khu vui chơi trẻ em" },
                    { thumb: prod2, src: prod2, alt: "Trung tâm thương mại" },
                    { thumb: prod3, src: prod3, alt: "Hồ bơi tràn bờ ngắm cảnh" }
                ]
            },
            {
                key: 'houseImages',
                name: 'Nhà mẫu',
                type: 'image',
                data: [
                    { thumb: prod7, src: prod7, alt: "Khu vui chơi trẻ em" },
                    { thumb: prod8, src: prod8, alt: "Trung tâm thương mại" },
                    { thumb: prod9, src: prod9, alt: "Hồ bơi tràn bờ ngắm cảnh" }
                ],
            },
            {
                key: 'positionImages',
                name: 'Vị trí',
                type: 'image',
                data: [
                    { thumb: prod11, src: prod11, alt: "Khu vui chơi trẻ em" },
                    { thumb: prod12, src: prod12, alt: "Trung tâm thương mại" },
                    { thumb: prod14, src: prod14, alt: "Hồ bơi tràn bờ ngắm cảnh" }
                ]
            },
            {
                key: 'link360',
                name: '360',
                type: 'url',
                data: "https://my.matterport.com/show/?m=ni84LJLKMxD&play=1&mls=1&title=1"
            },
            {
                key: 'youTubeLink',
                name: 'Video',
                type: 'url',
                data: "https://www.youtube.com/embed/_MdhU1m4EI8"
            },
            {
                key: 'streetView',
                name: 'streetView',
                type: 'url',
                data: ""
            },
            {
                key: 'link3D',
                name: 'link3D',
                type: 'url',
                data: ""
            },
        ],
        status: "Sắp mở bán",
        address: "Lê thị riêng",
        city: "Hồ chí minh",
        district: "Quận 12",
        ward: "Phường An phú đông",

        investorNm: "Himlam land",
        investorId: 1,
        investmentTotal: 12000,
        acreageTotal: 18000,
        projectArea: 2500,
        treeDensity: 70,
        buildingDensity: 30,
        typePU: "Căn hộ/ Biệt thự/ Đất nền",
        startDate: "06-2020",
        handoverDate: "12-2025",
        totalTower: 6,
        totalFloor: 24,
        totalElevator: 48,

        totalApartment: 20000,
        totalOfficetel: 500,
        totalShophouse: 120,
        totalVilla: 180,
        totalTownHouse: 120,
        totalGround: 5,
        totalParkingLot: 7,
        juridical: "Hợp đồng mua bán",
        ownTime: "Lâu dài",
        numOfYearsWarranty: 10,
        managementFee: 8000,
        parkingBrikeFee: 120000,
        parkingCarFee: 1200000,
        advantagesProject: [
            { id: 1, name: "Đầy đủ nội thất", icon: "day-du-noi-that" },
            { id: 2, name: "Sổ hồng", icon: "so-hong" },
            { id: 3, name: "Dân cư hiện hữu", icon: "dan-cu-hien-huu" },
            { id: 4, name: "Thiết kế xanh", icon: "thiet-ke-xanh" },
            { id: 5, name: "Smarthome", icon: "smart-home" },
            { id: 6, name: "Gần trường học", icon: "gan-truong-hoc" },
            { id: 7, name: "Gần siêu thị", icon: "gan-sieu-thi" },
            { id: 8, name: "gần bệnh viện", icon: "gan-benh-vien" },
            { id: 9, name: "Trung tâm thành phố", icon: "trung-tam-thanh-pho" },
            { id: 10, name: "Giao thông thuận tiện", icon: "giao-thong-thuan-tien" }
        ],
        utilities: [
            { id: 1, type: 'school', name: 'Trường Mầm Non Quốc tế Phú An', distance: '100m' },
            { id: 2, type: 'school', name: 'Trường THCS và THPT Khai Minh', distance: '200m' },
            { id: 3, type: 'school', name: 'Trường THCS và THPT Lạc Hồng', distance: '300m' },
            { id: 4, type: 'school', name: 'Trường THCS và THPT Nam Việt', distance: '400m' },
            { id: 5, type: 'school', name: 'Trường THPT Nguyễn Thị Minh Khai', distance: '500m' },
            { id: 6, type: 'school', name: 'Trường THPT Bùi Thị Xuân', distance: '600m' },
            { id: 7, type: 'school', name: 'Trường THPT Văn Lang', distance: '700m' },
            { id: 8, type: 'school', name: 'Trường THPT Trưng Vương', distance: '800m' },
            { id: 9, type: 'school', name: 'Trường THPT Việt Anh', distance: '900m' },
            { id: 10, type: 'shopping', name: 'Siêu thị AEON', distance: '100m' },
            { id: 11, type: 'shopping', name: 'Siêu thị Coop-Mart', distance: '200m' },
            { id: 12, type: 'shopping', name: 'Siêu thị Lotte', distance: '300m' },
            { id: 13, type: 'hospital', name: 'Bệnh viện Hòa Hảo', distance: '300m' },
            { id: 14, type: 'hospital', name: 'Bệnh viện Hoàn Mỹ', distance: '300m' },
            { id: 15, type: 'hospital', name: 'Bệnh Viện Nhi Đồng', distance: '300m' },
            { id: 16, type: 'other', name: 'Bến Xe Miền Tây', distance: '900m' },
            { id: 17, type: 'other', name: 'Ga Sài Gòn', distance: '2km' },
            { id: 18, type: 'other', name: 'Bến Xa Quận 8', distance: '1km' },
        ],
        other: "",
        projectUnits: [
            { id: 1, name: "Tháp The Viber" },
            { id: 2, name: "Tháp The Wisdom" },
            { id: 3, name: "Tháp The Treasure" },
            { id: 4, name: "Tháp The Pearl" },
            { id: 5, name: "Tháp The Scene" },
            { id: 6, name: "Tháp The Feeling" }
        ],
        investorDocuments: [
            { id: 1, name: "Thông tin dự án", link: "/attachment/file1.pdf" },
            { id: 2, name: "Mặt bằng dự án", link: "/attachment/file2.pdf" },
            { id: 3, name: "Danh sách căn hộ", link: "/attachment/file3.pdf" },
            { id: 4, name: "Thông báo thay đổi thiết kế", link: "/attachment/file4.pdf" },
            { id: 5, name: "Thiết kế căn hộ", link: "/attachment/file1.pdf" },
            { id: 6, name: "Quy định mua nhà của người nước ngoài", link: "/attachment/file5.pdf" }
        ],
        internalUtilities: [
            { id: 1, name: "Trường học", icon: 'school' },
            { id: 2, name: "Bệnh viện", icon: 'hospital' },
            { id: 3, name: "Siêu thị/ Trung Tâm thương mại", icon: 'market' },
            { id: 4, name: "Nhà hàng/ Cafe", icon: 'restaurant' },
            { id: 5, name: "Ngân hàng/ ATM", icon: 'bank' },
            { id: 6, name: "Công viên", icon: 'car_parking' },
            { id: 7, name: "Hồ bơi", icon: 'pool' },
            { id: 8, name: "Gym", icon: 'gym' },
            { id: 9, name: "Phòng sinh hoạt cộng đồng", icon: 'community' },
            { id: 10, name: "Thẻ từ/ video call", icon: 'card' },
            { id: 11, name: "Bảo vệ 24/7", icon: 'restaurant' },
            { id: 12, name: "Thang máy", icon: 'bank' },
            { id: 13, name: "Bãi để ôtô", icon: 'car_parking' },
            { id: 14, name: "Bãi để xe máy", icon: 'moto_parking' },
        ],

        cooperationUnit: [
            { id: 1, role_name: "Đơn vị thiết kế", name: "Công ty cổ phần địa ốc Nam Đô" },
            { id: 2, role_name: "Đơn vị hợp tác đầu tư", name: "Công ty cổ phần địa ốc Nam Đô" },
            { id: 3, role_name: "Đơn vị thi công", name: "Công ty cổ phần địa ốc Nam Đô" },
            { id: 4, role_name: "Đơn vị quản lý và giám sát thi công", name: "Công ty cổ phần địa ốc Nam Đô" },
            { id: 5, role_name: "Đơn vị quản lý", name: "BQL Chung Cư" },
            { id: 6, role_name: "Ngân hàng bão lãnh", name: "Vietcombank" },
            { id: 7, role_name: "Ngân hàng hỗ trợ vay vốn", name: "Vietcombank" },
            { id: 8, role_name: "Ngân hàng hỗ trợ vay vốn", name: "Vietinbank" },
            { id: 9, role_name: "Ngân hàng hỗ trợ vay vốn", name: "ACB" },
            { id: 10, role_name: "Ngân hàng hỗ trợ vay vốn", name: "BIDV" },
            { id: 11, role_name: "Ngân hàng hỗ trợ vay vốn", name: "OCB" },
            { id: 12, role_name: "Ngân hàng hỗ trợ vay vốn", name: "HSBC" },
        ],

        investor: {
            name: "Công ty cổ phần địa ốc Nam Đô",
            type: "Trong nước",
            experience: 20,
            website: "https://novaland.vn",
            image: prod1
        },
        implemented_projects: "https://uploads.knightlab.com/storymapjs/d80d40e4be6f36d910a52ccb092da74c/winapp-test/draft.html",
        facilities: {
            interior: [
                {
                    id: "livingRoom", name: "Phòng khách", icon: "living-room",
                    data: [{id:1,name:"Sofa"}, {id:2,name:"Bàn sofa"}, {id:3,name:"Tủ giày dép"}, {id:4,name:"Bàn làm việc"}, {id:5,name:"Kệ sách"}, {id:6,name:"Máy lạnh"}, {id:7,name:"Bộ bàn ăn"}, {id:8,name:"Thiết bị âm thanh"}]
                },
                {
                    id: "pantry", name: "Phòng bếp", icon: "pantry",
                    data: [{id:1,name:"Kệ bếp trên"}, {id:2,name:"Kệ bếp dưới"}, {id:3,name:"Bếp"}, {id:4,name:"Máy hút mùi"}, {id:5,name:"Lò vi sóng"}]
                },
                {
                    id: "bedRoom", name: "Phòng ngủ", icon: "bed-room",
                    data: [{id:1,name:"Giường ngủ"}, {id:2,name:"Tủ quần áo"}, {id:3,name:"Gối/ nệm"}, {id:4,name:"Bàn trang điểm"}]
                },
                {
                    id: "bathRoom", name: "Phòng tắm", icon: "bath-room",
                    data: [{id:1,name:"Toilet"}, {id:2,name:"Lavabo"}, {id:3,name:"Bồn tắm nằm"}, {id:4,name:"Bồm tắm đứng"}, {id:5,name:"Máy nước nóng"}]
                },
                
            ],
            internalUtilities: [
                { id: 1, name: "Trường học", icon: 'school' },
                { id: 2, name: "Bệnh viện", icon: 'hospital' },
                { id: 3, name: "Siêu thị/ Trung Tâm thương mại", icon: 'market' },
                { id: 4, name: "Nhà hàng/ Cafe", icon: 'restaurant' },
                { id: 5, name: "Ngân hàng/ ATM", icon: 'bank' },
                { id: 6, name: "Công viên", icon: 'car_parking' },
                { id: 7, name: "Hồ bơi", icon: 'pool' },
                { id: 8, name: "Gym", icon: 'gym' },
                { id: 9, name: "Phòng sinh hoạt cộng đồng", icon: 'community' },
                { id: 10, name: "Thẻ từ/ video call", icon: 'card' },
                { id: 11, name: "Bảo vệ 24/7", icon: 'restaurant' },
                { id: 12, name: "Thang máy", icon: 'bank' },
                { id: 13, name: "Bãi để ôtô", icon: 'car_parking' },
                { id: 14, name: "Bãi để xe máy", icon: 'moto_parking' },
            ]
        },

        publicDate: "15-06-2019",
        totalView: 450,
        totalLike: 59,
        codeProject: "A1245464"
    }
];


const projectSummary =
{
    id: 1,
    groundImagesPU: apartment,
    typePU: "Căn hộ",
    total: "200",
    priceFrom: 50,
    priceTo: 65,
    totalBedroom: 1,
    totalBathroom: 1,
    carpetArea: 45,
    builtUpArea: 42,
};

export const ProjectUnit = {
    id: 1,
    type: APPARTMENT,
    images: prod7,
    projectUnitNm: "Tháp The Viber",
    status: "Sắp mở bán",
    keepingFee: 200,
    totalBasement: 4,
    totalFloor: 24,
    totalLift: 12,
    totalParking: 5,
    totalApartment: 1200,
    totalOfficetel: 450,
    totalShophouse: 80,
    salesDate: "12-2019",
    handoverDate: "03-2021",

    projectSummaries: [
        { ...projectSummary, typePU: "Căn hộ", priceFrom: 38 },
        { ...projectSummary, typePU: "Officetel", groundImagesPU: officetel, totalBedroom: 2, totalBathroom: 3, carpetArea: 85, builtUpArea: 78 },
        { ...projectSummary, typePU: "Shophouse", groundImagesPU: shophouse, totalBedroom: 2, totalBathroom: 2, carpetArea: 120, builtUpArea: 110 }
    ],

    acreage: "null",
    realAcreage: "null",
    totalAcreage: "null",
    buildingLine: "null"
}
    ;

export const ProjectUnits = [
    //can ho
    { ...ProjectUnit, projectUnitNm: "Tháp The Viber", status: "Đang bán", totalApartment: 890 },
    { ...ProjectUnit, projectUnitNm: "Tháp Wisdom", status: "Đã bàn giao", salesDate: "12-2017", handoverDate: "03-2019" },
    { ...ProjectUnit, projectUnitNm: "Tháp Tresure", status: "Đang bán" },
    { ...ProjectUnit, projectUnitNm: "Tháp Pearl", totalApartment: 970, handoverDate: "09-2021" },
    { ...ProjectUnit, projectUnitNm: "Tháp Feeling", totalApartment: 1500, handoverDate: "3-2023" },
    //nha pho
    { ...ProjectUnit, type: HOUSE, projectUnitNm: "Tiểu Khu A", images: house, totalOfficetel: "null", totalLift: "null", totalParking: "null", totalBedroom: "null", totalBathroom: "null", carpetArea: "null", builtUpArea: "null", buildingLine: "null" },
    { ...ProjectUnit, type: HOUSE, projectUnitNm: "Tiểu Khu B", images: house, totalOfficetel: "null", totalLift: "null", totalParking: "null", totalBedroom: "null", totalBathroom: "null", carpetArea: "null", builtUpArea: "null", buildingLine: "null" },
    { ...ProjectUnit, type: HOUSE, projectUnitNm: "Tiểu Khu C", images: house, totalOfficetel: "null", totalLift: "null", totalParking: "null", totalBedroom: "null", totalBathroom: "null", carpetArea: "null", builtUpArea: "null", buildingLine: "null" },
    //dat nen
    { ...ProjectUnit, type: LAND, projectUnitNm: "Đất vườn lài" },
    { ...ProjectUnit, type: LAND, projectUnitNm: "An Phú Đông" },
    //biet thu
    { ...ProjectUnit, type: VILLA, projectUnitNm: "Đất vườn lài" },
    { ...ProjectUnit, type: VILLA, projectUnitNm: "An Phú Đông" }
];