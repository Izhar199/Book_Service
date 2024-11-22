const Eureka = require('eureka-js-client').Eureka;


// Create the Eureka client instance
const eurekaClient = new Eureka({
    instance: {
      app: 'book-service', // Service name as it will appear in Eureka
      instanceId: 'book-service-' + process.env.HOSTNAME,
      hostName: 'localhost', // Host of your service
      ipAddr: '127.0.0.1',  // IP of your service
      statusPageUrl: 'http://localhost:3000/info', // Optional, health/status endpoint
      port: {
        $: 3000, // Port your service listens on
        '@enabled': true,
      },
      vipAddress: 'book-service',
      dataCenterInfo: {
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name: 'MyOwn',
      },
    },
    eureka: {
      host: 'localhost',  // Eureka server host
      port: 8761,         // Eureka server port
      servicePath: '/eureka/apps/',
    },
  });
  

  // Start the Eureka client
  eurekaClient.start((error) => {
    console.log(error ? 'Error starting Eureka client' : 'Eureka client started successfully');
  });

  module.exports = eurekaClient;