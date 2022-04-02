import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
// import StatusCard from './components/StatusCard';
// import News from './components/NewsCard';
// import Message from './components/MessageCard';
// import Sidebar from "./components/Sidebar";
import { CONTACT, NEWS } from "./Url";
import { getToken, logout } from './Auth';
import axios from 'axios';

const HomeAdmin = () => {
    const history = useHistory();
    // const [sumContact, setSumContact] = useState();
    // const [sumNews, setSumNews] = useState();
    // const [dataContact, setDataContact] = useState([]);
    // const [dataNews, setDataNews] = useState([]);

    useEffect(() => {
        async function getStatus() {
            try{
                const tokenRespon = await getToken();
                if(tokenRespon === 400){
                    alert("Authentifikasi Gagal, Silahkan Login Kembali");
                    logout();
                    history.replace("/HomeAdmin");
                } else{
                    const contactRespon = await axios.get(CONTACT + "latest", {
                        headers: { Authorization: `Bearer ${tokenRespon}`}
                    });
                    //setApiData(newsRespon.data);
                    console.log(contactRespon.data);
                    // setSumContact(contactRespon.data.sumContacts);
                    // setDataContact(contactRespon.data.latestContacts);

                    axios.get(NEWS + "latest")
                    .then((res) => {
                        console.log(res.data);
                        // setSumNews(res.data.sumNewsposts);
                        // setDataNews(res.data.latestNewspost);
                    }).catch((err) => {
                        console.log(err);
                    });
                }
            } catch(err){
                console.log(err);
            }
        };
        getStatus();
    },[]);
    
    // console.log(dataNews)
  return (
    <div>
      {/* <Sidebar /> */}
      <div className="md:ml-64">
        <div className="pt-8 p-8 md:pb-16 px-3 md:px-8 h-auto">
            <div className="container mx-auto max-w-full">
              {/* <StatusCard contact={sumContact} news={sumNews}/> */}
            </div>
        </div>
        <div className="mb-16 px-3 md:px-8 h-auto">
          {/* <News contentNews={dataNews}/> */}
        </div>
        <div className="mb-16 px-3 md:px-8 h-auto">
          {/* <Message contentContact={dataContact}/> */}
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
