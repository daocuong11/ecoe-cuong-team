import React, {Component} from "react";
import {MgLeft} from "./Wrapper";
import ProductStatus from "globalComponents/ProductStatus";
class SortMode extends Component {
    
    render() {
        const ListSort1 = [
            {
                key: "DESC",
                name: "Giá: Giảm dần",
                value: true
            },
            {
                key: "ASC",
                name: "Giá: Tăng dần",
                value: false
            }
        ];

        const ListSort2 = [
            {
                key: "NEW",
                name: "Mới - cũ",
                value: true
            },
            {
                key: "OLD",
                name: "Cũ - mới",
                value: false
            },
            {
                key: "COMMISSION_DESC",
                name: "Hoa hồng: giảm dần",
                value: false
            },
            {
                key: "COMMISSION_ASC",
                name: "Hoa hồng: tăng dần",
                value: false
            },
            {
                key: "PRICE_DESC",
                name: "Giá: giảm dần",
                value: false
            },
            {
                key: "PRICE_ASC",
                name: "Giá: tăng dần",
                value: false
            },
        ];

        const ListSort3 = [{
                key: "DESC",
                name: "Giá: Giảm dần",
                value: true
            },
            {
                key: "ASC",
                name: "Giá: Tăng dần",
                value: false
            },
            {
                key: "AZ",
                name: "A-Z",
                value: false
            }
        ];

        const ListSort4 = [
            {
                key: "NEW",
                name: "Mới - cũ",
                value: true
            },
            {
                key: "OLD",
                name: "Cũ - mới",
                value: false
            },
            {
                key: "PRICE_DESC",
                name: "Giá: giảm dần",
                value: false
            },
            {
                key: "PRICE_ASC",
                name: "Giá: tăng dần",
                value: false
            },
        ];

        let props = this.props;
        let productStatus = '';
        switch (props.type) {
            case 1:
                productStatus =  <ProductStatus label="Sort" titleSort="Xếp theo" productStatusList={ListSort1} TypeDropdown={2} />
                break;
            case 2:
                productStatus =  <ProductStatus label="Sort" titleSort="Giá - Hoa Hồng - Thời Gian" productStatusList={ListSort2} TypeDropdown={2} />
                break;
            case 3:
                productStatus =  <ProductStatus label="Sort" titleSort="Xếp theo" productStatusList={ListSort3} TypeDropdown={2} />
                break;
            case 4:
                productStatus = <ProductStatus label="Sort" titleSort="Giá - Hoa Hồng - Thời Gian" productStatusList={ListSort4} TypeDropdown={2} />
                break;
            default:
                break;
        }
        return (
            <MgLeft>
                {productStatus}
            </MgLeft>
        )
    }
}

export default SortMode;