import React from "react";
import styled from 'styled-components';
//import { Query } from "react-apollo";
import { GET_HIGHLIGHT } from "./query";
import QueryRPF from "apolloComponents/Query";
import HighlightCard from "globalComponents/HighlightCard";
import { PROJECT } from "constants/domainType";
import Interior from 'images/icons/highlight/interior.svg';
import RiverSide from 'images/icons/highlight/river-side.svg';
import Center from 'images/icons/highlight/center.svg';
import School from 'images/icons/highlight/school.svg';
import Default from 'images/icons/highlight/like.svg';
import withProductType from "apolloComponents/withProductType";

const label_Interior = "Nội thất có sẵn";
const label_RiverSide = "View sông";
const label_Center = "Vị trí trung tâm";
const label_School = "Gần trường học";

const Wrapper = styled.div``;

const HighlightCardGQ = (props) => {
  let productType = props.productType;

  return (
    <Wrapper>
      <QueryRPF query={GET_HIGHLIGHT} variables={{ productType }}
        render={data =>
          data.getHighlight.map(item => (
            <HighlightCard
              label={item.name}
              number={item.total + (productType === PROJECT ? " dự án" : " căn")}
              image="" type={4}
              icon={
                item.name === label_Interior ? Interior :
                  item.name === label_RiverSide ? RiverSide :
                    item.name === label_Center ? Center :
                      item.name === label_School ? School :
                        Default}
            />
          ))
        }
      />
    </Wrapper>
  );
};

export default withProductType(HighlightCardGQ);