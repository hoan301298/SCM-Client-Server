import { FC } from "react";
import AboutComponent from "../components/AboutComponent";

/**TODO
 * 1. Move state management to container
 * 2. Pass data from conainer to controller
 * 3. Create type for keyvalue
 * 4. Create test cases
 * 5. Fix the test CI pipeline
 * 6. Create CD pipeline
 */
const AboutContainer:FC=()=>{
    return(
        <div>
            Supply Chain Management (SCM) prototype by <a href="http://www.vamk.fi">http://www.vamk.fi</a>
            <AboutComponent/>
        </div>
    )
}

export default AboutContainer;