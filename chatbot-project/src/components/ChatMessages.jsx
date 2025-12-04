import{ useEffect , useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

export function ChatMessages({chatMessages}){
       const chatMessagesRef = useRef(null);

        useEffect(()=>{
          const cotainerElem= chatMessagesRef.current;
          if(cotainerElem){
            cotainerElem.scrollTop = cotainerElem.scrollHeight;
          }

         },[chatMessages]);
        return(
          <div className="chat-messages-container" ref={chatMessagesRef}> 
         
            {chatMessages.map((chatMessage)=>{
                      return(
                        <ChatMessage 
                          message={chatMessage.message}
                          sender={chatMessage.sender}
                          key = {chatMessage.id}
                        />
                      );
        })}
          </div>
      );
    }