const initialState=[
    {id:0,rollNum:1, name:"Noor Khan",city:"Patna",
    mark1:69,mark2:50,mark3:60,mark4:70,mark5:90},

    {id:1,rollNum:2, name:"Rapsan Jani",city: "Noida",
       mark1:70,mark2:64,mark3:47,mark4:60,mark5:67},

    {id:2,rollNum:3, name:"Monika singh",city: "New Delhi",
       mark1:86,mark2:45,mark3:87,mark4:50,mark5:97},

    {id:3,rollNum:4, name:"Sunil Kumar",city: "Jaipur",
       mark1:36,mark2:54,mark3:97,mark4:60,mark5:87},
      
];

const studentReducer=(state=initialState ,action)=>{
    switch(action.type) {
        case "Add_Student":
            state=[...state,action.payload];
              return state;
        case "UPDATE_STUDENT":
            const updateState=state.map(student=>student.id===action.payload.
                id? action.payload:student);
                state=updateState;
                return state;
        case "DELETE_STUDENT":
            const filterStudents=state.filter(student=>student.id!==action.
                payload&&student);
                state=filterStudents;
                return state;
        
        default:
            return state;
    }
};

export default studentReducer;