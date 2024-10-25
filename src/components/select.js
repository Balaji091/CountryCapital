import { Component } from "react";
class Selected extends Component{
    render(){
        const {details}=this.props
        const{capitalDisplayText}=details
        return(
            
               <option value={ capitalDisplayText} >{ capitalDisplayText}</option>
            
        )
    }
}
export default Selected