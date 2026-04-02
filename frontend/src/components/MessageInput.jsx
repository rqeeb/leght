import React from "react";
import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";

function MessageInput() {
  const [text,setText] = useState("");
  const [imagePreview,setImagePreview] = useState(null);

  const fileInputRef = useRef(null);

  const {sendMessage,isSoundEnabled} = useChatStore();

  return (
    <div>MessageInput</div>
  );
}

export default MessageInput;
