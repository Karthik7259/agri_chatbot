import React,{useState} from "react";
import { BsSendArrowUp } from "react-icons/bs";
import axios from "axios";
import { GiFarmer } from "react-icons/gi";
import ReactMarkdown from 'react-markdown'
import farming from './video/farming.mp4'
 
function App(){
  const[messages,setMessages]=useState([])
  const[input,setInput]=useState()
  const[loading,setLoading]=useState(false)


const handleSendMessage = async () => {
    if(input.trim()){
      const newMessages=[...messages,{text:input,user:true}];
      setMessages(newMessages);
      setInput("");
     try{
      setLoading(true);
      const response=await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=process.env.GOGGLE_API_KEY,',
        {
          "contents" : [
            {
            "parts":[
              {
                "text": input
              }
            ]
            }
          ]
          }
        );

      const botResponse = response.data.candidates[0].content.parts[0].text;
      setLoading(false);
      setMessages([...newMessages,{ text: botResponse , user : false }]);
    } catch (error) {
       console.error('Error sending message:',error)
       setLoading(false);
       setMessages([...newMessages,{ text: 'Error:Could not get response from FARMER' , user: false }]);
    }
     }
    };
 
 return (
<div className="relative flex flex-col justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500 overflow-hidden">
  {/* Background Video */}
  <video 
    className="absolute inset-0 w-full h-full object-cover" 
    autoPlay loop muted>
    <source src={farming} type="video/mp4" />
   
  </video>

  {/* Content */}
  <div className="relative z-10">

    <h1 className="mb-8 font-bold text-[3rem] drop-shadow-lg text-green-500 typewriter">FARMER AI ASSISTANT</h1>
   
    <div className="bg-white w-full max-w-lg shadow-lg rounded-lg overflow-hidden bg-cover bg-center" 
         style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp9212026.jpg")' }}>
      <div className="p-4 h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.user ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`rounded-lg p-2 shadow-md overflow-x-hidden flex flex-wrap ${msg.user ? 'bg-blue-100 text-black' : 'bg-gray-200'}`}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && (
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <span>Almost There...</span>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-gray-200 flex">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-lg outline-none"
          placeholder="ASK TO FARMER FOR SUGGESTION..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all"
          onClick={handleSendMessage}
        >
          {/* <BsSendArrowUp /> */}
          <GiFarmer/>
        </button>
      </div>
    </div>
  </div>
</div>


    );
  }
 export default App;

