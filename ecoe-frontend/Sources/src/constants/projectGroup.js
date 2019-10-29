
export const ThongSo = [
    { key: "totalTower", name: "Tháp/block", value: 0 },
    { key: "totalFloor", name: "Số tầng", value: 0 },
    { key: "totalGround", name: "Tầng hầm", value: 0 },
    { key: "totalParkingLot", name: "Tầng giữ xe", value: 0 },
    { key: "totalApartment", name: "Căn hộ", value: 0 },
    { key: "totalOfficetel", name: "Officetel", value: 0 },
    { key: "totalShophouse", name: "Shophouse", value: 0 },
    { key: "totalElevator", name: "Thang máy", value: 0 },
    { key: "numOfYearsWarranty", name: "Bảo hành", value: 0 }
]

export const PhiThue = [
    { key: "managementFee", name: "Phí quản lý (m2/tháng)", value: 0 },
    { key: "parkingBrikeFee", name: "Phí gửi xe (chiếc/tháng)", value: 0 },
    { key: "treeDensity", name: "Phí sang tên/chuyển nhượng", value: 0 },
    { key: "keepingFee", name: "Phí giữ chỗ", value: 0 }
]

export const PhapLy = [
    { key: "juridical", name: "Loại chủ quyền sở hữu", value: 0 },
    { key: "ownTime", name: "Số năm sở hữu", value: 0 }
]

export const coverObjectToArray = (objSource, arrDest) => {
    let results = [];
    var keys = Object.keys(objSource);
    keys.forEach(key => {
        arrDest.forEach(item => {
            if (item.key === key) {
                item.value = objSource[key]
                results.push(item);
            }
        })
    });

    return results;
}

