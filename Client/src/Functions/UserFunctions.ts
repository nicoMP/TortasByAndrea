import axios from "axios";
const GRAPHQL_API = "http://localhost:4000/";
const loginQuery = `query Login($Username:String! $Password:String!) {
    login(username:$Username password:$Password){
        isadmin
        loggedin
        userid
    }
  }
  `; 
const registerMutuation = `mutation($FName:String! $LName:String! $Email:String! $Phone:Float! $Password:String!) {
    registerClient(fname:$FName lname:$LName email:$Email phone:$Phone password:$Password)
  }
  `;  

interface Login {
    username:string,
    password:string
}
export const LoginAPI = async ({username, password}:Login) => {

    return axios.post(GRAPHQL_API, 
        {query : loginQuery,
        variables: {Username:username,Password:password},
    },
        
       { headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
            }}
    )
        .then(response => {
            return(response.data.data.login);
        })
        .catch(error => {
            throw(error);
        });
}
interface Register{
    fname:string,
    lname:string,
    phone:string,
    email:string,
    password:string,
}
export const RegisterAPI = async ({fname,lname,phone,email, password}:Register) => {

    axios.post(GRAPHQL_API, 
        {query : registerMutuation,
        variables: {FName:fname, LName:lname, Phone:parseInt(phone),Email:email, Password:password},
    },
        
       { headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
            }}
    )
        .then(response => {
            return response;
        })
}