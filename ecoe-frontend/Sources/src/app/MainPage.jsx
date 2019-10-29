import React, { lazy, Suspense } from "react";
import Wrapper from './Wrapper';
import { Route, Switch } from "react-router-dom";
import ProductForm from './components/comp-libs/ProductForm';
import Contact from './components/comp-libs/contact';
import { getDomainUrl } from "globalUtils/getDomainUrl";
import { MS, SD_BO, SD_FO } from "constants/domainType";
import { PAGE_PRODUCT_DETAIL } from "constants/page";

const BOHomePage = lazy(() => import("./components/comp-libs/back-office/BOHomePage"));
const FOHomePage = lazy(() => import("./components/comp-libs/front-office/FOHomePage"));
const MUHomePage = lazy(() => import("./components/comp-libs/mutual-space/MUHomePage"));

const Search = lazy(() => import("./components/comp-libs/search"));
const ProductUIView = lazy(() => import("./components/ProductUIView"));
const TestUIView = lazy(() => import("./components/TestUIView"));
const ProductViewPage = lazy(() => import("./components/comp-libs/product-view/ProductViewPage"));

function WaitingComponent(Component) {
    return props => (
        <Suspense fallback={<div>Loading....</div>}>
            <Component {...props}></Component>
        </Suspense>
    )
}

const MainPage = () => {
    return (
        <Wrapper>
            <Switch>
                
                <Route exact path="/" component={WaitingComponent(MUHomePage)} />
                <Route exact path={"/:domain/" + getDomainUrl(SD_FO)} component={WaitingComponent(FOHomePage)} />
                <Route exact path={"/:domain/" + getDomainUrl(SD_BO)} component={WaitingComponent(BOHomePage)} />
                <Route exact path={"/:domain/" + getDomainUrl(MS)} component={WaitingComponent(MUHomePage)} />
                <Route exact path="/ui-library" component={WaitingComponent(TestUIView)} />
                <Route exact path="/ui-library2" component={WaitingComponent(ProductUIView)} />
                <Route exact path="/:domain/:page/search" component={WaitingComponent(Search)} />
                <Route exact path={"/:domain/:page/" + PAGE_PRODUCT_DETAIL} component={WaitingComponent(ProductViewPage)} />
	            <Route path="/:domain/form" component={WaitingComponent(ProductForm)} />
                <Route path="/:domain/danh-ba" component={WaitingComponent(Contact)} />

            </Switch>
        </Wrapper>
    );
}
export default MainPage;