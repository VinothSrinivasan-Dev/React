import {useState} from 'react';
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({chatMessages,setChatMessages}){

      const[inputText,setInputText] = useState('');

      function saveInputText(event){
        setInputText(event.target.value);
        // console.log(event.target.value);
      }
      function myFunction(event){
        if(event.key === 'Enter'){
          sendMessage();
        }
        else if(event.key === 'Escape'){
          setInputText('');
        }
        
      }
     async  function sendMessage(){

        const newChatmessages= [
        ...chatMessages,
        {
          message:inputText,
          sender:'user',
          id:crypto.randomUUID()
        }
        
       ];
        //Here we are lifting the state up of the chatMessages(Share States btw states)
        setChatMessages(newChatmessages);

       const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
        ...newChatmessages,
        {
          message:response,
          sender:'robot',
          id:crypto.randomUUID()
        }
        
       ]);

       setInputText('');
       

        // console.log(inputText);
      }
//<></> - This is called Fragmemts  Group elements together to avoid inserting extra divs'ss
      return (
      <div className="chat-input-container">  
        
        <input 
          placeholder="Send a message to Chatbot"  
          size="30" 
          onChange={saveInputText}
          onKeyDown={myFunction}
          value={inputText}
          className="chat-input"
        /> 
        <button className="send-button" 
         onClick={sendMessage}
        >
          Send</button>

      </div>  
      );
    }
