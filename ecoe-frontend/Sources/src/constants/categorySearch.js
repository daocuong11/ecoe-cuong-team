
export const NEWEST = "NEWEST";
export const LIKE = "LIKE";
export const HIGHLIGHT = "HIGHLIGHT";
export const BO_HIGHLIGHT = "BO_HIGHLIGHT";
export const FO_HIGHLIGHT = "FO_HIGHLIGHT";
export const ECOE = "ECOE";
export const HOT_AREA = "HOT_AREA";
export const YOUR = "YOUR";
export const VIEWED = "VIEWED";
export const FO_VIEWED = "FO_VIEWED";
export const HIDED = "HIDED";
export const OTHER = "OTHER";

export const FURNIED = "FURNIED";
export const RIVER_VIEW = "RIVER_VIEW";
export const DOWN_TOWN = "DOWN_TOWN";
export const NEARS_CHOOL = "NEARS_CHOOL";

export const getCategoryName = function (key) {
    switch (key) {
        case NEWEST:
            return "Mới Nhất";
            break;
        case LIKE:
            return "Danh Sách Yêu Thích";
            break;
        case HIGHLIGHT:
            return "Nổi Bật";
            break;
        case BO_HIGHLIGHT:
            return "Nổi Bật";
            break;
        case FO_HIGHLIGHT:
            return "Nổi Bật";
            break;
        case ECOE:
            return "Từ ECOE";
            break;
        case HOT_AREA:
            return "Khu Vực Sôi Động";
            break;
        case YOUR:
            return "Dành Cho Bạn";
            break;
        case VIEWED:
            return "Xem Gần Đây";
            break;
        case FO_VIEWED:
            return "Xem Gần Đây";
            break;

        case HIDED:
            return "Đã Ẩn";
            break;
        case OTHER:
            return "Sản Phẩm Khác";
            break;

        case FURNIED:
            return "Nội Thất Có Sẵn";
            break;
        case RIVER_VIEW:
            return "View Sông";
            break;
        case DOWN_TOWN:
            return "Vị Trí Trung Tâm";
            break;
        case NEARS_CHOOL:
            return "Gần Trường Học";
            break;

        default: return "Danh Sách Tìm Kiếm"
    }

};