import {render, waitFor} from '@testing-library/react';
import List from './List';
import * as api from './api';
jest.mock("./api");

 describe("FalconSat",()=>{
    beforeEach(()=>jest.clearAllMocks());
    
    it("should render racket names when api responds",async()=>{
        api.getList.mockResolvedValue({
            results:[
                {  flight_number: 1,
                    mission_name: "FalconSat",
              

             }
            ]
        })
         render(<List getByTestId={flight_number}/>);
         await waitFor(()=>{
             screen.getByText("FalconSat")
         })
     });
     it("should render error message when api fails",async()=>{
         api.getList.mockRejectedValue({})
          render(<List/>);
          await waitFor(()=>{
              screen.getByText("unable to fetch data")
          })
     });
 });