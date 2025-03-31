import React, { useEffect, useState } from "react";
import ConversationList from "../components/ConversationList";
import { fetchConversations } from "../services/api";

const Dashboard: React.FC = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      const data = await fetchConversations();
      setConversations(data);
    };

    getConversations();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ConversationList conversations={conversations} />
    </div>
  );
};

export default Dashboard;
