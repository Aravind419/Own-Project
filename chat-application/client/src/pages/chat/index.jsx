import { useAppStore } from "@/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

const Chat = () => {

  const { userInfo } = useAppStore();
  const navigate = useNavigate();
  useEffect(() => { 
    if (!userInfo.profileSetup) {
      navigate("/profile");
      
    }
  }, [userInfo, navigate])
  
  return
  <div>Chat</div>;
  
};

export default Chat;