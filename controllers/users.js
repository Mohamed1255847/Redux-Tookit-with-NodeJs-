const {selectCount} = require('../ReduxReducer/users');
const store = require('../store');
const {increment,getinfoFromServer} = require('../ReduxReducer/users');

const userData = (req , res, next) =>{
   const value = store.getState(selectCount); 
    
   res.status(200).json({message:'the request is scssful', data:value.users});
};


const editeusers = (req , res , next) => {
    store.dispatch(increment());
    const value = store.getState(selectCount); 
    res.status(200).json({message:'the request is scssful', data:value.users});
}; 

const testThunk = async(req,res,next)=>{
        await store.dispatch(getinfoFromServer());
        const value = store.getState(selectCount); 
        res.status(200).json(value);
    

    
}
 exports.userData = userData;
 exports.editeusers = editeusers;
 exports.testThunk = testThunk;