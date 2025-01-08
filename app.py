from flask import Flask, request, jsonify

app = Flask(__name__)

def calculate_ats_score(resume, job_description):
    resume_words = set(resume.split())
    job_words = set(job_description.split())
    matches = resume_words.intersection(job_words)
    return len(matches) / len(job_words) * 100

@app.route("/ats-score", methods=["POST"])
def ats_score():
    data = request.get_json()
    resume = data.get("resume")
    job_description = data.get("job_description")
    score = calculate_ats_score(resume, job_description)
    return jsonify({ "score": score })

if __name__ == "__main__":
    app.run(debug=True)
