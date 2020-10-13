
function Mission() {
    return (
        <div className="body h-screen">           
            
            <div className="main-div pt-48 flex justify-center items-center flex-col">
                <div className="logo text-center mb-4">
                    <img className="logo-image rounded-full w-full h-full" src="../images/logo.png" />
                </div>

                <div className="header-and-content text-center">
                <h3 className="text-3xl font-semibold">Coolhaus</h3>
                <p className="text-base">Awesome Ice Cream</p>     

                </div>

                <div className="purple-div flex justify-center items-center rounded-xl w-1/4 tracking-wide m-6 font-semibold">
                    <a href="#">
                    <p className="text-base">You Have 500 pts</p>
                    <p className="text-sm">Click here to redeem</p>
                    </a>
                </div>

                <div className="instagram-div rounded-xl w-1/4 tracking-wide">
                    <a href="#">
                        <div className="instagram-main-inner-content">
                            <div className="instagram-inner-left-content text-sm rounded p-5 overflow-hidden leading-normal">
                                500 pts
                            </div>

                            <div className="instagram-inner-right-content">
                                <p className="instagram-inner-right-p">Upload a photo to Instagram and tag us @coolhaus and hashtag #icecreamrules</p>

                            </div> 
                        </div>
                    </a>

                </div>
                </div>

            </div>
    );

}

export default Mission;