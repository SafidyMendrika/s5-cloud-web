import { useEffect, useState } from "react";
import ContainerMessage from "../../components/front-office/ContainerMessage";
import ListeMessage from "../../components/front-office/ListeMessage";
import { API_URL } from "../../context/UrlContext";
import { dataMessage } from "../../data/front-office";
import { jwtDecode } from "jwt-decode";
import { format } from "date-fns";

const Message = () => {
  const authUserClientToken = localStorage.getItem("authUserClient");
  const currentIdUser = authUserClientToken
    ? jwtDecode(authUserClientToken).idutilisateur
    : null;

  const [messages, setMessages] = useState(null);

  const [indexMessageActive, setIndexMessageActive] = useState(0);
  const [messageActive, setMessageActive] = useState(null);

  const [formDataMessage, setFormDataMessage] = useState({
    id_discussion: "",
    id_utilisateur: currentIdUser,
    content: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("authUserClient")) window.location.href = "/";
    document.querySelector("footer").style.display = "none";
    fetchMessage();
  }, []);

  useEffect(() => {
    setMessageActive(
      messages
        ? messages.length > 0
          ? messages[indexMessageActive]
          : []
        : null
    );
  }, [messages, indexMessageActive]);

  const fetchMessage = () => {
    fetch(`${API_URL}/discussions/utilisateurs/${currentIdUser}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authUserClient"),
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setMessages(data.data);
          });
        }
      })
      .catch((err) => console.error(err));

    // setMessages(dataMessage);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (formDataMessage.content === "") return;

    fetch(`${API_URL}/discussions/message`, {
      method: "POST",
      body: JSON.stringify(formDataMessage),
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authUserClient"),
        "Content-Type": "application/json",
      },
    }).catch((err) => console.error(err));

    let dateNow = new Date();
    let updatedMessages = messageActive;

    updatedMessages.messages.push({
      user: {
        id_utilisateur: currentIdUser,
      },
      content: formDataMessage.content,
      date_envoie:
        format(dateNow, "yyyy/MM/dd") + " " + format(dateNow, "HH:mm:ss"),
    });

    setMessageActive(updatedMessages);
    setFormDataMessage({ ...formDataMessage, content: "" });

    setTimeout(() => {
      document.querySelector(".messages").scrollTop =
        document.querySelector(".messages").scrollHeight;
    }, 10);
  };

  const handleMessageActive = (index) => {
    setIndexMessageActive(index);
    setFormDataMessage({
      ...formDataMessage,
      id_discussion: messages[index].id,
    });
  };

  return (
    <section className="container py-5">
      <div
        className="d-flex justify-content-space-between"
        style={{ gap: "3rem" }}
      >
        <div id="liste-message">
          <ListeMessage
            messages={messages}
            currentIdUser={currentIdUser}
            indexMessageActive={indexMessageActive}
            handleMessageActive={handleMessageActive}
          />
        </div>
        <div className="w-100" id="container-message">
          <ContainerMessage
            messageActive={messageActive ? messageActive.messages : null}
            currentIdUser={currentIdUser}
            formDataMessage={formDataMessage}
            setFormDataMessage={setFormDataMessage}
            handleSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default Message;
