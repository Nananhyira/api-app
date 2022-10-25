let initialState ={
  loginUsers:null
}

const Authreducer=(state=initialState, action) =>{
  switch(action.type){
    case "add_new_cred":
      return {...state, loginUsers:action.payload}
      default: 
      return state

  }



}
export default Authreducer