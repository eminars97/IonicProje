export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyC_cQwEttf2lMuBT6CHJlGfNELOosWlZ0s",
    authDomain: "mobil-proje-71823.firebaseapp.com",
    databaseURL: "https://mobil-proje-71823.firebaseio.com",
    projectId: "mobil-proje-71823",
    storageBucket: "mobil-proje-71823.appspot.com",
    messagingSenderId: "532016174956",
    appId: "1:532016174956:web:c0b220ee582abe13e0c549",
    measurementId: "G-YTNDF5KVKZ"
  };

  export const snapshotToArray = snapshot => {
    let returnArray = [];
    snapshot.forEach(element => {
      let item = element.val();
      item.key = element.key;
      returnArray.push(item);
    });
    return returnArray;
  }