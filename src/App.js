import React from "react";
import "./App.css";

function App() {
const user = {
name: "Ahmed",
jobTitle: "Cloud practitioner",
about:
"Passionate about web development and creating awesome user experiences.",
email: "alaa.odc@example.com",
phone: "+123 456 7890",
skills: ["HTML", "CSS", "JavaScript", "React"],
photoURL:
"https://media.licdn.com/dms/image/D4D03AQGmcN0FnlOpWg/profile-displayphoto-shrink_200_200/0/1706200643252?e=2147483647&v=beta&t=0ZoVL0QdJKPngSMjhQnt-tAwpvKp-H1mRpcjUqvOCHI", // Replace with your photo URL
};

return (
<div className="App">
<header className="App-header">
<img src={user.photoURL} alt="Profile" />
<h1>{user.name}</h1>
<p>{user.jobTitle}</p>
</header>

<section className="App-content">
<h2>About Me</h2>
<p>{user.about}</p>

<h2>Contact Information</h2>
<ul>
<li>Email: {user.email}</li>
<li>Phone: {user.phone}</li>
</ul>

<h2>Skills</h2>
<ul>
{user.skills.map((skill, index) => (
<li key={index}>{skill}</li>
))}
</ul>
</section>
</div>
);
}

export default App;