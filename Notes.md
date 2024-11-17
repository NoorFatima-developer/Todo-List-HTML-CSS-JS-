##


getItem aur setItem ka Summary Explanation 🚀
getItem aur setItem ka Kaam kya hai?
localStorage.getItem("key")

Iska kaam localStorage se data ko retrieve (le kar aana) karna hai.
Agar key ka data nahi hai toh null return karega.
Agar hum getItem na karein, toh purane data ko access nahi kar sakenge.
localStorage.setItem("key", "value")

Iska kaam browser ke localStorage mein data save karna hai.
Data key-value pairs ki form mein store hota hai, aur sirf strings save hoti hain.
Agar aap object ya array save karna chahein, toh JSON.stringify() use karte hain.
Tumhare Code mein getItem aur setItem ka role
getItem("users")
Yeh userArray ke data ko browser se wapas le kar aata hai agar data pehle se localStorage mein saved ho.
Tumhare code mein:
javascript
Copy code
const objStr = localStorage.getItem("users");
if (objStr != null) {
    userArray = JSON.parse(objStr);
}
Yeh kya karta hai?

localStorage.getItem("users") localStorage se "users" key ka data fetch karega.
Agar data mil gaya (null nahi hai), toh JSON.parse(objStr) se us data ko string se array mein convert karenge.
Converted array ko userArray mein assign karenge taake baaki ka code is array ke saath kaam kar sake.
Agar getItem na karein toh kya hoga?

Purani tasks list mein dikhengi hi nahi.
Jab page refresh kareinge, toh sirf naye tasks dikhai denge, aur pehle wale delete ho jayenge.
setItem("users", str)
Yeh tumhara updated data localStorage mein save karta hai.
Tumhare code mein:
javascript
Copy code
function saveInfo(arr) {
    let str = JSON.stringify(arr); // Array ko string mein convert karna.
    localStorage.setItem("users", str); // String ko localStorage mein save karna.
}
Yeh kya karta hai?

userArray ko string mein convert karte hain using JSON.stringify() (kyunki localStorage sirf strings store kar sakta hai).
localStorage.setItem("users", str) "users" key ke saath string ko save kar deta hai.
Agar setItem na karein toh kya hoga?

Jo naye tasks aap add karenge, wo localStorage mein save nahi honge.
Refresh karte hi sab naye tasks bhi remove ho jayenge kyunki localStorage mein kuch save nahi hua.
TL;DR (Summary)
getItem (Retrieve/Lehna):

LocalStorage se data nikalta hai taake purana data page reload hone ke baad bhi visible rahe.
Agar na karein, toh purane tasks dikhai nahi denge.
setItem (Save/Karna):

Data ko localStorage mein save karta hai taake wo permanently store ho jaye.
Agar na karein, toh naye tasks refresh hone ke baad delete ho jayenge.
Result:

getItem + setItem dono important hain taake localStorage ke through tumhara data persist kare (refresh ke baad bhi rahe). 🎉