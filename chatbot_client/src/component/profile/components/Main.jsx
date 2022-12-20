import { Container } from '@chakra-ui/layout'
import userAPI from '../../../api/user';
import Content from './Content/Content'
import CoverProfile from './Cover'
import Sidebar from './Sidebar/Sidebar'
import React, {useEffect,  useState, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import "./main.css"
export default function MainProfile() {
  const userLogin =JSON.parse( localStorage.getItem("user"));
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        console.log("User full")
        const  data  = await userAPI.getUserFull(userLogin.id);
        
        setUser(data.data);
        
        console.log("User full",data)
        
      } catch (error) {
        console.log("Fail to fetch user", { error });
      }

      setLoading(false)
    })();
  }, []);
  let [color, setColor] = useState("#ffffff");
  return (
    <>
    {
      loading? (
        <div className='loadding_Sninner'>
          <FadeLoader 
            color={color}
            loading={loading}

            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        ):(
        <>
          <CoverProfile/>
          <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
            <Sidebar userLogin={user} />
            <Content userLogin={user} />
          </Container> 
        </>
      )
    }

    

  </>


  )
}
