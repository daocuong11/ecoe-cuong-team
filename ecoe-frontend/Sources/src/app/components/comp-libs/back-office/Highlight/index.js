import React, { Component, Fragment } from "react";
import ContainerCps from "globalComponents/ContainerCps";
import GridCardRPF from "globalComponents/GridCardRPF";
import HeadGrid from "globalComponents/HeadGrid";
import { DescriptionSection } from "UIElement/Typography";
import LatestViewCarousel from "globalComponents/LatestViewCarousel";
import Wrapper, { SectionFull, LinkSubdomain } from "../Wrapper";
import withProductType from "apolloComponents/withProductType";
import { BO_HIGHLIGHT } from "constants/categorySearch";
import CategorySearch from "apolloComponents/CategorySearch";
import * as _ from "lodash";
const sectionHighlinghtSearch = { sectionSearch: { dk: "Nổi bật" } };

class Highlight extends Component {
    render() {
        return (
            <Fragment>
                <ContainerCps>
                    <Wrapper>
                        <HeadGrid title={`Nổi bật (${12})`} />
                        <DescriptionSection padding>Nhà đất bạn đã chọn làm nổi bật trên <LinkSubdomain as="a" href="/front-office">giao diện người mua</LinkSubdomain></DescriptionSection>
                    </Wrapper>
                </ContainerCps>
                <SectionFull>
                    <CategorySearch isHomePage={true} category={BO_HIGHLIGHT} 

                        render={data => {
                            let products = [...data.searchCritical.products];
                            if (products.length < 17) {
                                products = [{ add: true, id: 0 }, ...products];
                            }

                            return (<LatestViewCarousel
                                products={products}
                                couldAddition={true}
                            />)
                        }
                        }
                    ></CategorySearch>
                </SectionFull>
            </Fragment>

        )
    }
}

export default Highlight;