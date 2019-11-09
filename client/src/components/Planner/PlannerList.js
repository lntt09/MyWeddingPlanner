import React from 'react';
import {Link} from "react-router-dom";

import EditPlanner from './EditPlanner'
import './PlannerList.css'

function PlannerList(props){
    const planners = props.planners.map(function(planner){
        return(
            <div id key={planner.id}>
                <a href={'/planner/'+ planner.id}><h3>{planner.first_name} {planner.last_name}</h3></a>
                <p>{planner.wedding_date}</p>

            
            <Link to={`./planner/${planner.id}/edit`}><button>Edit</button> </Link>
          
            

            </div>
        )
    })

    return(
        <div>
            <div className="listofplanners">
                {planners}
            </div>
            
        </div>
    )
}
export default PlannerList