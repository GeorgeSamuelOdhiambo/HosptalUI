import React from 'react'

const loginhandler = (props) => {
    const login = (props) => {
      let token = localStorage.getItem("token");
      let userId = localStorage.getItem("userId");

      if(token == null || userId == null){
        return;
      }
      return isAurth()
    }
    return (
        <div>
            
        </div>
    )
}

export default loginhandler
