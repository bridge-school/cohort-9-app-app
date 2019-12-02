import React from 'react';
import AppListItem from "./AppListItem.js"
import {AppListStyled} from "./AppListStyled"
import { Button, Grid, Table } from 'semantic-ui-react'

const AppsList = ({apps}) => { 
    return (
        <AppListStyled>
            {apps.map(li => {
                const {id, cohortName, cohortType, link} = li
                return (
                 <AppListItem 
                    key={id}
                    cohortName={cohortName}
                    cohortType={cohortType}
                    link={link}
                 />
                )
            })}  
      </AppListStyled>

    )
}
   
export default AppsList;