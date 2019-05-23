const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false;
    },
    uiShown: () => {
      document.getElementById("loader").style.display = "none";
    }
  },
  signInFlow: "popup",
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui-auth-container", uiConfig);
