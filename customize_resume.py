import re

def extract_keywords(job_description):
    """
    Extracts keywords from job description using simple text parsing (for more advanced, use NLTK or spaCy).
    """
    job_keywords = re.findall(r'\b\w+\b', job_description)
    return set(job_keywords)

def customize_resume(keywords, resume_template_path, output_path):
    """
    Customize the resume by adding relevant keywords to the template.
    """
    with open(resume_template_path, 'r') as template_file:
        resume_content = template_file.read()

    # Modify the resume by adding or highlighting keywords
    customized_resume = resume_content
    for keyword in keywords:
        customized_resume = customized_resume.replace(keyword, f"**{keyword}**")

    with open(output_path, 'w') as output_file:
        output_file.write(customized_resume)

if __name__ == "__main__":
    # Example job description (in real usage, this could be fetched dynamically from a job listing)
    job_description = """
    Data Analyst with experience in SQL, Python, and Power BI required. Must have excellent data visualization skills.
    Proficiency in machine learning algorithms like K-Means clustering is a plus.
    """

    # Extract relevant keywords from job description
    keywords = extract_keywords(job_description)

    # Customize the resume based on extracted keywords
    resume_template_path = "resume_template.md"  # Your markdown resume template
    output_path = "customized_resume.md"  # The output path for the customized resume
    customize_resume(keywords, resume_template_path, output_path)
    print(f"Customized resume saved to {output_path}")
