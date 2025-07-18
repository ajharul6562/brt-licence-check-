
const db = {
    "DK0897294CH0874": {
        name: "মোঃ রফিকুল ইসলাম",
        father: "মোঃ হাবিবুর রহমান",
        dob: "০১ জানুয়ারি ১৯৮৫",
        type: "পেশাদার ড্রাইভিং লাইসেন্স",
        issue: "১২ জানুয়ারি ২০২১",
        expiry: "১২ জানুয়ারি ২০২৬"
    }
};

function verifyLicense() {
    const input = document.getElementById("licenseNumber").value.trim();
    const resultBox = document.getElementById("result");

    if (db[input]) {
        const data = db[input];
        resultBox.innerHTML = `
            <h3>✅ লাইসেন্স তথ্য</h3>
            <p><strong>নাম:</strong> ${data.name}</p>
            <p><strong>পিতার নাম:</strong> ${data.father}</p>
            <p><strong>জন্ম তারিখ:</strong> ${data.dob}</p>
            <p><strong>লাইসেন্স ধরন:</strong> ${data.type}</p>
            <p><strong>ইস্যু তারিখ:</strong> ${data.issue}</p>
            <p><strong>মেয়াদ শেষ:</strong> ${data.expiry}</p>
        `;
    } else {
        resultBox.innerHTML = "<p style='color:red;'>❌ লাইসেন্স খুঁজে পাওয়া যায়নি।</p>";
    }
}
