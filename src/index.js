import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

// import { seedDatabase } from './seed';

const config = {
    apiKey: "AIzaSyBBdV4bk9SpWI6tbiitra7YcPmWok024Zc",
    authDomain: "netflix-onja-anita.firebaseapp.com",
    projectId: "netflix-onja-anita",
    storageBucket: "netflix-onja-anita.appspot.com",
    messagingSenderId: "482439636898",
    appId: "1:482439636898:web:4b3d865a4cd0605c13b4fb"
}

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);
