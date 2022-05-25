import React,{useReducer,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col,CardGroup } from "react-bootstrap";
import {getList } from './api';

    const initialState ={
        loading:true,
        error:'',
        post:{},
       history:{},
       capsules:{}
    }
    const reducer = (state,action)=>{
        switch(action.type){
            case'FETCH_SUCESS':
            return{
                loading:false,
                post:action.payload,
                history:action.payload,
                capsules:action.payload,
                error:''
            }
            case 'FETCH_ERROR':
                return{
                    loading:false,
                    post:{},
                    history:{},
                    capsules:{},
                    error:''
                }
            default:
                return state
        }
    }
 const List = ()=>{
 
     const [state,dispatch] = useReducer(reducer,initialState);
     useEffect(()=>{
      getList()
      .then(response=>{
            dispatch({type:'FETCH_SUCESS',payload:response.data})
            
        })
        .catch(error=>{
            dispatch({type:'FETCH_ERROR'})
        })
     },[]);
   // console.log(state);
     const getDragons =  state.loading?'loading':state.post.slice(0,10).map((item)=>{
  
        console.log(item);
        return(
      
   
          <div key={item.flight_number}>
        <CardGroup>
        <Card.Body>
            <Card.Title>
            <h3>Mission Name</h3>
            <h5>{item.mission_name}</h5>
            <h5>{item.launch_date_utc}</h5>
            </Card.Title>
            <div>
              <h6>Core Serial</h6>
              {item.rocket.first_stage.cores[0].core_serial}
          </div>
          <div>
              <h6>payload</h6>
              {item.rocket.second_stage.payloads[0].payload_id}<br/>
              {item.rocket.second_stage.payloads[0].payload_type}
          </div>
         <image src={item.links.mission_patch} style={{width:"50px",height:"50px"}}/>
        <div>
            <h6>Launch Details</h6>
            Launch Details: {item.launch_success?'sucess':item.launch_failure_details.reason} <br/>
              
        </div>
            </Card.Body>
        </CardGroup>
        </div>
       
        
   
         )
    })
return(<div>
   {getDragons}
</div>)
}

export default List;