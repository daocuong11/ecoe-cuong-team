import React from "react";
import styled from 'styled-components';
//import { Query } from "react-apollo";
import { GET_HOTAREA } from "./query";
import QueryRPF from "apolloComponents/Query";
import HotArea from "globalComponents/HotArea";
import { PROJECT } from "constants/domainType";

import IconQuan9 from 'images/icons/hotarea/district9.svg';
import IconNhaBe from 'images/icons/hotarea/nhabe.svg';
import IconQuan2 from 'images/icons/hotarea/district2.svg';
import IconQuan7 from 'images/icons/hotarea/district7.svg';
import IconQuan12 from 'images/icons/hotarea/district12.svg';
import withProductType from "apolloComponents/withProductType";

const Wrapper = styled.div``;

const HotAreaGQ = (props) => {
  let productType = props.productType;
  return (
    <Wrapper>
      <QueryRPF query={GET_HOTAREA} variables={{ productType }}
        render={data =>
          (
            data.getHotArea.map((item, index) => (
              <HotArea
                type={5}
                label={item.name}
                subLabel={item.total + (props.productType === PROJECT ? " dự án" : " căn")}
                icon={index === 0 ? IconQuan9 : index === 1 ? IconNhaBe : index === 2 ? IconQuan2 : index === 3 ? IconQuan7 : index === 4 && IconQuan12}
                header={index === 2 ? true : false}
              />
            ))
          )
        }
      />
    </Wrapper>
  );
};
export default withProductType(HotAreaGQ);