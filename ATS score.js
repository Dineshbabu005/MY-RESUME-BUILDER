function checkATSScore(resume, jobDescription) {
    fetch("http://localhost:5000/ats-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume, job_description: jobDescription })
    })
        .then((response) => response.json())
        .then((data) => alert(`Your ATS Score: ${data.score}%`));
}
