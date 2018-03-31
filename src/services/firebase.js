import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAL1HfmQdfA6Z97CB2uxnDveA5PzWFohbo',
  authDomain: 'cropchat-82de2.firebaseapp.com',
  databaseURL: 'https://cropchat-82de2.firebaseio.com',
  storageBucket: 'cropchat-82de2.appspot.com',
  messagingSenderId: '993018835895'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
