const login = () => {

    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
            <div className="fluid-container">
                <div className="container">
                    <div className="col-lg-12 row main-section animated jackInTheBox">
                        <div className="col-lg-5 detail-section">
                            <div className="information">
                                <h2 className="heading__h2">Music for everyone.</h2>
                                <h3 className="heading__h3">Premium Subscription</h3>
                                <div className="little-info">
                                    <h2 className="heading__h2__1">$9.99 / month</h2>
                                    <li>Shuffle play</li>
                                    <li>Ad Free</li>
                                    <li>Unlimited skips</li>
                                    <li>Listen Offline</li>
                                    <li>Play any track</li>
                                    <li>High Quality Audio</li>
                                    <span style={{ fontSize: '0.85em' }}>Lorem ipsum dolor sit amet.</span>
                                    <br />
                                    <span style={{ fontSize: '0.85em' }}>Lorem ipsum dolor sit amet.</span>
                                </div>
                                <p style={{ fontSize: '0.6em', margin: '0 auto', padding: 0 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, odio! Lorem ipsum dolor. Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 form-section">
                            <div className="form-conatiner">
                                <h2 className="heading__h2"><i style={{ fontSize: '1.5em' }} className="fa fa-spotify" /> Spotify</h2>
                                <br /><br />
                                <p className="links__p"><a href="#">Sign In</a> | <a href="#" style={{ fontWeight: 700 }}>Sign Up</a></p>
                                <form action="/">
                                    <label htmlFor="name">NAME</label>
                                    <input type="text" id="name" placeholder="Enter your full name" />
                                    <label htmlFor="name">EMAIL</label>
                                    <input type="text" id="name" placeholder="Enter your email address" />
                                    <label htmlFor="name">PASSWORD</label>
                                    <input type="text" id="name" placeholder="Set a strong password" />
                                    <input type="checkbox" id="checbox" />
                                    <span> I agree at <span><b>terms and conditions</b></span></span>
                                    <br /><br />
                                    <button className="button">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;