import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
      <div className="w-16 h-16 bg-[#d65a38]/10 rounded-full flex items-center justify-center border border-[#d65a38]/20">
        <MessageCircleIcon className="w-8 h-8 text-[#d65a38]" />
      </div>

      <div>
        <h4 className="text-[#2f2926] font-medium mb-1">
          No conversations yet
        </h4>

        <p className="text-[#7a6d62] text-sm px-6">
          Start a new chat by selecting a contact from the contacts tab
        </p>
      </div>

      <button
        onClick={() => setActiveTab("contacts")}
        className="px-4 py-2 text-sm font-medium rounded-md 
        bg-[#d65a38] text-white hover:bg-[#b94d2f] transition-colors"
      >
        Find contacts
      </button>
    </div>
  );
}
export default NoChatsFound;
