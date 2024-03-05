import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const UserInfo = () => {
    const [udata, setUData] = useState([]);
    const fetchuser = () => {
        fetch("https://randomuser.me/api/?results=30")
            .then(res => { return res.json() }).then((data) => {
                let users = data.results;
                setUData(users);

            })
    }
    useEffect(() => {
        fetchuser();
    }, []);
    return <>
        {/* {udata.map((uitem,index)=><div key={index}>{uitem.name.first}</div>)} */}
        <div className="row">
          {udata.map((uitem,index)=>
            <div className="col-md-4">

            <div className="card" style={{ width: '18rem' }}>
                <img src={uitem.picture.large} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{uitem.name.first}{uitem.name.last}</h5>
                    <p className="card-text">{uitem.email}</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>


        </div>)}
        </div>
    </>
};
export default UserInfo;