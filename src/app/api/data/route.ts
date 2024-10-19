import { NextResponse } from "next/server";

const quotes = [
    { author: "Allama Iqbal", quote: "Sitaron se aage jahan aur bhi hain, abhi ishq ke imtihan aur bhi hain" },
    { author: "Unknown", quote: "Zindagi ek exam hai, lekin syllabus kisi ko nahi pata" },
    { author: "Mirza Ghalib", quote: "Ishq par zor nahi, hai yeh woh aatish Ghalib, jo lagaye na lage, aur bujhaye na bujhe" },
    { author: "Albert Einstein", quote: "Relativity ka matlab hai ke jab aap kisi khoobsurat larki ke sath baithe hain to 1 ghanta 1 minute lagta hai, aur jab aap garam tawa par baithe hain to 1 minute 1 ghanta lagta hai" },
    { author: "Allama Iqbal", quote: "Khudi ko kar buland itna ke har taqdeer se pehle, Khuda bande se khud pooche bata teri raza kya hai" },
    { author: "Unknown", quote: "Dosti itni gehri ho ke WiFi ka password yaad ho jaye" },
    { author: "Yoda", quote: "Coding seekhna hai tumhe, lekin debugging zindagi bhar karni paregi" },
    { author: "Steve Jobs", quote: "iPhone khareed lo, phir zindagi mein sirf ek hi tension rahegi - charger dhoondhne ki" },
    { author: "Allama Iqbal", quote: "Khudi ka sirr-e-nihan, La Ilaha Il Allah" },
    { author: "Unknown", quote: "Zindagi ek update ki tarah hai, kabhi hang ho jati hai, kabhi crash" },
    { author: "Newton", quote: "Gravity ne sab kuch neeche kheencha, lekin tumhara attitude abhi bhi upar hai" },
    { author: "Mirza Ghalib", quote: "Hum ko un se wafa ki hai ummed, jo nahin jaante wafa kya hai" },
    { author: "Allama Iqbal", quote: "Tu shaheen hai, parwaz hai kaam tera, tere saamne aasman aur bhi hain" },
    { author: "Unknown", quote: "Dosti woh hai jahan dono ke pass same mobile data plan ho" },
    { author: "Albert Einstein", quote: "E = mc², jahan 'E' entertainment hai, 'm' memes hain, aur 'c' chai ki speed hai" },
    { author: "Yoda", quote: "Patience rakhna, young Padawan, jab tak tumhara code compile ho raha ho" },
    { author: "Steve Jobs", quote: "Ek iPhone khareedne ke baad, tumhari zindagi ka update ho jayega, lekin wallet ka downgrade" },
    { author: "Allama Iqbal", quote: "Apne man mein doob kar pa ja suragh-e-zindagi, tu agar mera nahin, apna to ho sakta hai" },
    { author: "Unknown", quote: "Zindagi ek error message ki tarah hai, samajh mein nahi aati lekin face karni parti hai" },
    { author: "Newton", quote: "Har action ka reaction hota hai, lekin har text ka reply nahi" },
    { author: "Mirza Ghalib", quote: "Ishq ne 'Ghalib' nikamma kar diya, warna hum bhi aadmi the kaam ke" },
    { author: "Allama Iqbal", quote: "Khudi ko kar buland itna ke har taqdeer se pehle, Khuda bande se khud pooche bata teri raza kya hai" },
    { author: "Unknown", quote: "Life ek game ki tarah hai, lekin respawn ka option nahi hai" },
    { author: "Albert Einstein", quote: "Insaan ki bewakoofi ki koi limit nahi hai, lekin universe ki hai" },
    { author: "Yoda", quote: "Code clean rakhna, young developer, warna debug karte karte budhe ho jaoge" },
    { author: "Steve Jobs", quote: "Agar aap apne competitors ko follow kar rahe hain, to aap innovate nahi kar rahe" },
    { author: "Allama Iqbal", quote: "Sitaron ke aage jahan aur bhi hain, abhi ishq ke imtihan aur bhi hain" },
    { author: "Unknown", quote: "Zindagi ek loading screen ki tarah hai, pata nahi kab complete hogi" },
    { author: "Newton", quote: "Gravity ne sab kuch neeche kheencha, lekin tumhara attitude abhi bhi upar hai" },
    { author: "Mirza Ghalib", quote: "Mohabbat mein nahin hai farq jeene aur marne ka, usi ko dekh kar jeete hain jis kafir pe dam nikle" },
    { author: "Allama Iqbal", quote: "Khudi ka sirr-e-nihan, La Ilaha Il Allah" },
    { author: "Unknown", quote: "Zindagi ek WhatsApp group ki tarah hai, bahut saare log hain lekin active koi nahi" },
    { author: "Albert Einstein", quote: "Insaan ki bewakoofi aur universe, dono infinite hain, lekin universe ke baare mein mujhe thoda doubt hai" },
    { author: "Yoda", quote: "Bugs dhoondhna, sabar ka kaam hai, young developer" },
    { author: "Steve Jobs", quote: "Logo ko pata nahi hota ke unhe kya chahiye, jab tak aap unhe dikha nahi dete" },
    { author: "Allama Iqbal", quote: "Apne man mein doob kar pa ja suragh-e-zindagi, tu agar mera nahin, apna to ho sakta hai" },
    { author: "Unknown", quote: "Zindagi ek WiFi ki tarah hai, kabhi full signal, kabhi no connection" },
    { author: "Newton", quote: "Maine gravity discover ki, lekin tumhare attitude ko neeche laane ka formula abhi tak nahi mila" },
    { author: "Mirza Ghalib", quote: "Hum ko un se wafa ki hai ummed, jo nahin jaante wafa kya hai" },
    { author: "Allama Iqbal", quote: "Tu shaheen hai, parwaz hai kaam tera, tere saamne aasman aur bhi hain" },
    { author: "Unknown", quote: "Zindagi ek software update ki tarah hai, har baar kuch naya problem leke aati hai" },
    { author: "Albert Einstein", quote: "Insaan ki bewakoofi exponential growth karti hai, jab use lagta hai ke woh smart hai" },
    { author: "Yoda", quote: "Force use karna seekho, young Padawan, jab tumhara code compile nahi ho raha ho" },
    { author: "Steve Jobs", quote: "Innovation ka matlab hai ke aap leader bano, follower nahi" },
    { author: "Allama Iqbal", quote: "Khudi ko kar buland itna ke har taqdeer se pehle, Khuda bande se khud pooche bata teri raza kya hai" },
    { author: "Unknown", quote: "Zindagi ek browser ki tarah hai, bahut saare tabs open hain lekin focus sirf ek par" },
    { author: "Newton", quote: "Har cheez ka reason hota hai, siway tumhare mood swings ke" },
    { author: "Mirza Ghalib", quote: "Ishq par zor nahi, hai yeh woh aatish Ghalib, jo lagaye na lage, aur bujhaye na bujhe" },
    { author: "Allama Iqbal", quote: "Sitaron se aage jahan aur bhi hain, abhi ishq ke imtihan aur bhi hain" },
    { author: "Unknown", quote: "Zindagi ek video game ki tarah hai, har level par naye challenges hain" },
    { author: "Albert Einstein", quote: "Imagination is more important than knowledge, kyunki knowledge limited hai, imagination unlimited" },
    { author: "Yoda", quote: "Seekhna zaroori hai, young Padawan, kyunki coding mein 'try-catch' life mein nahi hota" },
    { author: "Steve Jobs", quote: "Stay hungry, stay foolish, lekin iPhone ke liye kidney mat bechna" },
    { author: "Allama Iqbal", quote: "Khudi ka sirr-e-nihan, La Ilaha Il Allah" },
    { author: "Unknown", quote: "Zindagi ek social media post ki tarah hai, sab dekhte hain, kuch like karte hain, aur koi koi comment" },
    { author: "Newton", quote: "Jo cheez upar jati hai, woh neeche aati hai, siway petrol ke daam ke" },
    { author: "Mirza Ghalib", quote: "Mohabbat mein nahin hai farq jeene aur marne ka, usi ko dekh kar jeete hain jis kafir pe dam nikle" },
    { author: "Allama Iqbal", quote: "Apne man mein doob kar pa ja suragh-e-zindagi, tu agar mera nahin, apna to ho sakta hai" },
    { author: "Unknown", quote: "Zindagi ek meme ki tarah hai, kuch log samajhte hain, kuch ignore karte hain" },
    { author: "Albert Einstein", quote: "Insaan ki bewakoofi aur universe, dono expand ho rahe hain, lekin insaan ki speed zyada hai" },
    { author: "Yoda", quote: "Code review important hai, young developer, warna production mein Force disturb ho jayega" },
    { author: "Steve Jobs", quote: "Simplicity is the ultimate sophistication, lekin iPhone ke features samjhana mushkil hai" },
    { author: "Allama Iqbal", quote: "Tu shaheen hai, parwaz hai kaam tera, tere saamne aasman aur bhi hain" },
    { author: "Unknown", quote: "Zindagi ek group project ki tarah hai, kuch log kaam karte hain, kuch sirf naam ke liye hote hain" },
    { author: "Newton", quote: "Maine gravity ka law discover kiya, lekin pyaar ki gravity ko abhi tak koi samajh nahi paya" },
    { author: "Mirza Ghalib", quote: "Hum ko un se wafa ki hai ummed, jo nahin jaante wafa kya hai" },
    { author: "Allama Iqbal", quote: "Khudi ko kar buland itna ke har taqdeer se pehle, Khuda bande se khud pooche bata teri raza kya hai" },
    { author: "Unknown", quote: "Zindagi ek error message ki tarah hai, samajh mein nahi aati lekin face karni parti hai" },
    { author: "Albert Einstein", quote: "E = mc², jahan 'E' entertainment hai, 'm' memes hain, aur 'c' chai ki speed hai" },
    { author: "Yoda", quote: "Debugging, path to the dark side it is. Anger, frustration, hair loss, lead to suffering they do" },
    { author: "Steve Jobs", quote: "Innovation distinguishes between a leader and a follower, lekin dono ke pass iPhone hona chahiye" },
    { author: "Allama Iqbal", quote: "Sitaron se aage jahan aur bhi hain, abhi ishq ke imtihan aur bhi hain" },
    { author: "Unknown", quote: "Zindagi ek software ki tarah hai, bugs to honge hi" },
    { author: "Newton", quote: "Har action ka equal aur opposite reaction hota hai, siway jab aap apni girlfriend se behes karte hain" },
    { author: "Mirza Ghalib", quote: "Ishq ne 'Ghalib' nikamma kar diya, warna hum bhi aadmi the kaam ke" },
    { author: "Allama Iqbal", quote: "Khudi ka sirr-e-nihan, La Ilaha Il Allah" },
    { author: "Unknown", quote: "Zindagi ek coding session ki tarah hai, shuru mein excitement, beech mein confusion, end mein relief" },
    { author: "Albert Einstein", quote: "Insaan ki bewakoofi aur universe ki expansion mein race chal rahi hai" },
    { author: "Yoda", quote: "Comment your code, you must. Otherwise, understand it later, you will not" },
    { author: "Steve Jobs", quote: "Stay hungry, stay foolish, but always keep your iPhone charged" },
    { author: "Allama Iqbal", quote: "Apne man mein doob kar pa ja suragh-e-zindagi, tu agar mera nahin, apna to ho sakta hai" },
    { author: "Unknown", quote: "Zindagi ek Wi-Fi network ki tarah hai, kabhi full signal, kabhi searching" },
    { author: "Newton", quote: "Gravity ne sab kuch neeche kheencha, lekin insaan ka ego abhi bhi upar hai" },
    { author: "Mirza Ghalib", quote: "Mohabbat mein nahin hai farq jeene aur marne ka, usi ko dekh kar jeete hain jis kafir pe dam nikle" },
    { author: "Allama Iqbal", quote: "Tu shaheen hai, parwaz hai kaam tera, tere saamne aasman aur bhi hain" },
    { author: "Unknown", quote: "Zindagi ek mobile app ki tarah hai, features bahut hain lekin battery jaldi khatam ho jati hai" },
    { author: "Albert Einstein", quote: "Relativity ka asli matlab hai jab aap apni biwi ke sath shopping jaate hain" },
    { author: "Yoda", quote: "Patience you must have, my young Padawan. Compile, your code will eventually" },
    { author: "Steve Jobs", quote: "The only way to do great work is to love what you do, especially if it involves buying Apple products" },
    { author: "Allama Iqbal", quote: "Khudi ko kar buland itna ke har taqdeer se pehle, Khuda bande se  khud pooche bata teri raza kya hai" },
    { author: "Unknown", quote: "Zindagi ek online game ki tarah hai, disconnect hone ka dar hamesha rehta hai" },
    { author: "Newton", quote: "Maine gravity discover ki, lekin pyaar ki kashish ka raaz abhi tak nahi samajh paya" },
    { author: "Mirza Ghalib", quote: "Hum ko un se wafa ki hai ummed, jo nahin jaante wafa kya hai" },
    { author: "Allama Iqbal", quote: "Sitaron se aage jahan aur bhi hain, abhi ishq ke imtihan aur bhi hain" },
    { author: "Unknown", quote: "Zindagi ek meme page ki tarah hai, kuch posts viral ho jate hain, kuch ignore ho jate hain" },
    { author: "Albert Einstein", quote: "Insaan ki bewakoofi aur universe ki expansion mein sirf ek cheez common hai - dono ki koi limit nahi" },
    { author: "Yoda", quote: "Do or do not, there is no try. But in coding, try-catch always use" },
    { author: "Steve Jobs", quote: "Innovation is the only way to win, unless you can afford to buy all the iPhones" },
    { author: "Allama Iqbal", quote: "Khudi ka sirr-e-nihan, La Ilaha Il Allah" },
    { author: "Unknown", quote: "Zindagi ek social media timeline ki tarah hai, scroll karte raho, end kabhi nahi aayega" },
    { author: "Newton", quote: "Har cheez ka reason hota hai, siway jab aap ke parents kehte hain 'kyunki maine kaha hai'" },
    { author: "Mirza Ghalib", quote: "Ishq par zor nahi, hai yeh woh aatish Ghalib, jo lagaye na lage, aur bujhaye na bujhe" }
  ]

 export async function GET() {
    const randomIndex: number = Math.floor(Math.random() * quotes.length);
    const randomQuotes = quotes[randomIndex];

    return NextResponse.json({ randomQuotes });
}

