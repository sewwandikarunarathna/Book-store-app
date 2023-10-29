import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bgImage from "../../assets/img/updatepro.jpg";
import { updateUser } from '../../redux/actions/users/userActions';
import SuccessMessage from '../DisplayMessage/SuccessMessage';

const UpdateProfile = ({ history }) => {
  //Get the user from localstorage and pass to the initial states
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  const [name, setname] = useState(userInfo ? userInfo.name : '');
  const [email, setemail] = useState(userInfo ? userInfo.email : '');
  const [password, setpassword] = useState('');

  console.log(userLogin);
  //Get the updated user details from store and display message
  const updatedUser = useSelector(state => state.updatedUser);
  const { user, loading, success } = updatedUser;

  //dispatch
  const dispatch = useDispatch();
  //submit
  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(updateUser(name, email, password));
  };

  // Style for the background image and centering content
const containerStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "88vh",
  display: "block",
  alignItems: "center",
  justifyContent: "center",
};

const buttonStyle = {
  marginTop: "10px", // Add margin around the button
  fontSize: "1.0em",
  width: "25%"
};

  return (
    <div style={containerStyle}>
    <div className='container'>
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
          {user && !loading && success && (
            <SuccessMessage msg='Updated successfully. Logout and login with your new credentials' />
          )}
          <h1 className='text-center' style={{ margin: "50px" }}>Update Your Profile</h1>

          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1' style={{ fontWeight: 'bold', fontSize: "1.0em" }}>Name</label>
                <input
                  value={name}
                  onChange={e => setname(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1' style={{ fontWeight: 'bold', fontSize: "1.0em",  marginTop: "10px" }}>Email address</label>
                <input
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  required
                />
              </div>
              <div className='form-group' style={{margin: '10px 0px 10px 0'}}>
                <label htmlFor='exampleInputPassword1' style={{ fontWeight: 'bold', fontSize: "1.0em" }}>Password</label>
                <input
                  value={password}
                  onChange={e => setpassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Type your password...'
                  required
                />
              </div>
              <button type='submit' className='btn btn-primary m-auto' style={buttonStyle}>
                Update Profile
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UpdateProfile;