import axios from "axios";
const GRAPHQL_API = "http://localhost:4000/";
const loginQuery = `query Login($Username:String! $Password:String!) {
    login(username:$Username password:$Password){
        accesslevel
        userid
    }
  }
  `;  

interface Login {
    username:string,
    password:string
}
export const LoginAPI = async ({username, password}:Login) => {

    axios.post(GRAPHQL_API, 
        {query : loginQuery,
        variables: {Username:username,Password:password},
    },
        
       { headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
            }}
    )
        .then(response => {
            console.log((response.data.data));
        })
        .catch(error => {
            console.error(error);
        });
}