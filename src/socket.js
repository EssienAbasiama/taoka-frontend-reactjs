import io from "socket.io-client"; // Add this

let socket;

const connectSocket = (user_id) => {
  socket = io("http://localhost:9090/", {
    query: `id=${user_id}`,
  });

  // const connectSocket = (email) => {
  //   socket = io("http://localhost:9090/", {
  //     query: `email=${email}`,
  //   });
  // System.out.println("Socket Connected Successfully");
}; // Add this -- our server will run on port 9090, so we connect to it from here

export { socket, connectSocket };
