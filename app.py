from flask import Flask, request, jsonify
import json
from customize_resume import extract_keywords, customize_resume

app = Flask(__name__)

@app.route('/generate-resume', methods=['POST'])
def generate_resume():
    data = request.get_json()
    job_description = data.get('jobDescription')

    # Extract keywords from the job description
    keywords = extract_keywords(job_description)

    # Customize the resume based on extracted keywords
    resume_template_path = "resume_template.md"
    output_path = "customized_resume.md"
    customize_resume(keywords, resume_template_path, output_path)

    # Read the customized resume and return it as response
    with open(output_path, 'r') as file:
        customized_resume = file.read()

    return jsonify({"customizedResume": customized_resume})

if __name__ == '__main__':
    app.run(debug=True)
