$(document).ready(function(){
 
    $("#entrar1").submit(function(e){
        e.preventDefault();

        console.log("funcionando");
        

        const firebaseConfig = {
            apiKey: "AIzaSyDYvov66CiqBlKUQfGQb4FdIa2nZ6s-Si8",
            authDomain: "estoque-876f2.firebaseapp.com",
            projectId: "estoque-876f2",
            storageBucket: "estoque-876f2.appspot.com",
            messagingSenderId: "48035127557",
            appId: "1:48035127557:web:6133d76f54cc9af160576c",
            measurementId: "G-WRRZRQZSPY"
          };

        
          firebase.initializeApp(firebaseConfig)
    const db = firebase.firestore()
    let auth = firebase.auth()
    
    function login() {
        let userEmail = $("#email").val();
        let userPassword = $("#senha").val();

        auth.signInWithEmailAndPassword(userEmail,userPassword)
            .then(loggedser => {
            console.log(auth.currentUser);

            alert("Login realizado com sucesso!");

            //Insira a próxima página que o sistema deve ir!
            location.href = "http://127.0.0.1:5500/Projetos/Estoque/Painel/painel.html";

        }).catch(error => {
            console.log(error)

            alert("Erro ao efetuar o login!");
        })
    }
    login();
    

        
    })
    
    });  