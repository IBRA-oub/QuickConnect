import React, { useState } from 'react';
import styled from 'styled-components';
import AllChat from './AllGroupes'; 

const ChatContainerWrapper = styled.div`
  flex: 2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
`;

const MessageContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-top: 20px;
`;

const MessageInputContainer = styled.div`
  display: flex;
  background-color: #DBDCFF;
  padding: 10px;
  border-radius: 20px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const MessageInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  gap: 10px;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E0E4EB;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &:hover {
    background-color: #d1d4da;
  }
`;

const IconButton2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E0E4EB;
  padding: 5px;
  border-left: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #d1d4da;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: black;
`;

const ChatContainer = ({ messages, setSelectedGroup }) => {
  const [selectedGroup, setSelectedGroupState] = useState('Group 1');
  const currentMessages = messages.filter(message => message.group === selectedGroup);

  return (
    <ChatContainerWrapper>
     
        <ChatHeader>
        <h2 className=" font-roboto font-bold text-[30px] text-[#132C33]">
        {selectedGroup}
        </h2>
          <div className='flex gap-5'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.715 23.1517L28.475 22.3967L26.71 20.6233L25.9533 21.3783L27.715 23.1517ZM31.0233 22.08L34.2083 23.8117L35.4 21.615L32.2167 19.885L31.0233 22.08ZM34.82 27.2517L32.4533 29.6067L34.215 31.3783L36.5817 29.025L34.82 27.2517ZM31.01 30.3633C28.5933 30.59 22.3433 30.3883 15.5733 23.6583L13.81 25.43C21.1967 32.775 28.2283 33.135 31.2433 32.8533L31.01 30.3633ZM15.5733 23.6583C9.12167 17.2417 8.05167 11.8467 7.91834 9.50501L5.42167 9.64668C5.58834 12.5933 6.91334 18.5733 13.81 25.43L15.5733 23.6583ZM17.865 13.3583L18.3433 12.8817L16.5833 11.11L16.105 11.585L17.865 13.3583ZM18.7233 6.82335L16.6233 4.01668L14.6217 5.51668L16.7217 8.32168L18.7233 6.82335ZM9.555 3.40501L6.93834 6.00501L8.70167 7.77835L11.3167 5.17835L9.555 3.40501ZM16.985 12.4717C16.1017 11.585 16.1017 11.585 16.1017 11.5883H16.0983L16.0933 11.595C16.0141 11.6749 15.9432 11.7625 15.8817 11.8567C15.7917 11.99 15.6933 12.165 15.61 12.3867C15.4071 12.9589 15.3566 13.574 15.4633 14.1717C15.6867 15.6133 16.68 17.5183 19.2233 20.0483L20.9867 18.275C18.605 15.9083 18.0383 14.4683 17.9333 13.7883C17.8833 13.465 17.935 13.305 17.95 13.2683C17.96 13.2461 17.96 13.2428 17.95 13.2583C17.9351 13.2813 17.9184 13.3031 17.9 13.3233L17.8833 13.34L17.8667 13.355L16.985 12.4717ZM19.2233 20.0483C21.7683 22.5783 23.6833 23.565 25.1267 23.785C25.865 23.8983 26.46 23.8083 26.9117 23.64C27.1647 23.5475 27.4011 23.4146 27.6117 23.2467L27.695 23.1717L27.7067 23.1617L27.7117 23.1567L27.7133 23.1533C27.7133 23.1533 27.715 23.1517 26.8333 22.265C25.95 21.3783 25.955 21.3767 25.955 21.3767L25.9583 21.3733L25.9617 21.37L25.9717 21.3617L25.9883 21.345L26.0517 21.295C26.0672 21.285 26.0633 21.2861 26.04 21.2983C25.9983 21.3133 25.835 21.365 25.5067 21.315C24.8167 21.2083 23.3667 20.6417 20.9867 18.275L19.2233 20.0483ZM16.6233 4.01501C14.9233 1.74835 11.5833 1.38835 9.555 3.40501L11.3167 5.17835C12.2033 4.29668 13.7767 4.38835 14.6217 5.51668L16.6233 4.01501ZM7.92 9.50668C7.88667 8.93001 8.15167 8.32668 8.70167 7.78001L6.93667 6.00668C6.04167 6.89668 5.33667 8.15668 5.42167 9.64668L7.92 9.50668ZM32.4533 29.6067C31.9967 30.0633 31.5033 30.32 31.0117 30.365L31.2433 32.8533C32.4683 32.7383 33.47 32.1217 34.2167 31.38L32.4533 29.6067ZM18.3433 12.8817C19.985 11.25 20.1067 8.67168 18.725 6.82501L16.7233 8.32335C17.395 9.22168 17.295 10.4 16.5817 11.1117L18.3433 12.8817ZM34.21 23.8133C35.5717 24.5533 35.7833 26.2967 34.8217 27.2533L36.585 29.025C38.8183 26.8033 38.13 23.0983 35.4017 21.6167L34.21 23.8133ZM28.475 22.3983C29.115 21.7617 30.145 21.605 31.025 22.0817L32.2183 19.8867C30.4117 18.9033 28.1717 19.175 26.7117 20.625L28.475 22.3983Z" fill="#7678ED"/>
          </svg>

          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7517 5.41663H15.915C18.585 5.41663 20.7017 5.41663 22.375 5.61496C24.0917 5.81829 25.5083 6.24329 26.6883 7.21496C27.0894 7.54385 27.4556 7.9094 27.7867 8.31163C28.7567 9.49329 29.1817 10.9066 29.3867 12.625C29.4311 13.0116 29.4667 13.4222 29.4933 13.8566C30.8033 13.2033 31.9133 12.6666 32.8383 12.3633C33.925 12.0083 35.0767 11.865 36.1383 12.5216C37.2 13.1783 37.5883 14.2716 37.755 15.4016C37.9167 16.4933 37.9167 17.9283 37.9167 19.6533V20.3466C37.9167 22.0716 37.9167 23.5066 37.755 24.5966C37.5883 25.7283 37.2 26.8216 36.1383 27.4783C35.0767 28.135 33.925 27.9916 32.8383 27.6366C31.9133 27.3333 30.8033 26.7966 29.4933 26.1433C29.4678 26.5777 29.4317 26.9883 29.385 27.375C29.1817 29.0916 28.7567 30.5083 27.785 31.6883C27.4561 32.0894 27.0906 32.4555 26.6883 32.7866C25.5067 33.7566 24.0933 34.1816 22.375 34.3866C20.7 34.5833 18.585 34.5833 15.915 34.5833H15.75C13.08 34.5833 10.9633 34.5833 9.29 34.385C7.57333 34.1816 6.15667 33.7566 4.97667 32.785C4.57723 32.4544 4.20953 32.0872 3.87833 31.6883C2.90833 30.5066 2.48333 29.0933 2.27833 27.375C2.08167 25.7 2.08167 23.585 2.08167 20.915V19.0833C2.08167 16.4133 2.08167 14.2966 2.28 12.6233C2.48333 10.9066 2.90833 9.48996 3.88 8.30996C4.21059 7.91053 4.57774 7.54282 4.97667 7.21163C6.15833 6.24163 7.57166 5.81663 9.29 5.61163C10.9667 5.41663 13.0833 5.41663 15.7517 5.41663ZM27.0833 20.8333V19.1666C27.0833 16.3966 27.0817 14.4283 26.9033 12.9183C26.7283 11.4366 26.3967 10.56 25.8533 9.89663C25.6281 9.62305 25.3769 9.37188 25.1033 9.14663C24.44 8.60329 23.5633 8.27163 22.0817 8.09663C20.5717 7.91829 18.6033 7.91663 15.8333 7.91663C13.0633 7.91663 11.095 7.91829 9.585 8.09663C8.10333 8.27163 7.22667 8.60329 6.56333 9.14663C6.28975 9.37188 6.03859 9.62305 5.81333 9.89663C5.27 10.56 4.93833 11.4366 4.76333 12.9183C4.585 14.4283 4.58333 16.3966 4.58333 19.1666V20.8333C4.58333 23.6033 4.585 25.5716 4.76333 27.0816C4.93833 28.5633 5.27 29.44 5.81333 30.1033C6.03889 30.3777 6.28889 30.6277 6.56333 30.8533C7.22667 31.3966 8.10333 31.7283 9.585 31.9033C11.095 32.0816 13.0633 32.0833 15.8333 32.0833C18.6033 32.0833 20.5717 32.0816 22.0817 31.9033C23.5633 31.7283 24.44 31.3966 25.1033 30.8533C25.3778 30.6277 25.6278 30.3777 25.8533 30.1033C26.3967 29.44 26.7283 28.5633 26.9033 27.0816C27.0817 25.5716 27.0833 23.6033 27.0833 20.8333ZM29.5833 23.395L29.99 23.5966C31.6483 24.4266 32.7667 24.9816 33.6167 25.26C34.4483 25.5316 34.7 25.4266 34.8233 25.3516C34.9467 25.2766 35.1533 25.0966 35.2817 24.23C35.4133 23.3466 35.4167 22.0966 35.4167 20.2433V19.7566C35.4167 17.9016 35.4133 16.6533 35.2833 15.77C35.1533 14.9033 34.9467 14.725 34.8233 14.6483C34.7 14.5716 34.4483 14.4683 33.6167 14.74C32.7667 15.0183 31.65 15.5733 29.99 16.4033L29.5833 16.6066V23.395Z" fill="#7678ED"/>
          </svg>


          </div>
        </ChatHeader>
        <MessageContainer>
        {currentMessages.map((message, index) => (
            <div key={index}>{message.text}</div>
          ))}
        </MessageContainer>
        <MessageInput>
          <IconButton>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06 2.1875C6.9375 2.1875 6 2.1875 5.2575 2.2875C4.4725 2.3925 3.76375 2.625 3.195 3.19375C2.625 3.76375 2.3925 4.4725 2.2875 5.25625C2.1875 6 2.1875 6.9375 2.1875 8.06V8.19C2.1875 9.3125 2.1875 10.25 2.2875 10.9925C2.3925 11.7775 2.625 12.4862 3.19375 13.055C3.76375 13.625 4.4725 13.8575 5.25625 13.9625C6 14.0625 6.9375 14.0625 8.06 14.0625H8.19C9.3125 14.0625 10.25 14.0625 10.9925 13.9625C11.7775 13.8575 12.4862 13.625 13.055 13.055C13.625 12.4862 13.8575 11.7775 13.9625 10.9925C14.0625 10.25 14.0625 9.3125 14.0625 8.19V8.06C14.0625 6.9375 14.0625 6 13.9625 5.2575C13.8575 4.4725 13.625 3.76375 13.055 3.195C12.4862 2.625 11.7775 2.3925 10.9925 2.2875C10.25 2.1875 9.3125 2.1875 8.19 2.1875H8.06ZM4.52 4.52C4.6825 4.3575 4.93 4.22375 5.5075 4.145C6.11 4.065 6.92 4.0625 8.125 4.0625C9.33 4.0625 10.14 4.065 10.7438 4.14625C11.32 4.22375 11.5675 4.3575 11.73 4.52125C11.8925 4.685 12.0262 4.93 12.105 5.50625C12.185 6.11 12.1875 6.92 12.1875 8.125C12.1875 9.33 12.185 10.14 12.1037 10.7438C12.0262 11.32 11.8925 11.5675 11.7288 11.73C11.565 11.8925 11.32 12.0262 10.7438 12.105C10.14 12.185 9.33 12.1875 8.125 12.1875C6.92 12.1875 6.11 12.185 5.50625 12.1037C4.93 12.0262 4.6825 11.8925 4.52 11.7288C4.3575 11.565 4.22375 11.32 4.145 10.7438C4.06625 10.14 4.0625 9.33 4.0625 8.125C4.0625 6.92 4.065 6.11 4.14625 5.50625C4.22375 4.93 4.3575 4.6825 4.52125 4.52" fill="#1E1E1E"/>
          <path d="M22.8125 4.375C22.8125 4.12636 22.7137 3.8879 22.5379 3.71209C22.3621 3.53627 22.1236 3.4375 21.875 3.4375C21.6264 3.4375 21.3879 3.53627 21.2121 3.71209C21.0363 3.8879 20.9375 4.12636 20.9375 4.375V7.1875H18.125C17.8764 7.1875 17.6379 7.28627 17.4621 7.46209C17.2863 7.6379 17.1875 7.87636 17.1875 8.125C17.1875 8.37364 17.2863 8.6121 17.4621 8.78791C17.6379 8.96373 17.8764 9.0625 18.125 9.0625H20.9375V11.875C20.9375 12.1236 21.0363 12.3621 21.2121 12.5379C21.3879 12.7137 21.6264 12.8125 21.875 12.8125C22.1236 12.8125 22.3621 12.7137 22.5379 12.5379C22.7137 12.3621 22.8125 12.1236 22.8125 11.875V9.0625H25.625C25.8736 9.0625 26.1121 8.96373 26.2879 8.78791C26.4637 8.6121 26.5625 8.37364 26.5625 8.125C26.5625 7.87636 26.4637 7.6379 26.2879 7.46209C26.1121 7.28627 25.8736 7.1875 25.625 7.1875H22.8125V4.375Z" fill="#1E1E1E"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.81 15.9375H21.94C23.0637 15.9375 24 15.9375 24.7425 16.0375C25.5275 16.1425 26.2362 16.375 26.805 16.945C27.375 17.5137 27.6075 18.2225 27.7125 19.0075C27.8125 19.75 27.8125 20.6862 27.8125 21.81V21.94C27.8125 23.0638 27.8125 24 27.7125 24.7425C27.6075 25.5275 27.375 26.2362 26.805 26.805C26.2362 27.375 25.5275 27.6075 24.7425 27.7125C24 27.8125 23.0637 27.8125 21.94 27.8125H21.81C20.6875 27.8125 19.75 27.8125 19.0075 27.7125C18.2225 27.6075 17.5138 27.375 16.945 26.805C16.375 26.2362 16.1425 25.5275 16.0375 24.7425C15.9375 24 15.9375 23.0638 15.9375 21.94V21.81C15.9375 20.6862 15.9375 19.75 16.0375 19.0075C16.1425 18.2225 16.375 17.5137 16.945 16.945C17.5138 16.375 18.2225 16.1425 19.0075 16.0375C19.75 15.9375 20.6863 15.9375 21.81 15.9375ZM19.2563 17.895C18.68 17.9737 18.4325 18.1075 18.27 18.27C18.1075 18.4325 17.9738 18.68 17.895 19.2575C17.815 19.86 17.8125 20.67 17.8125 21.875C17.8125 23.08 17.815 23.89 17.895 24.4937C17.9738 25.07 18.1075 25.3175 18.27 25.48C18.4325 25.6425 18.68 25.7762 19.2575 25.855C19.86 25.935 20.67 25.9375 21.875 25.9375C23.08 25.9375 23.89 25.935 24.4937 25.8538C25.07 25.7763 25.3175 25.6425 25.48 25.4787C25.6425 25.315 25.7763 25.07 25.855 24.4937C25.935 23.89 25.9375 23.08 25.9375 21.875C25.9375 20.67 25.935 19.86 25.8538 19.2562C25.7763 18.68 25.6425 18.4325 25.4787 18.27C25.315 18.1075 25.07 17.9737 24.4937 17.895C23.89 17.815 23.08 17.8125 21.875 17.8125C20.67 17.8125 19.86 17.815 19.2563 17.895ZM8.06 15.9375C6.9375 15.9375 6 15.9375 5.2575 16.0375C4.4725 16.1425 3.76375 16.375 3.195 16.945C2.625 17.5137 2.3925 18.2225 2.2875 19.0075C2.1875 19.75 2.1875 20.6862 2.1875 21.81V21.94C2.1875 23.0638 2.1875 24 2.2875 24.7425C2.3925 25.5275 2.625 26.2362 3.19375 26.805C3.76375 27.375 4.4725 27.6075 5.25625 27.7125C6 27.8125 6.9375 27.8125 8.06 27.8125H8.19C9.3125 27.8125 10.25 27.8125 10.9925 27.7125C11.7775 27.6075 12.4862 27.375 13.055 26.805C13.625 26.2362 13.8575 25.5275 13.9625 24.7425C14.0625 24 14.0625 23.0638 14.0625 21.94V21.81C14.0625 20.6862 14.0625 19.75 13.9625 19.0075C13.8575 18.2225 13.625 17.5137 13.055 16.945C12.4862 16.375 11.7775 16.1425 10.9925 16.0375C10.25 15.9375 9.3125 15.9375 8.19 15.9375H8.06ZM4.52 18.27C4.6825 18.1075 4.93 17.9737 5.5075 17.895C6.11 17.815 6.92 17.8125 8.125 17.8125C9.33 17.8125 10.14 17.815 10.7438 17.895C11.32 17.9737 11.5675 18.1075 11.73 18.27C11.8925 18.4325 12.0262 18.68 12.105 19.2575C12.185 19.86 12.1875 20.67 12.1875 21.875C12.1875 23.08 12.185 23.89 12.1037 24.4937C12.0262 25.07 11.8925 25.3175 11.7288 25.48C11.565 25.6425 11.32 25.7762 10.7438 25.855C10.14 25.935 9.33 25.9375 8.125 25.9375C6.92 25.9375 6.11 25.935 5.50625 25.8538C4.93 25.7763 4.6825 25.6425 4.52 25.4787C4.3575 25.315 4.22375 25.07 4.145 24.4937C4.065 23.89 4.0625 23.08 4.0625 21.875C4.0625 20.67 4.065 19.86 4.14625 19.2562C4.22375 18.68 4.3575 18.4325 4.52125 18.27" fill="#1E1E1E"/>
          </svg>
          </IconButton>
          <MessageInputContainer>
          <Input placeholder="Add New message" />
          <IconButton2>
          <svg width="41" height="25" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.8 16.3401C27.8 17.4451 26.457 18.3401 24.8 18.3401C23.143 18.3401 21.8 17.4451 21.8 16.3401C21.8 15.2351 23.143 14.3401 24.8 14.3401C26.457 14.3401 27.8 15.2351 27.8 16.3401Z" fill="#132C33"/>
          <path d="M14.313 10.2101C14.4069 10.0943 14.5255 10.001 14.6601 9.93701C14.7947 9.87299 14.9419 9.83988 15.091 9.84009H34.509C34.6581 9.83996 34.8052 9.87315 34.9398 9.93723C35.0744 10.0013 35.1929 10.0947 35.2868 10.2105C35.3806 10.3263 35.4474 10.4616 35.4822 10.6065C35.517 10.7514 35.519 10.9023 35.488 11.0481L33.149 22.0481C33.1014 22.2721 32.9782 22.4731 32.8002 22.6172C32.6222 22.7614 32.4001 22.8401 32.171 22.8401H17.43C17.2009 22.8401 16.9788 22.7614 16.8008 22.6172C16.6228 22.4731 16.4996 22.2721 16.452 22.0481L14.113 11.0481C14.0821 10.9024 14.0841 10.7517 14.1188 10.6069C14.1536 10.462 14.2203 10.3268 14.314 10.2111L14.313 10.2101ZM16.325 11.8401L18.238 20.8401H31.361L33.274 11.8401H16.325ZM16.8 2.84009C16.8 2.57487 16.9054 2.32052 17.0929 2.13298C17.2804 1.94544 17.5348 1.84009 17.8 1.84009H31.8C32.0652 1.84009 32.3196 1.94544 32.5071 2.13298C32.6946 2.32052 32.8 2.57487 32.8 2.84009V6.84009H30.8V3.84009H18.8V6.84009H16.8V2.84009Z" fill="#132C33"/>
          </svg>
          </IconButton2>
          </MessageInputContainer>
          
          <IconButton>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
          <rect width="30" height="30" fill="url(#pattern0_19_766)"/>
          <defs>
          <pattern id="pattern0_19_766" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_19_766" transform="scale(0.0111111)"/>
          </pattern>
          <image id="image0_19_766" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD7ElEQVR4nO2dS0tVURTHf6ClUdSwzKDC+gI9RhVFWOEgskEFPaD3xEArTJs1yxyF4Nfo5aDQD1CEYdmkSTXpnY8adQVzxYFVxMXHLffZZ51z1w/+IJd7Ze8/m733WmftfcBxHMdxHMdxHMepmBpgO3AO6AXuAaPAa2ACmFJN6Gej+p1b+ptt+j+cWVgHdAADwHdAFqlvwAOgHWikylkGnAKGgJ8BzJ1L08AgcBKop4pYoSPtfYrmzqUvwA1gFQVmCdAJjGdgcLmSNlzVNhWKXcBLAwaX6xXQTAFI5sR+YMaAqXMpaVsfUEdO2QA8MWCkVKhnwCZyRnOgbZpEVrIt3EtOOAz8MGCa/KeSYOgYxrmY8p5YIinpwwWM0qrBQdYmSUCzj2KMZF4rGTBHUphG9mOEzTld+OQfFsimrE2u022RFFzDWe+z+w2YIJGUBDWZhdWWIz4JrKSvu2ObXAu8MNB5iayXsRNRnQY6LRnpcsx88piBDktGGlMPUqfLQGclYyW57NQfP30yEkh0AWtUXZEDpg9pPxY7ZcBkUWPLaYls9ok0jR4yYLLoKJ6NAxEzhw/TMrnRUNJozTztjGX2z7RKGToMGCyq7gXaGmsauZSG0QMGDBZVSc3M2uy7oU1OSqwmDRgsZTuPgwu0O+1pZDJ0+dl2A8aK0ZG9NaTR5w2YKkZH9pmQRvcaMFSMmn0zpNH3DZgpRs2+E9LovKRESxnM2SMhjX4bcNR1Ag1kS0iz34RsWKi06DXs0B2oT19DNmoqUKMasMPqgNOVOaPXYoe1Fo0eSzG9mRXXLU4dIRfDLgMj2+xi6Ns74mzvPGAhTsDiIThxQvBzgeYzKWBS6XRIoz1NypxGbwlptCf+iZP4R89WixGVDCT8gy+Ev2k3YLBUGPjEejjblobRSZDh5Qb8MXl6gbKHRTFoYDRL0Qto0KsYxGhdR0vkkrDjaRc5fjSyd+7WtGuD/h3T5Pcx7v6o5iJ0UV0hAss1NShVqrFYhehoIbZUqdqJfFjouYFOS9EPCyXs9ONv8egzMMokkm6TIXV6fFcKrqfAUjKmSQ+mS0E1CWzECHtyfuuMzBMY7cMYhwwlnSTQGZUjGOVCQa76mdaacNO05nwaKVm84me+q3++5XTh20POWA88NmCeVKhhC1f6LGaf3Wc8gpzRYCTzfXKocP2FAVPLlbRpBwWjVi8VsZBi/apZuKRNhWW5dvJdBgZ/1ou6V1JF1OtVDI9SDnSm9UHq8Wq7en42GvQA+119G8VizZ3Q/9WWZklA3qnRerazQI9WA43oq0DG/3o9yLh+NqLf6dFTrMlv/fUgjuM4juM4juM4VMgvsFJQNF1us8cAAAAASUVORK5CYII="/>
          </defs>
          </svg>
          </IconButton>
          <IconButton>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <rect width="30" height="30" fill="url(#pattern0_19_764)"/>
            <defs>
            <pattern id="pattern0_19_764" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_19_764" transform="scale(0.0111111)"/>
            </pattern>
            <image id="image0_19_764" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEsklEQVR4nO2dy4sdRRSHvwjOjIgRwY0DYoyMiq9kEpIovhI1/hW6cCEuXAhCMhEXmoCQjGKMLmKiG10oSHzgg+ADRHElEnwlRgR3RjDJjBgFE50pOVCDl6Gruvpxu6r6ng8OXO7crj79m3NPn3r1BUVRFEVRFOV/7gVeAo4Df1r7ATgIbB34nFKTa4DPAVNinwFX1z3JqHMnMB8g8pLNAXfEdjrHSJ6vIPKg2FOxnc+JT2uIPJhGlAC2NhB5ye4OOdGo83ILQh+IfRE5cLwFoaX0U0o404LQ0oZSgmnJlBJU6I4wGtEqdK8wGtEqdK8wGtEqdK8wGtEqdK8wGtEqdK8wGtEqdK8wGtEqdK8wGtEqdK8wGtEqdK8wGtH1GAdmgRPW9gBjEYWu6k82zBaIsDui0FX9yYZfCy5M3osldFV/ssFUFGLYQvd2HYhRoVVooxHN0FPH93YPzCN9WeZrEksdDwNX0kNMYkL3FqNC91fonxhBTMdCvwpcxAhiOhJ6AdhewS8Z89gC7ALeBo7Z7XPngLP29VH7t53AZnvMSAv9L3BfoD/rbVn3e43zzNuNSOsYQaEXgPsD/BBxPmzpHiB2GFhLQpx1OHphS5uFHis5/wXAPhv1pmX7B9gLTJAAcw4nVzs+/2OFC309YKvzt0MQeLl9ncLW6KMO525tuKHzZ+Biz3k3Aac6EHnJTgIbici7DsdcFcI9gRcmFYNP5Db2K1a1MzHFfsLh1CeeY8qe0fFaSbroMpKLIjtKGrnL4ZDcJCcdx6z2lF9S567y3Pi6yMkhObvzG+T5wGmHQ097jrvZ8cwOqYFd7GsgjvzjtwGXWdvuqZhC7FkicMDhzB/2olxI5H687JjrPXVykxKu6J4x07D0W0PH3FRS+K8oOV6i+wXgFc9nmnZGitLYZMM2PyAC73scerRh2+sbCiLmokmbi8A0HXOD56stDj3YoO2DiQot9iIR2F0yZrEtII0sZ7zmAFFXQs/FWAk1ARwpcewjT9lXxJYWxBim0MY+Wq5zrgB+K3HsL1uqXR7Q3q4MhH6SSEwHPtdOcvoXwOPAJY623slA6LeIyDrHOjiXuernYxU7I21RpVMja0iisgr4MlBoV94OGdeoMsVVlZnA8Y/ojAFPBUSGjGMUERJRVW6uVQnp1PxNQlwLHLJlXpGzMmZShApdk+uA5woqk5UNUod8vYfFjlxSh4vz7AC+XMgbnqHR0JvhTMspZNK2mcXNsAq3ZVzevUlGPOB4f2cGQsssUzY8n3EX/HYy4ivPoNJ8wkKfzm173QJwaYbDpPvJDAM85OnOpyj0YgrLxsYHdrCGOi7ddReHE5zKeo8EmK3pvGvCc62dEK0rykzNzojLxJcbSYATQ8h5exsIM9ipqdIZMTWWUmQh9DnPrwiFzOB0Yd94BsE6Z0+DC5H1fC6m7NhCLJFljOYqEmLciv1LzQuSxZAuNkZc5LiBEWNDwNxkmyYdk1sYUabsgsNhi3wktXQRgwm74LBJ6ecyafOZVLZWpMIauxZusQWBF21nJIk6OVWm7TKtuZp5eH8K3eqcGLM/NCmLW2TdhcyCyLSYdFLE5PV3dtBePiNDnbVH4f4DUTYhqK50XBcAAAAASUVORK5CYII="/>
            </defs>
            </svg>
          </IconButton>
        </MessageInput>
    </ChatContainerWrapper>
  );
};

export default ChatContainer;