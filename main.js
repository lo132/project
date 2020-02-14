// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyA54JnC7qFqf4HFdQHTLMHOPp_Hs61eaZA",
    authDomain: "project-april-d4fcb.firebaseapp.com",
    databaseURL: "https://project-april-d4fcb.firebaseio.com",
    projectId: "project-april-d4fcb",
    storageBucket: "project-april-d4fcb.appspot.com",
    messagingSenderId: "872435282868",
    appId: "1:872435282868:web:98124837005114859278e1",
    measurementId: "G-Q00FYEC9GR"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-Form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
  
    // Clear form
    document.getElementById('contact-Form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }