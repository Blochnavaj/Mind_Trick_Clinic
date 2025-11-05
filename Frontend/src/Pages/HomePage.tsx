import CounselingMode from "../Components/Common/CounselingMode"
import Hero from "../Components/Common/Hero"
import Services from "../Components/Common/Services"

 
function HomePage() {
  return (
    <> 
     {/* Hero section */}
     <Hero/>
     {/* service card */}
     <Services/>

     {/* CounselingMode */}
     <CounselingMode/>
    </>
  )
}

export default HomePage