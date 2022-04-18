console.clear();

const args = require("minimist")(process.argv.slice(2));
const fetch = require("xhr-request");

// args['username']
var username = args["username"];
var url = `https://api.allorigins.win/get?url=${encodeURIComponent(
  `https://www.duolingo.com/2017-06-30/users?username=${username}`
)}`;
var user_agent =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36";
var params = {
  referrerPolicy: "strict-origin-when-cross-origin",
  body: null,
  method: "GET",
  mode: "cors",
  credentials: "omit",
};

function duofetch() {
  fetch(url, params, function (err, data) {
    if (err) throw err; 

    const obj = JSON.parse(JSON.parse(data).contents);
    var streak = obj.users[0].streak;
    var nick = obj.users[0].name;
    var user = obj.users[0].username;
    var current_lang_id = obj.users[0].currentCourseId;
    var motivation = obj.users[0].motivation;
    var lang = obj.users[0].fromLanguage;
    var premium = obj.users[0].hasPlus;
    var total_xp = obj.users[0].totalXp;
    var id = obj.users[0].id;

    const duo_layout = `          
        /////////  /////////         made_with ♥ ~barn
       ////*****////******///        -----------------
 //    //*   & .****  &   *//    //  🕶️  name: ${nick}
 ////////*  &&& *,,* &&&  *////////  👤 user: ${user}
  ///////********((********///////   ⚡ streak: ${streak}
    /////////////**/////////////     🏫 current lang: ${current_lang_id}
        ////////////////////         🐣 motivation: ${motivation}
         //////////////////          👑 plus: ${premium}
           //////////////            🏁 lang: ${lang}
               //////                💎 total xp: ${total_xp}
          *****     *****            💻 user id: ${id}
`;
    console.log(duo_layout);
  });
}

duofetch();