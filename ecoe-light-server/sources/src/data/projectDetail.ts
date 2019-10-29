const projectSummary =
{
    id: 1,
    groundImages: "https://picity.com.vn/assets/images/home-page/KhuVuiChoiTreEm.jpg",
    estateType: "Căn hộ",
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
    type: "APPARTMENT",
    images: "https://picity.com.vn/assets/images/home-page/KhuVuiChoiTreEm.jpg",
    projectUnitNm: "Tháp The Viber",
    status: "Sắp mở bán",
    keepingFee: 200,
    totalBasement: 4,
    totalFloor: 24,
    totalElevator: 12,
    totalParking: 5,
    totalApartment: 1200,
    totalOfficetel: 450,
    totalShophouse: 80,
    startDate: "12-2019",
    endDate: "03-2021",

    projectSummaries: [
        { ...projectSummary, id: 1, estateType: "Căn hộ", priceFrom: 38 },
        { ...projectSummary, id: 2, estateType: "Officetel", groundImages: "https://picity.com.vn/assets/images/home-page/KhuVuiChoiTreEm.jpg", totalBedroom: 2, totalBathroom: 3, carpetArea: 85, builtUpArea: 78 },
        { ...projectSummary, id: 3, estateType: "Shophouse", groundImages: "https://picity.com.vn/assets/images/home-page/KhuVuiChoiTreEm.jpg", totalBedroom: 2, totalBathroom: 2, carpetArea: 120, builtUpArea: 110 }
    ],

    acreage: null,
    realAcreage: null,
    totalAcreage: null,
    buildingLine: null
};

export const ProjectUnits = [
    //can ho
    { ...ProjectUnit, id: 1, projectUnitNm: "Tháp The Viber", status: "Đang bán", totalApartment: 890 },
    { ...ProjectUnit, id: 2,projectUnitNm: "Tháp Wisdom", status: "Đã bàn giao", salesDate: "12-2017", handoverDate: "03-2019" },
    { ...ProjectUnit, id: 3,projectUnitNm: "Tháp Tresure", status: "Đang bán" },
    { ...ProjectUnit, id: 4,projectUnitNm: "Tháp Pearl", totalApartment: 970, handoverDate: "09-2021" },
    { ...ProjectUnit, id: 5,projectUnitNm: "Tháp Feeling", totalApartment: 1500, handoverDate: "3-2023" },
    //nha pho
    { ...ProjectUnit, id: 7, type: "HOUSE", projectUnitNm: "Tiểu Khu A", images: "https://picity.com.vn/assets/images/home-page/KhuVuiChoiTreEm.jpg", totalOfficetel: null, totalLift: null, totalParking: null, totalBedroom: null, totalBathroom: null, carpetArea: null, builtUpArea: null, buildingLine: null },
    { ...ProjectUnit, id: 8,type: "HOUSE", projectUnitNm: "Tiểu Khu B", images: "https://picity.com.vn/assets/images/home-page/KhuVuiChoiTreEm.jpg", totalOfficetel: null, totalLift: null, totalParking: null, totalBedroom: null, totalBathroom: null, carpetArea: null, builtUpArea: null, buildingLine: null },
    { ...ProjectUnit, id: 9,type: "HOUSE", projectUnitNm: "Tiểu Khu C", images: "https://picity.com.vn/assets/images/home-page/KhuVuiChoiTreEm.jpg", totalOfficetel: null, totalLift: null, totalParking: null, totalBedroom: null, totalBathroom: null, carpetArea: null, builtUpArea: null, buildingLine: null },
    //dat nen
    { ...ProjectUnit, id: 10,type: "LAND", projectUnitNm: "Đất vườn lài" },
    { ...ProjectUnit, id: 11,type: "LAND", projectUnitNm: "An Phú Đông" },
    //biet thu
    { ...ProjectUnit, id: 12,type: "VILLA", projectUnitNm: "Đất vườn lài" },
    { ...ProjectUnit, id: 13,type: "VILLA", projectUnitNm: "An Phú Đông" }
];

export const projectDetail = [
    {
        id: 1,
        productType: "PROJECT",
        /* PROJECT */
        name: 'PiCity Thạnh Xuân',
        investFun : 12000,//Tổng số vốn đầu tư
        totalArea: 2500, //Tổng diện tích
        investorNm: "Himlam land", //Chủ đầu tư
        treeDensity: 70, //Mật độ cây xanh
        builtDensity: 30, //Mật dộ xây dựng
        startDate: "06-2020",
        endDate: "12-2025",      
        fromPrice: 2500000000, //Giá từ
        toPrice: 13000000000, //Giá đến
        commission:  "1.5-3.0", //Hoa hồng 
        /* end PROJECT */
        /* HOUSE */
        firstOrientation:"Đông Bắc", //Hướng cửa chính
        secondOrientation: "Tây", //Hướng ban công
        floorNumber: 1, //Số tầng 
        block:" Thap 1",
        highCeilings: 3,
        unitName: "",
        area: 75, //Diện tích
        lenght: 14, //Chiều dài
        width: 3,// Chiều rộng
        numBedRoom: 2,//Số phòng ngủ
        numBathRoom: 2, //Số phòng tắm
        haveMezzanine: false, //Có tầng lửng
        haveBasement: false, //Có tầng hầm
        /*end HOUSE*/
        address: "Lê thị riêng",
        city: "Hồ chí minh",
        district: "Quận 12",
        ward: "Phường An phú đông", 
        estateType: "Căn hộ/ Biệt thự/ Đất nền",//Loại hình
        juridical: "Hợp đồng mua bán", //Pháp lý
        status: "Sắp mở bán",
        deliveryStatus: "",
        ownTime: "Lâu dài",       
        
        
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
        
        numOfYearsWarranty: 10,
        managementFee: 8000,
        maintenanceFee: 120000, //Phí bảo hành
        parkingFee: 20000,//Phí giữ xe
        tranferFee: 200, //Phí chuyển nhượng
        keepingFee: 200, //Phí đặt chỗ
        media: [
            {
                key: 'generalImages',
                name: 'Tổng Quan',
                type: 'image',
                data: [
                    { thumb: "https://picity.com.vn/assets/images/home-page/KhuVuiChoiTreEm.jpg", src: "https://picity.com.vn/assets/images/home-page/KhuVuiChoiTreEm.jpg", alt: "Khu vui chơi trẻ em" },
                    { thumb: "https://picity.com.vn/assets/images/home-page/TrungTamThuongMai.jpg", src: "assets/images/home-page/TrungTamThuongMai.jpg", alt: "Trung tâm thương mại" },
                    { thumb: "https://picity.com.vn/assets/images/home-page/CongAnNinh.jpg", src: "https://picity.com.vn/assets/images/home-page/CongAnNinh.jpg", alt: "Hồ bơi tràn bờ ngắm cảnh" },
                    { thumb: "https://picity.com.vn/assets/images/home-page/HoBoiTreEm.jpg", src: "https://picity.com.vn/assets/images/home-page/HoBoiTreEm.jpg", alt: "Khu vui chơi trẻ em" },
                ]
            },
            {
                key: 'floorPlanImages',
                name: 'Mặt bằng',
                type: 'image',
                data: [
                    { thumb: "https://picity.com.vn/assets/images/home-page/KhuVuonCo.jpg", src: "https://picity.com.vn/assets/images/home-page/KhuVuonCo.jpg", alt: "Khu vui chơi trẻ em" },
                    { thumb: "https://picity.com.vn/assets/images/home-page/KhuBBQNgoaiTroi.jpg", src: "https://picity.com.vn/assets/images/home-page/KhuBBQNgoaiTroi.jpg", alt: "Trung tâm thương mại" },
                    { thumb: "https://picity.com.vn/assets/images/home-page/KhuHoBoi.jpg", src: "https://picity.com.vn/assets/images/home-page/KhuHoBoi.jpg", alt: "Hồ bơi tràn bờ ngắm cảnh" }
                ]
            },
            {
                key: 'houseImages',
                name: 'Nhà mẫu',
                type: 'image',
                data: [
                    { thumb: "https://picity.com.vn/assets/images/home-page/VongXoayTrungTam.jpg", src: "https://picity.com.vn/assets/images/home-page/VongXoayTrungTam.jpg", alt: "Khu vui chơi trẻ em" },
                    { thumb: "https://picity.com.vn/assets/images/home-page/BaiCoThienNhien.jpg", src: "https://picity.com.vn/assets/images/home-page/BaiCoThienNhien.jpg", alt: "Trung tâm thương mại" },
                ],
            },
            {
                key: 'positionImages',
                name: 'Vị trí',
                type: 'image',
                data: [
                    { thumb: "https://picity.com.vn/assets/images/home-page/SanTamDaChucNang.jpg", src: "https://picity.com.vn/assets/images/home-page/SanTamDaChucNang.jpg", alt: "Khu vui chơi trẻ em" },
                ]
            },
            {
                key: 'link360',
                name: '360',
                type: 'url',
                data: [{ thumb: '',src:'https://my.matterport.com/show/?m=ni84LJLKMxD&play=1&mls=1&title=1', alt:''}]
            },
            {
                key: 'youTubeLink',
                name: 'Video',
                type: 'url',
                data: [{ thumb: '',src:'', alt:''}]
            },
            {
                key: 'streetView',
                name: 'streetView',
                type: 'url',
                data: [{ thumb: '',src:'', alt:''}]
            },
            {
                key: 'link3D',
                name: 'link3D',
                type: 'url',
                data: [{ thumb: '',src:'', alt:''}]
            },
        ],

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
        investorDocuments: [
            { id: 1, name: "Thông tin dự án", url: "/attachment/file1.pdf" },
            { id: 2, name: "Mặt bằng dự án", url: "/attachment/file2.pdf" },
            { id: 3, name: "Danh sách căn hộ", url: "/attachment/file3.pdf" },
            { id: 4, name: "Thông báo thay đổi thiết kế", url: "/attachment/file4.pdf" },
            { id: 5, name: "Thiết kế căn hộ", url: "/attachment/file1.pdf" },
            { id: 6, name: "Quy định mua nhà của người nước ngoài", url: "/attachment/file5.pdf" }
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
            image: "https://picity.com.vn/assets/images/home-page/KhuVuiChoiTreEm.jpg"
        },
        implemented_projects: "https://uploads.knightlab.com/storymapjs/d80d40e4be6f36d910a52ccb092da74c/winapp-test/draft.html",
        facilities: {
            interior: [
                {
                    id: 1, name: "Phòng khách", icon: "living-room",
                    data: [{id:1,name:"Sofa"}, {id:2,name:"Bàn sofa"}, {id:3,name:"Tủ giày dép"}, {id:4,name:"Bàn làm việc"}, {id:5,name:"Kệ sách"}, {id:6,name:"Máy lạnh"}, {id:7,name:"Bộ bàn ăn"}, {id:8,name:"Thiết bị âm thanh"}]
                },
                {
                    id: 2, name: "Phòng bếp", icon: "pantry",
                    data: [{id:1,name:"Kệ bếp trên"}, {id:2,name:"Kệ bếp dưới"}, {id:3,name:"Bếp"}, {id:4,name:"Máy hút mùi"}, {id:5,name:"Lò vi sóng"}]
                },
                {
                    id: 3, name: "Phòng ngủ", icon: "bed-room",
                    data: [{id:1,name:"Giường ngủ"}, {id:2,name:"Tủ quần áo"}, {id:3,name:"Gối/ nệm"}, {id:4,name:"Bàn trang điểm"}]
                },
                {
                    id: 4, name: "Phòng tắm", icon: "bath-room",
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
        codeProject: "A1245464",
        projectUnits: ProjectUnits
    },
];

