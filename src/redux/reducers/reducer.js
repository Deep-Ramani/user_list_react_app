

const intialState = {
    selectedIndex : null,
    users : [
    {
        
        Name : "Deep Ramani0",
        Image : 'https://reqres.in/img/faces/1-image.jpg',
        Email : 'deepramani0@gmail.com',
        Status : "Active",
        Access : "Owner"

    },
    {
        
        Name : "Deep Ramani1",
        Image : 'https://reqres.in/img/faces/2-image.jpg',
        Email : 'deepramani1@gmail.com',
        Status : "Inactive",
        Access : "Manager"
    },
    {
        
        Name : "Deep Ramani2",
        Image : 'https://reqres.in/img/faces/3-image.jpg',
        Email : 'deepramani2@gmail.com',
        Status : "Inactive",
        Access : "Read"
    },
    {
     
        Name : "Deep Ramani3",
        Image : 'https://reqres.in/img/faces/4-image.jpg',
        Email : 'deepramani3@gmail.com',
        Status : "Inactive",
        Access : "Manager"
    },
    {
        
        Name : "Deep Ramani4",
        Image : 'https://reqres.in/img/faces/5-image.jpg',
        Email : 'deepramani4@gmail.com',
        Status : "Inactive",
        Access : "Read"
    },
    {
      
        Name : "Deep Ramani5",
        Image : 'https://reqres.in/img/faces/6-image.jpg',
        Email : 'deepramani5@gmail.com',
        Status : "Inactive",
        Access : "Manager"
    },
    {
        
        Name : "Deep Ramani6",
        Image : 'https://reqres.in/img/faces/7-image.jpg',
        Email : 'deepramani6@gmail.com',
        Status : "Inactive",
        Access : "Read"
    },
    {
      
        Name : "Deep Ramani7",
        Image : 'https://reqres.in/img/faces/8-image.jpg',
        Email : 'deepramani7@gmail.com',
        Status : "Inactive",
        Access :"Manager"
    },
    {
    
        Name : "Deep Ramani8",
        Image : 'https://reqres.in/img/faces/9-image.jpg',
        Email : 'deepramani8@gmail.com',
        Status : "Inactive",
        Access : "Read"
    },
    {
        
        Name : "Deep Ramani9",
        Image : 'https://reqres.in/img/faces/10-image.jpg',
        Email : 'deepramani9@gmail.com',
        Status : "Inactive",
        Access : "Manager"
    },
    {
        
        Name : "Deep Ramani10",
        Image : 'https://reqres.in/img/faces/11-image.jpg',
        Email : 'deepramani10@gmail.com',
        Status : "Inactive",
        Access : "Read"
    },
  
]};

const reducer = (state=intialState,action) =>{
    switch(action.type){
        case "onMouseEnter" :
            return {...state,selectedIndex: action.payload}
        default: return state;
    }
}

export default reducer;
