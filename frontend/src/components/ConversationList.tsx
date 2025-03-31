import React from "react";

interface Conversation {
  id: string;
  name: string;
  messages: string[];
}

interface ConversationListProps {
  conversations: Conversation[];
}

const ConversationList: React.FC<ConversationListProps> = ({ conversations }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Conversazioni</h2>
      <ul>
        {conversations.map((conv) => (
          <li key={conv.id} className="p-4 border-b">
            <h3 className="text-lg">{conv.name}</h3>
            <p>{conv.messages[conv.messages.length - 1]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
