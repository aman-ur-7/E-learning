import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Button } from "@chakra-ui/react";
import { IoMdSend } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { GiRobotGolem } from "react-icons/gi";

const Ai = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    // organization: "org-c4dBBnxjAU4EgYEiKxjYjVjZ",
    // apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  delete configuration.baseOptions.headers["User-Agent"];

  const chat = async (e, message) => {
    e.preventDefault();

    setLoading(true);

    if (!message) return;
    setIsTyping(true);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");

    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a EbereGPT. You can help with graphic design tasks",
          },
          ...chats,
        ],
      })
      .then((res) => {
        msgs.push(res.data.choices[0].message);
        setChats(msgs);
        setIsTyping(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="ai-page">
      <section className="ai-chats">
        {chats && chats.length
          ? chats.map((chat, index) => (
              <div
                key={index}
                className={chat.role === "user" ? "user_msg" : "ai"}
              >
                <div className="msg-content">
                  {/* <b>{chat.role.toUpperCase()}</b> */}
                  <span>
                    {chat.role === "user" ? (
                      <CiUser size={28} />
                    ) : (
                      <GiRobotGolem size={28} />
                    )}
                  </span>
                  <span>{chat.content}</span>
                </div>
              </div>
            ))
          : null}
      </section>
      <form className="ai-form" action="" onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          className="ai-button"
          size={8}
          type="submit"
          isLoading={loading}
          colorScheme="teal"
          variant="solid"
        >
          <IoMdSend />
        </Button>
      </form>
    </div>
  );
};

export default Ai;
