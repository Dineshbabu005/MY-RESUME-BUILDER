import React, { useState } from "react";

function ResumeForm() {
    const [name, setName] = useState("Dineshbabu Purushothaman");
    const [email, setEmail] = useState("your.email@example.com");
    const [phone, setPhone] = useState("+1234567890");
    const [sections, setSections] = useState([
        { title: "Skills", content: "Python, SQL, Power BI" },
        { title: "Experience", content: "Fresher" },
    ]);

    const addSection = () => setSections([...sections, { title: "", content: "" }]);
    const updateSection = (index, field, value) => {
        const newSections = [...sections];
        newSections[index][field] = value;
        setSections(newSections);
    };
    const removeSection = (index) => {
        const newSections = sections.filter((_, i) => i !== index);
        setSections(newSections);
    };

    const handleDownload = () => {
        const resumeContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n${sections
            .map((s) => `${s.title}:\n${s.content}`)
            .join("\n\n")}`;
        const blob = new Blob([resumeContent], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "resume.txt";
        link.click();
    };

    return (
        <div>
            <h2>Fill in your details:</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
            />
            <h3>Sections:</h3>
            {sections.map((section, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={section.title}
                        onChange={(e) => updateSection(index, "title", e.target.value)}
                        placeholder="Section Title"
                    />
                    <textarea
                        value={section.content}
                        onChange={(e) => updateSection(index, "content", e.target.value)}
                        placeholder="Section Content"
                    ></textarea>
                    <button onClick={() => removeSection(index)}>Remove Section</button>
                </div>
            ))}
            <button onClick={addSection}>Add Section</button>
            <button onClick={handleDownload}>Download Resume</button>
        </div>
    );
}

export default ResumeForm;
