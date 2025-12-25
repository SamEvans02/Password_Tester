let password = document.getElementById("password");
let power = document.getElementById("power-point");
password.oninput = function() {
    let point = 0;
    let value = password.value;
    let widthPower = ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3BA62F"]

    if (value.length >= 6) {
        let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
};




const input = document.getElementById("password");
const copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(input.value)
        .then(() => {
            //copyButton.textContent = "[_]^";
            copyButton.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `;
            setTimeout(() => {
                copyButton.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4
                                a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                `;
            }, 1200);

        });
});





//Strength of passwords accourding to NIST (SOC 2 & ISO 27001): 
/* 
Source 1: https://drata.com/blog/nist-password-guidelines 
Source 2: https://support.microsoft.com/en-us/windows/create-and-use-strong-passwords-c5cebb49-8c53-4f5e-2bc4-fe357ca048eb 

Minimum length of 8 characters, a strong recommendation to extend this to 15. Microsoft says min of 12, but 14 or more is better. 
Uppercase letter(s) 
Lowercase letters 
Number(s) 
Symbol(s) 
Significantly ifferent from previous password(s) 
Advises against outdated composition rules that lead to passwords like "Password123!" 
Advises against outdated measures like hints or knowledge-based authentication 
Implement password blocklists of previously compromised passwords 

*/