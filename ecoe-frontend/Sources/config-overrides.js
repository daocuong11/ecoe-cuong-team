const path = require('path');

module.exports = function override(config, env){
    config.resolve.alias.components = path.join('app/components/');
    config.resolve.alias.containers = path.join('app/containers/');
    config.resolve.alias.images = path.join('app/images/');
    config.resolve.alias.globalComponents = path.join('app/components/comp-libs/globals');
    config.resolve.alias.backOffice = path.join('app/components/comp-libs/back-office');
    config.resolve.alias.UIElement = path.join('app/components/elements');
    config.resolve.alias.globalConstants = path.join('./constants');    
    config.resolve.alias.globalUtils = path.join('./ultils');   
    config.resolve.alias.apolloComponents = path.join('graphql/apollo-components');
    config.resolve.alias.graphConfig = path.join('graphql');
    config.resolve.alias.schemas = path.join('graphql/schemas'); 
    return config;
};