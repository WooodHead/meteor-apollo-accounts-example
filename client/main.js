import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { App, Layout, NotFound, Login, Register, ApolloClient,
  Profile, EmailVerification, RecoverPassword } from './index'
import { Router, Route, browserHistory } from 'react-router'

Meteor.startup(() => {
  render(
    <ApolloProvider client={ApolloClient}>
      <Router history={browserHistory}>
       <Route component={Layout}>
         <Route path="/" component={App} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
         <Route path="/profile" component={Profile} />
         <Route path="/email-verification" component={EmailVerification} />
         <Route path="/email-verification/:token" component={EmailVerification} />
         <Route path="/recover-password" component={RecoverPassword} />
         <Route path="/recover-password/:token" component={RecoverPassword} />
         <Route path="*" component={NotFound} />
       </Route>
      </Router>
    </ApolloProvider>, document.getElementById('render-target')
  )
});
