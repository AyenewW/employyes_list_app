
          import './App.css';
          import React from 'react';
          import EmployeePage from './componentes/EmployeePage';
          import HomePage from './componentes/HomePage';
          import Wrapper from './componentes/Wrapper';

          function App() {
          const Employee =[


          {
          id:1,
          image:"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
          name:"Liam Noah ",
          title:"Software Developer",
          calloffice: "202-555-0185",
          callmobile:"202-555-0108",
          sms:"202-555-0196",
          email:"liamnoah@gmail.com",
          facebook:"#liamnoah",
          ig:"@liamnoah.IG",
          },

          {
          id:2,
          image:"https://images.pexels.com/photos/3400574/pexels-photo-3400574.jpeg?auto=compress&cs=tinysrgb&w=600",
          name:"Oliver Elijah ",
          title:"Data Scientist",
          calloffice: "202-555-0182",
          callmobile:"202-555-0114",
          sms:"202-555-0100",
          email:"oliverelijah@gmail.com",
          facebook:"#oliverelijah",
          ig:"@oliverelijah.IG",
          },

          {
          id:3,
          image:"https://images.pexels.com/photos/12236150/pexels-photo-12236150.jpeg?auto=compress&cs=tinysrgb&w=600",
          name:"Isabella Benjamin ",
          title:"Financial Manager",
          calloffice: "613-555-0186",
          callmobile:"613-555-0186",
          sms:"613-555-0196",
          email:"Isabellabenjamin@gmail.com",
          facebook:"#Isabellabenjamin",
          ig:"@Isabellabenjamin.IG",
          },

          {
          id:4,
          image:" https://images.pexels.com/photos/5917850/pexels-photo-5917850.jpeg?auto=compress&cs=tinysrgb&w=600",
          name:"Henry William",
          title:"Information Security Analyst",
          calloffice: "613-555-0107",
          callmobile:"613-555-0103",
          sms:"613-555-0100",
          email:"henrywilliam@gmail.com",
          facebook:"#henrywilliam",
          ig:"@henrywilliam.IG",
          },

          {
          id:5,
          image:"https://images.pexels.com/photos/9301464/pexels-photo-9301464.jpeg?auto=compress&cs=tinysrgb&w=600",
          name:"Elijah James ",
          title:"Nurse Practitioner",
          calloffice: "655-574-8492",
          callmobile:"655-654-0793",
          sms:"746-764-0877",
          email:"elijahjames@gmail.com",
          facebook:"#elijahjames",
          ig:"@elijahjames.IG",
          },

          {
          id:6,
          image:"https://images.pexels.com/photos/5648108/pexels-photo-5648108.jpeg?auto=compress&cs=tinysrgb&w=600",
          name:"Lucas Theodore",
          title:"Firefighters",
          calloffice: "287-387-9087",
          callmobile:"786-757-5642",
          sms:"746-764-4527",
          email:"lucastheodore@gmail.com",
          facebook:"#lucastheodore",
          ig:"@lucastheodore.IG",
          },
          ]

          const[EmployeeDetail,setEmployeeDetail] =React.useState(Employee[0])
          return (
          <div className='container'>
          <Wrapper>
          <HomePage Employee={Employee} setEmployeeDetail={setEmployeeDetail}/>
          <EmployeePage Employee={Employee} EmployeeDetail={EmployeeDetail}/>
          </Wrapper>
          </div>
          )
          }

          export default App;


