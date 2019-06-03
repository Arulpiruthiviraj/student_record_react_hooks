import * as React from 'react';
import NavBar from "./NavBar";

 const Home= () => {
    return (
        <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                    <NavBar/>
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
                    <Home/>
                </div>
            </div>
        </div>
    );
};


export default Home;