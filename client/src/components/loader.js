import React, {useState,useEffect}  from "react"
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";


function Loader (){
    const [isLoading, setLoading] = useState(true);

    function fakeRequest() {
        return new Promise(resolve => setTimeout(() => resolve(), 2500));
      }
    
      useEffect(() => {
        fakeRequest().then(() => {
          const el = document.querySelector(".loader-container");
          if (el) {
            el.remove();
            setLoading(!isLoading);
          }
        });
      }, []);
    
      if (isLoading) {
        return null;
      }

      return(
          <SolarSystemLoading/>
      )
}

export default Loader


