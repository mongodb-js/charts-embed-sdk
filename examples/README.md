# MongoDB Embedding SDK Examples

MongoDB Charts allows you to create visualizations of your MongoDB data using a simple web interface. You can view the visualizations within the Charts UI, or you can use the Embedding feature to render the charts in an external web application.

Charts can be embedded either using a simple IFRAME snippet, or by using the Charts Embedding SDK from your JavaScript code. When using the SDK, embedded charts can be either unauthenticated (meaning anyone who has the embed code can view the chart), or authenticated (whereby the user can only view the chart if they have an active authentication session linked to a Charts authentication provider).

This directory contains example applications making use of both unauthenticated and authenticated utilizations of the SDK. They are provided as a reference to kick start your development process. To run these examples, simply clone the directory, and run the following commands:

- `npm install`
- `npm start`

in the example directory of your choosing.

## Embedded Charts

The [Unauthenticated](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/unauthenticated) example is the best place to see all the current SDK features being used. Since it doesn't require authentication, it's the easiest example to set up and follow along with.

Our **authenticated** examples are great references if you need help getting started creating Authenticated Embedded Charts. We have three examples, each tailored for the three Authentication Providers now available in MongoDB Charts. The three examples are:

- [Custom JWT](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/authenticated-custom-jwt)
- [Atlas App Services](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/authenticated-realm)
- [Google](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/authenticated-google)

If you'd like to build **interactive** charts, we have two examples showing this capability:

- [Getting started with click events](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/click-events-basic)
- [Interactive filtering using click events](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/click-events-filtering)

There is also an [example](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/charts/timeline-charts-example) of how to build an animated timeline chart.

## Embedded Dashboard

The embedded dashboards are very similar to the embedded charts examples, but with a few differences that are highlighted in each example.

The easiest method of embedding a dashboard is by following the [unauthenticated example](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/dashboard/unauthenticated). 

For interactive purposes, you can also look at the [unauthenticated get chart example](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/dashboard/unauthenticated-get-chart) where you can attach a click event listener to individual charts on an embedded dashboard.

If your dashboard needs some privacy, you can look at our authenticated examples which uses the same authentication providers as the embedded chart examples too.


- [Custom JWT](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/dashboard/authenticated-custom-jwt)
- [Atlas App Services](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/dashboard/authenticated-realm)
- [Google](https://github.com/mongodb-js/charts-embed-sdk/tree/master/examples/dashboard/authenticated-google)


---

We hope these resources help, and as always,

Happy Charting! 🚀 📈
