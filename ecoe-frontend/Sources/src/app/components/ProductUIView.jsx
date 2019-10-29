import React from "react";
import UIView from "./UIView";
import Button from "./elements/Button";
import MediaView from "./comp-libs/globals/MediaView";
import Dropdown from "./elements/Dropdown";
const ProductUIView = (props) => {
    let components = [
        {
            id: 1,
            component: (<Button>Button 1</Button>),
            discription: "This is button 1"
        },

        {
            id: 3,
            component: (
                <Dropdown />
            ),
            discription: ("Media view")
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

export default ProductUIView;