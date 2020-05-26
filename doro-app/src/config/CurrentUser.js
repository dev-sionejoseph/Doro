import fireINIT from "./Firebase"

    const User= fireINIT.auth().currentUser
      
    export default User;