import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const AddUser = () => {
    const [name, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const [age, ageChange] = useState(0);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const handleSubmit = (e) => {
      e.preventDefault();
      const userObj = { name, email, phone, age };
      dispatch(FunctionAddUser(userObj));
      navigate(`/user?newUser=${encodeURIComponent(JSON.stringify(userObj))}`);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add User</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Age</label>
                                    <input value={age} onChange={e => ageChange(e.target.value)} className="form-control" type="number"></input>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> 
                        
                    </div>

                </div>
            </form>
        </div>
    );
}

export default AddUser;