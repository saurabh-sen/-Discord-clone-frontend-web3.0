import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'egoetl6s',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skMQlEDrLEWISHvb94ItEe4zUCFJlYRsmrOlONXKaBhEsY28z1Uidbja1KpucP0WV0tGF1SdHkcAy8tdwOPucLMONCyw0UQ8yjcFnwaWNfUNI2SJzcE6YidWSnkZ1WyayxAQO2z0Yvu7S1vNC3CfNGIdQTUt0rsLGw1zgBeYjUcU2nxKq8p3',
    useCdn: true,
    ignoreBrowserTokenWarning: true,
})