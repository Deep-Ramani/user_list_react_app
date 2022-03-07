import React from 'react'


export const User = (props) => {
  return (
    <tr>
        <td>
            <div>
                <img src={props.user.Image} alt="not display"></img>
            </div>
            <div>
                 {props.user.Name}
            </div>
            <div>
                {props.user.Email}
            </div>
        
        </td>
    </tr>
  );  
};
