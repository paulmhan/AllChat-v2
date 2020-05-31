mapStateToProps(state){
    //we want to make a prop called authenticated, that goes into the reducer auth, and returns the default state of authenticated or depending on the type
    return { authenticated: state.auth.authenticated}
}

order: component => calls actions => to reducer => changes state in store => reducer => action => component

a higher order component is taking a component, and returning a new component
connect(mapStateToProps,{})(Chat); takes the chat component, and returns it altered with the new state


1) I want a function that gets all the rooms from the db on component did mount, as well as get the new room when one is created. 
