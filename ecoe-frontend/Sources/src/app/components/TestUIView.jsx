import React from "react";
import UIView from "./UIView";


import Button from "./elements/Button";
import A from "./elements/A";
import CheckBox from "./elements/CheckBox";
import Avatar from "./comp-libs/globals/Avatars/Avatar";
import Avatars from "./comp-libs/globals/Avatars";
import Table from "./comp-libs/globals/Table";

import { listUtility } from "../../constants/dataTest";
import { ProductList } from "../../constants/arrayProduct";
import Buttons from "./elements/Buttons";

import Tag from "./elements/Tag";
import RButtonCard from "./comp-libs/globals/Buttons/RButtonCard";
import LButtonCard from "./comp-libs/globals/Buttons/LButtonCard";
import RightFooterCard from "./comp-libs/globals/Card/RightFooterCard";
import LeftFooterCard from "./comp-libs/globals/Card/LeftFooterCard";
import UtilitiesCard from "./comp-libs/globals/Card/UtilitiesCard";
import BrokerAvatar from "./comp-libs/globals/Card/BrokerAvatar";

import { SD_BO, SD_FO } from "constants/domainType";
import FinanceCard from "./comp-libs/globals/Card/FinanceCard";
import FooterCard from "./comp-libs/globals/Card/FooterCard";
import Card from "./comp-libs/globals/Card";
import CardHide from "./comp-libs/globals/Card/CardHide"
import GridCard from "globalComponents/GridCard";
import Notifications from "./comp-libs/globals/Notification";

//import Tab from "./comp-libs/globals/TabPanel/Tab";
import TabPanel from "./comp-libs/globals/TabPanel";
import Popup from 'reactjs-popup';
import FilterItem from "./comp-libs/globals/ProductSearch/FilterSearchContainer/FilterItem";
import FilterSearchContainer from "./comp-libs/globals/ProductSearch/FilterSearchContainer";
import ContainerSearchBorder from "./comp-libs/globals/ProductSearch/ContainerSearchBorder";
//import ListingSearch from "./comp-libs/globals/ProductSearch/ListingSearch";
import TypeSearch from "./comp-libs/globals/ProductSearch/CommonSearch/TypeSearch";
import { VillaIcon, Interior, Riverside } from "./elements/Icon";

import ProductSearch from "./comp-libs/globals/ProductSearch";
import Dropdown from "./elements/Dropdown";
import ProductStatus from "globalComponents/ProductStatus";
import { PRODUCT_STATUS } from "globalConstants/productStatus";
import Logo from "./elements/Logo";
import ButtonCall from "./elements/ButtonCall";
import Highlight from "./elements/Highlight";
import ProductActionBar from "./comp-libs/globals/Card/ProductActionBar";
import HighlightCard from "./comp-libs/globals/HighlightCard";
import HotArea from "./comp-libs/globals/HotArea";
import IconViewSong from 'images/icons/view-song.svg';
import IconQuan2 from 'images/icons/hotarea/district2.svg';
import IconQuan12 from 'images/icons/hotarea/district12.svg';
import Favorite from "./elements/Favorite";
import GridCardRPF from "./comp-libs/globals/GridCardRPF";
import { ACT_EDIT, ACT_COMPARISONS } from "constants/labelActionForCard";

import I1 from 'images/Avatars/1.jpg';
import I2 from 'images/Avatars/2.jpg';
import I3 from 'images/Avatars/3.png';
import I4 from 'images/Avatars/4.jpg';
import I5 from 'images/Avatars/5.png';
import CommonSearch from "./comp-libs/globals/ProductSearch/CommonSearch";
import ProjectTypeSearch from "./comp-libs/globals/ProductSearch/CommonSearch/ProjectTypeSearch";

import RangeSelect from "./comp-libs/globals/RangeSelect";
import ButtonSubdomain from "./elements/Buttons/ButtonSubdomain";
import AvatarRows from "./comp-libs/globals/Avatars/AvatarRows";
import AddHighlight from "./comp-libs/back-office/AddHighlight";
import Toggles from "./comp-libs/globals/Toggles";
import TagBroker from "./comp-libs/globals/TagBroker";
import ButtonFavorite from "./elements/Buttons/ButtonFavorite";
import ButtonFilterMobile from "./elements/Buttons/ButtonFilterMobile";
import ButtonMapMobile from "./elements/Buttons/ButtonMapMobile";
import MapFilterSelection from "./elements/Buttons/MapFilterSelection";
//import RangeSelectDB from "./comp-libs/globals/RangeSelect/RangeSelectDB";

const arrayBroker = [
    {
        brokerName: "TA",
        brokerAvatar: I1
    },
    {
        brokerName: 'QT',
        brokerAvatar: ""
    },
    {
        brokerName: "ML",
        brokerAvatar: I2
    },
    {
        brokerName: "AO",
        brokerAvatar: I3
    },
    {
        brokerName: "PA",
        brokerAvatar: ""
    },
    {
        brokerName: "KA",
        brokerAvatar: ""
    },
    {
        brokerName: "TA",
        brokerAvatar: I4
    },
    {
        brokerName: "KU",
        brokerAvatar: I5
    },
    {
        brokerName: "NH",
        brokerAvatar: I2
    }
];

const ProjectStatus = [
    {
        key: "SMB",
        name: PRODUCT_STATUS.SMB,
        value: false
    },

    {
        key: "DMB",
        name: PRODUCT_STATUS.DMB,
        value: true
    },

    {
        key: "DBG",
        name: PRODUCT_STATUS.DBG,
        value: false
    }
];
const LandStatus = [
    {
        key: "DgB",
        name: PRODUCT_STATUS.DgB,
        value: true
    },
    {
        key: "DB",
        name: PRODUCT_STATUS.DB,
        value: false
    }
];

const ListSort = [
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
const apartmentList = [
    {
        id: 1,
        name: "canho",
        label: "Căn hộ",
        value: false
    },
    {
        id: 2,
        name: "chungcu",
        label: "Chung cư",
        value: false
    },
    {
        id: 3,
        name: "shophouse",
        label: "Shophouse",
        value: false
    },
    {
        id: 4,
        name: "penhouse",
        label: "Penhouse",
        value: false
    },
    {
        id: 5,
        name: "officetel",
        label: "Officetel",
        value: false
    },
];

const handleClick = () => {
    alert('It works!')
}

const updateCheckbox = (key, value) => {

}

const TestUIView = (props) => {
    let components = [
        {
            id: 1,
            component: (<Button>Button 1</Button>),
            discription: "This is button 1"
        },
        {
            id: 2,
            component: (<Button>Button 2</Button>),
            discription: "This is button 2"
        },
        {
            id: 3,
            component: (<A>This is A </A>),
            discription: "A"
        },
        {
            id: 4,
            component: (
                <React.Fragment>
                    <Avatar size={64} broker={arrayBroker[1]} />
                    <Avatar size={64} />
                </React.Fragment>
            ),
            discription: "This is User Avatar size 64x64"
        },
        {
            id: 5,
            component: (<Avatars viewType="overlap" size={32} arrayBroker={arrayBroker} />),
            discription: "This is User Group's Avatar size 32x32. Type: true loại 1 dòng"
        },
        {
            id: 6,
            component: (<Avatars size={64} numberItem={7} arrayBroker={arrayBroker} />),
            discription: "This is User Group's Avatar size 32x32. Type: true loại nhiều dòng"
        },
        {
            id: 7,
            component: (<Table size={10} list={listUtility} />),
            discription: "This is Table size width 10/12"
        },
        {
            id: 8,
            component: (<Buttons type="0" label="Nhận bán" onClick={handleClick} />),
            discription: "8. This is button type background color"
        },
        {
            id: 9,
            component: (<Buttons type="1" label="Hủy nhận bán" onClick={() => alert('It works!')} />),
            discription: "This is button type boder color"
        },
        {
            id: 10,
            component: (<Tag tagStyle={1} text="Đang mở bán" />),
            discription: "This is Tag "
        },
        {
            id: 11,
            component: (<Tag tagStyle={0} text="Đã bán" />),
            discription: "This is Tag "
        },
        {
            id: 12,
            component: (<RButtonCard type="1" label={ACT_COMPARISONS} onClick={() => alert('It works!')}></RButtonCard>),
            discription: "This is Right Button Card"
        },
        {
            id: 13,
            component: (<LButtonCard label={ACT_EDIT} onClick={() => alert('It works!')}></LButtonCard>),
            discription: "This is Left Button Card"
        },
        {
            id: 14,
            component: (<RightFooterCard product={ProductList[0]} domainType={SD_BO} />),
            discription: "14. This is Right Button Card Group"
        },
        {
            id: 15,
            component: (<LeftFooterCard product={ProductList[0]} />),
            discription: "This is Right Button Card Group"
        },
        {
            id: 16,
            component: (<LeftFooterCard product={ProductList[8]} domainType={SD_FO} />),
            discription: "This is Left Footer Card for FrontOffice's Project"
        },
        {
            id: 17,
            component: (<UtilitiesCard utilities={ProductList[0].utilities} product={ProductList[0]} domainType={SD_FO} />),
            discription: "17. This is Utilities Card"
        },
        {
            id: 18,
            component: (<BrokerAvatar size={25} broker={ProductList[0].broker} />),
            discription: "This is Broker Avatar"
        },
        {
            id: 18.2,
            component: (<Logo />),
            discription: "This is Show Logo Investor"
        },
        {
            id: 19,
            component: (<FinanceCard product={ProductList[0]} domainType={SD_FO} />),
            discription: "This is Utilities Card"
        },
        {
            id: 20,
            component: (<FooterCard product={ProductList[1]} domainType={SD_FO} />),
            discription: "This is FO Footer Card"
        },
        {
            id: 21,
            component: (<Card product={ProductList[0]} domainType={SD_FO} />),
            discription: "21. This is FO Footer Card"
        },
        {
            id: 211,
            component: (<CardHide product={ProductList[2]} domainType={SD_BO} />),
            discription: "211. This is BO Product Card hidden"
        },
        {
            id: 22,
            component: (<Notifications num={6}></Notifications>),
            discription: "This is Notification Component"
        },
        {
            id: 23,
            component: (<Card product={ProductList[1]} domainType={SD_BO} />),
            discription: "23. This is BO Project Card"
        },
        {
            id: 23.1,
            component: (<Card product={ProductList[8]} domainType={SD_BO} />),
            discription: "23.1. This is BO My Home Card"
        },
        {
            id: 23.2,
            component: (<Card product={ProductList[4]} viewType={1} />),
            discription: "23.2. This is FO My Home Card"
        },
        {
            id: 24,
            component: (
                // <TabPanel style={{ minHeight: '200px', width: '100%', background: '#fefefe'}}>
                //     <div tabtext="First">
                //     Content for the first panel
                //     </div>
                //     <div tabtext="Second">
                //     ... and the second panel
                //     </div>
                // </TabPanel>
                <div></div>
            ),
            discription: "24. Test"
        },
        {
            id: 25,
            component: (
                <Popup trigger={<button>Popup</button>} position="bottom left">
                    {close => (
                        <div style={{ height: "500px", width: "100%", }}>
                            <div className="TestClass">

                                <FilterSearchContainer items={apartmentList} />

                            </div>
                            <a className="close" onClick={close}>&times;</a>
                        </div>
                    )}
                </Popup>
            ),
            discription: "25. Test"
        },
        {
            id: 26,
            component: (<FilterItem name="dist1" label="Quận 1" />),
            discription: "This is FO Footer Card"
        },
        {
            id: 27,
            component: (<FilterSearchContainer items={apartmentList} />),
            discription: "This is Filter Search Container"
        },
        // {
        //     id: 28,
        //     component:( <ContainerSearchBorder type={1} name="Nhà đất"/> ),
        //     discription : "This is Dropdown special type"
        // },
        // {
        //     id: 29,
        //     component:( <ContainerSearchBorder type={0} name="Loại hình"/> ),
        //     discription : "29. This is Dropdown normal type"
        // },
        // {
        //     id: 30,
        //     component:( <ListingSearch></ListingSearch> ),
        //     discription : "This is Dropdown normal type"
        // }
        //,
        {
            id: 31,
            component: (
                <CheckBox
                    name="Check Box"
                    value={true}
                    updateCheckbox={(key, value) => { }}
                />
            ),
            discription: "This is Dropdown normal type"
        },
        {
            id: 32,
            component: (<ProjectTypeSearch />),
            discription: ("This is type search")
        },
        {
            id: 32 - 1,
            component: (<CommonSearch />),
            discription: ("This is area search")
        },
        {
            id: 33,
            component: (
                <React.Fragment>
                    <VillaIcon width={48} type={1} />
                    <Interior width={148} type={2} fill="#f00" />
                    <Riverside width={48} height={60} type={2} fill="#ccc" />

                </React.Fragment>
            ),


            discription: ("33. This is Icon")
        },
        // {
        //     id: 34,
        //     component: (<ProductSearch
        //         TypeSearch = "land"
        //         isResultPage = {false}
        //         isFreeze = {false} />),
        //     discription : ( "This is Product Search" )
        // },
        {
            id: 35,
            component: (<ProductStatus label={PRODUCT_STATUS.DMB} productStatusList={ProjectStatus} TypeDropdown={1} />),
            discription: ("This is change status Product Card")
        },
        {
            id: 36,
            component: (<ProductStatus label={PRODUCT_STATUS.DgB} productStatusList={LandStatus} TypeDropdown={1} />),
            discription: ("This is change status Product Card")
        },
        {
            id: 37,
            component: (<ProductStatus label="Sort" titleSort="Xếp theo" productStatusList={ListSort} TypeDropdown={2} />),
            discription: ("This is select Sort")
        },
        {
            id: 38,
            component: (
                <React.Fragment>
                    <ButtonCall hotline="0123456789" />
                    <Favorite width={64} onClick={handleClick} />
                </React.Fragment>
            ),
            discription: ("This is Button Call")
        },
        {
            id: 39,
            component: (<Highlight />),
            discription: ("This is Highlight label")
        },
        {
            id: 40,
            component: (<ProductActionBar />),
            discription: ("This is ProductActionBar")
        },
        {
            id: 41,
            component: (<HighlightCard label="View sông" number="242 dự án" image="" icon={IconViewSong} />),
            discription: ("41. This is Highlight Products")
        },
        {
            id: 41.1,
            component: (
                <React.Fragment>
                    <HotArea label="Quận 2" subLabel="3020 căn" icon={IconQuan2} header={true} />
                    <HotArea label="Quận 12" subLabel="1082 căn" icon={IconQuan12} />
                </React.Fragment>),
            discription: ("This is Hot Area")
        },
        {
            id: 42,
            component: (
                <React.Fragment>
                    <GridCardRPF render={searchCritical => <GridCard products={searchCritical}
                        productType="Project"
                        domainType={SD_BO}
                        typeGrid={1}
                        title="Ket qua"
                        readMore={() => { }}
                        onClick={() => { }}
                        isEnable={true}
                    >
                    </GridCard>}></GridCardRPF>
                </React.Fragment>),
            discription: ("This is Get data function")
        },
        {
            id: 43,
            component: (<ButtonSubdomain label="Trang người mua" />),
            discription: ("This is Range Select component")
        },
        {
            id: 44,
            component: (
                <div style={{ height: "415px", maxWidth: "423px" }}>
                    <AddHighlight
                        label={"Thêm nhà đất nổi bật"}
                        onClick={() => alert('Thêm nhà đất nổi bật')}
                    />
                </div>
            ),
            discription: ("This is Range Select component")
        },
        {
            id: 45,
            component: (<Toggles
                onToggle={() => alert('bật/mở bản đồ')}
                bgToggled='#00837B'
                bgClear='#99A2AD'
                outerLabel='Bật/mở bản đồ'
                innerLabelLeft='Bản đồ'
                innerLabelRight='Bản đồ'
                innerLabelColor='#fff'
            />),
            discription: ("This is Toggles component")
        },
        {
            id: 46,
            component: (<TagBroker broker={arrayBroker[1]} phone="0123456789"></TagBroker>),
            discription: ("This is Info Broker component")
        },
        {
            id: 47,
            component: (
                <React.Fragment>
                    <ButtonFilterMobile />
                    <ButtonMapMobile />
                    <ButtonFavorite url="/"></ButtonFavorite>
                    <div>
                        <MapFilterSelection onClick={props.onClick} />
                    </div>
                </React.Fragment>

            ),
            discription: ("This is Favorite Button component")
        },



    ];

    return (
        <div>
            {components.map(ui => (
                <UIView key={ui.id} component={ui.component} description={ui.discription} />
            ))}

        </div>
    );
}

export default TestUIView;