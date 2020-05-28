Starting:
1) rebuild project 2 using mongo and redux
2) get the multiple rooms and get the controllers working
3) set up middleware for translation and pass into routes



3 ways to initialize soocket on client:
1) create an action file where everything related to socket is in it
2) you can pass in socket to the action function itself



mapStateToProps(state){
    //we want to make a prop called authenticated, that goes into the reducer auth, and returns the default state of authenticated or depending on the type
    return { authenticated: state.auth.authenticated}
}

order: component => calls actions => to reducer => changes state in store => reducer => action => component

a higher order component is taking a component, and returning a new component
connect(mapStateToProps,{})(Chat); takes the chat component, and returns it altered with the new state
