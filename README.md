<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://i.ibb.co/DKKn11n/clone-copy-document.png" alt="My Reads"></a></p>

<h1 align="center">WhatsApp Clone Using React Native</h1>

<p align="center">
<h5>Description: </h5>
This is an open source clone of whatsapp using the react-native library maintained by facebook, the goal of this project is to build an application exactly like the original application, however using a different technical approach. This project is not for profit and is used only as an object of study on development.

<h5>Stack Project:</h5>
<i>React Native, Redux, Redux Thunk, React Native Router Flux, Firebase</i>
</p>

<hr />

<p align="center">
  <img src="https://i.ibb.co/263MT5s/whatsapp-Print-Screen.jpg" alt="WhatsApp clone print screen" border="0">
</p>

### Running
```shell
git clone git@github.com:filipenatanael/whatsapp-clone-react-native.git
cd whatsapp-clone-react-native
npm install
react-native run-android or react-native run-ios
```

### Firebase Configuration

To set up the firebase, you need to rename **FirebaseSettings.js.example** to **FirebaseSettings.js**. Then, add your apiKey configuration.

```javascript
// whatsapp-clone-react-native/source/resources/FirebaseSettings.js.example

export const config = {
  apiKey: "YOUR-FIREBASE-API-KEY",
  authDomain: "YOUR-FIREBASE-DOMAIN",
  databaseURL: "YOUR-FIREBASE-DATABASE",
  projectId: "YOUR-FIREBASE-PROJECT-ID",
  storageBucket: "YOUR-FIREBASE-STORAGE",
  messagingSenderId: "YOUR-FIREBASE-MASSAGING"
}
```

### Firebase Structure

```json
{
  "messages" : {
    "ZmlsaXBlbmF0YW5hZWwxQGxpdmUuY29t" : {
      "anVsaWFuYUBleGFtcGxlLmNvbQ==" : {
        "-LJHKFv3DtehjTsPivri" : {
          "message" : "Hello, how are you?",
          "type" : "send"
        },
        "-LJHKFv3DtehjTsPivrt" : {
          "message" : "Ça va et toi? :)"
        },
        "-LJHQQy12wRyzRp9q_e8" : {
          "message" : "I'm also fine, Hi.. Let's go out today.",
          "type" : "send"
        },
        "-LJHpYvgmDXFPAl8xznz" : {
          "message" : "Yeah, sure!",
          "type" : "receive"
        },
        "-LJHpdJx0Mc3wTdyWZkD" : {
          "message" : "Where do you wanna go?",
          "type" : "receive"
        },
        "-LJHu8GfIwQKU2T7SZ7-" : {
          "message" : "I want to go to the movies to watch the new Marvel movie",
          "type" : "send"
        },
        "-LJM02ycsXF-4KKCEwzt" : {
          "message" : "I'm leaving home now",
          "type" : "send"
        },
      }
    },
    "anVsaWFuYUBleGFtcGxlLmNvbQ==" : {
      "ZmlsaXBlbmF0YW5hZWwxQGxpdmUuY29t" : {
        "-LJHKFy6pBl_3JnbbJ29" : {
          "message" : "Hello, how are you?",
          "type" : "receive"
        },
        "-LJHpYsPW-X-4VH7_6im" : {
          "message" : "Ola filipe",
          "type" : "send"
        },
        "-LJHpdGQoX4B4T5dfQbh" : {
          "message" : "Tudo bem?",
          "type" : "send"
        }
      }
    }
  },
  "user_conversations" : {
    "ZmlsaXBlbmF0YW5hZWwxQGxpdmUuY29t" : {
      "anVsaWFuYUBleGFtcGxlLmNvbQ==" : {
        "email" : "juliana@example.com",
        "lastMessage" : "I'm leaving home now",
        "name" : "Juliana Freitas"
      }
    },
	"anVsaWFuYUBleGFtcGxlLmNvbQ==" : {
      "ZmlsaXBlbmF0YW5hZWwxQGxpdmUuY29t" : {
        "email" : "example@example.com",
        "lastMessage" : "I'm leaving home now",
        "name" : "Filipe Natanael"
      }
    }
  },
  "users" : {
    "ZmlsaXBlbmF0YW5hZWwxQGxpdmUuY29t" : {
      "-LITnhW1yLKAwwvAyPJG" : {
        "name" : "Filipe Natanael"
      }
    },
    "anVsaWFuYUBleGFtcGxlLmNvbQ==": {
      "-L2NfSXjEWlBdxICeLGz" : {
        "name" : "Juliana Freitas"
      }
    },
	"dG9ueXN0YXJrQGV4ZW1wbGUuY29t==": {
      "-L2NfSXjEWlBdxICeLG2" : {
        "name" : "Tony Stark"
      }
    }
  },
  "users_of_contacts" : {
    "ZmlsaXBlbmF0YW5hZWwxQGxpdmUuY29t": {
      "-LIYrkTkJ28REbAhD0Xz" : {
        "email" : "juliana@example.com",
        "name" : "Juliana Freitas",
        "profileImage" : "https://bootdey.com/img/Content/avatar/avatar5.png"
      },
	  "-LIYrkTkJ28REbAhD0X5" : {
        "email" : "tonystark@exemple.com",
        "name" : "Tony Stark",
        "profileImage" : "https://bootdey.com/img/Content/avatar/avatar5.png"
      }
    },
    "anVsaWFuYUBleGFtcGxlLmNvbQ==": {
      "-LJHjLeuvZrC-GTIEL_3" : {
        "email" : "example@example.com",
        "name" : "Filipe Natanael",
        "profileImage" : "https://bootdey.com/img/Content/avatar/avatar5.png"
      }
    }
  }
}


```

### References

- [React Native Docs](https://facebook.github.io/react-native/docs/getting-started.html)
- [Firebase](https://firebase.google.com/?hl=pt-br)
- [WhatsApp Messenger](https://play.google.com/store/apps/details?id=com.whatsapp&hl=pt_BR)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Community - Android Developers](https://developer.android.com/support)
