import React, { useReducer } from 'react';
import  * as userActions from '../redux/UserListThunk/userList.actions';
import { useDispatch, useSelector } from 'react-redux';
import { userListFeatureKey } from '../redux/UserListThunk/userList.reducer';


export default function UserList() {
  let dispatch = useDispatch();

  let userListInfo = useSelector((state)=>{
    return state[useReducer,userListFeatureKey];
  });

  let {loading, users,  errorMessage 
} = userListInfo

console.log(userListInfo);


  let clickUserDetails = ()=>{
    dispatch(userActions.fetchUsers());
  }


  return (
    <>
    <section className='p-3'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h3  text-primary">User List</p>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam, magnam odit, dolorum atque quas praesentium veniam rerum deleniti aspernatur asperiores nisi maiores quibusdam amet expedita enim delectus ut itaque.</p>
                    <button onClick = {clickUserDetails}className='btn btn-success btn-sm'>UserList</button>
                </div>

                <pre>{JSON.stringify(users)}</pre>
            </div>
            
        </div>

    </section>
    </>
  )
}
