import logo from './logo.svg';
import './App.css';
import Card from "./Card.js"


function App() {

  let list =[
    {
      pop:false,
      basic:"BASIC",
      team:"For Team of 3-5 Members",
      sup:"$",
      price:"28",
      price1:"$20",
      feature: [
        {
          name:"Perfect of Small Team"
        },
       {
         name:"Unlimited Invoices"
       },
       {
       name:"Project Management"
       },
       {
         name:"Team Management"
       }

      ]                                                                                                      
    },
    {
      pop:true,
      basic:"INTERMEDIATE",
      team:"For Team of 5-10 Members",
      pop:"popular",
      button:"Choose Plan",
      sup:"$",
      price:"39",
      price1:"$30",
      feature:[
        {
          name:"Perfect of Small Team"
        },
       {
        name:"Unlimited Invoices"
       },
      {
        name:"Project Management"
      },
      {
        name:"Team Management"
      }

      ]
    },
    { 
      pop:false,
      basic:"HIGH CLASS",
      team:"For Team of 10-25 Members",
      sup:"$",
      price:"58",
      price1:"$50",
      feature:[
        {
          name:"Perfect of Small Team"
        },
       {
        name:"Unlimited Invoices"
       },
      {
        name:"Project Management"
      },
      {
        name:"Team Management"
      },
     { 
      name:"Time Tracking"
    }
      ]
      
    },
    {
      pop: true,
      basic:"SUPREME",
      team:"For Team of 25-100 Members",
      sup:"$",
      price:"99",
      price1:"$80",
      feature:[
        {
          name:"Perfect of Small Team"
        },
       {
        name:"Unlimited Invoices"
       },
      {
        name:"Project Management"
      },
      {
        name:"Team Management"
      },
     { 
      name:"Time Tracking"
    }
      ]
    }
  ];
  return (
    <div class="pricing1 py-5 bg-light">
    <div class="container">
      <div class="row justify-content-center">
      {
        list.map((obj)=>{
          return  <Card data={obj}></Card>
        })
      }

        </div>
        </div>
        </div>
  );
}

export default App;
