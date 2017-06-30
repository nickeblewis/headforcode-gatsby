import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/App'
import './index.css'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import { FREECOM_AUTH_TOKEN_KEY } from './constants'

// in your gatsby-browser.js

import { Provider } from 'react-redux'
import store from './store'

// Create WebSocket client
const wsClient = new SubscriptionClient(`wss://subscriptions.graph.cool/v1/cizf8g3fr1sp90139ikdjayb7`, {
  reconnect: true,
  connectionParams: {
    authToken: localStorage.getItem(FREECOM_AUTH_TOKEN_KEY),
  },
})

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cizf8g3fr1sp90139ikdjayb7' })

// Add Authorization header
networkInterface.use([{
  applyMiddleware(request, next) {
    if (!request.options.headers) {
      request.options.headers = {}
    }

    // get the authentication token from local storage if it exists
    const token = localStorage.getItem(FREECOM_AUTH_TOKEN_KEY)
    request.options.headers.authorization = token ? `Bearer ${token}` : null
    next()
  }
}])

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  dataIdFromObject: o => o.id,
})

const freecom = {
  render,
  companyName: 'Graphcool',
  companyLogoURL: 'http://imgur.com/qPjLkW0.png',
  mainColor: 'rgba(39,175,96,1)'
}

// This gets returned to Gatsby which then renders the Root component as normal.
exports.wrapRootComponent = Root => {
  return () => (
    <ApolloProvider client={client}>
      <Root frrrcom={freecom} />
    </ApolloProvider>
  );
};