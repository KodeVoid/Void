import React, { useState } from "react";
// Remove unused import
// import { exp } from "three/tsl";

function ResumeForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    experience: [{
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      bullets: [""],
    }],
    education: [{
      school: "",
      certificate: "",
      file: "", // image, pdf etc
      startDate: "",
      endDate: "",
      link: "" // Fixed missing value
    }],
    certificate: [{
      name: "",
      link: "",
      file: "", // image, pdf etc
    }],
    skills: {
      frontend: "",
      backend: "",
      databases: "",
      vcs: "",
      tools: "",
      others: "",
    },
    projects: [{
      name: "",
      link: "",
      description: "",
    }]
  });

  const handleChange = (section, field, value, index = null) => {
    if (section === "experience" || section === "education" || section === "certificate" || section === "projects") {
      const updatedSection = [...form[section]];
      if (index !== null) {
        updatedSection[index][field] = value;
      }
      setForm({ ...form, [section]: updatedSection });
    } else if (section === "skills") {
      setForm({ ...form, skills: { ...form.skills, [field]: value } });
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  const handleBulletChange = (index, bulletIndex, value) => {
    const updatedExperience = [...form.experience];
    updatedExperience[index].bullets[bulletIndex] = value;
    setForm({ ...form, experience: updatedExperience });
  };

  const addBullet = (expIndex) => {
    const updated = [...form.experience];
    updated[expIndex].bullets.push("");
    setForm({ ...form, experience: updated });
  };

  const addExperience = () => {
    setForm({
      ...form,
      experience: [
        ...form.experience,
        {
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          bullets: [""],
        },
      ],
    });
  };

  const addEducation = () => {
    setForm({
      ...form,
      education: [
        ...form.education,
        { 
          school: "", 
          certificate: "", 
          file: "", 
          startDate: "", 
          endDate: "", 
          link: "" 
        },
      ],
    });
  };

  const addCertificate = () => {
    setForm({
      ...form,
      certificate: [
        ...form.certificate,
        { name: "", link: "", file: "" },
      ],
    });
  };

  const addProject = () => {
    setForm({
      ...form,
      projects: [
        ...form.projects,
        { name: "", link: "", description: "" },
      ],
    });
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={submit} className="space-y-4 p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold">Personal Info</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          className="border p-2 rounded" 
          placeholder="Name" 
          value={form.name} 
          onChange={(e) => handleChange(null, "name", e.target.value)} 
        />
        <input 
          className="border p-2 rounded" 
          placeholder="Title" 
          value={form.title} 
          onChange={(e) => handleChange(null, "title", e.target.value)} 
        />
        <input 
          className="border p-2 rounded" 
          placeholder="Email" 
          value={form.email} 
          onChange={(e) => handleChange(null, "email", e.target.value)} 
        />
        <input 
          className="border p-2 rounded" 
          placeholder="Phone" 
          value={form.phone} 
          onChange={(e) => handleChange(null, "phone", e.target.value)} 
        />
        <input 
          className="border p-2 rounded" 
          placeholder="Location" 
          value={form.location} 
          onChange={(e) => handleChange(null, "location", e.target.value)} 
        />
        <input 
          className="border p-2 rounded" 
          placeholder="LinkedIn" 
          value={form.linkedin} 
          onChange={(e) => handleChange(null, "linkedin", e.target.value)} 
        />
      </div>

      <h2 className="text-xl font-bold mt-6">Experience</h2>
      {form.experience.map((exp, i) => (
        <div key={i} className="border p-4 rounded mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <input 
              className="border p-2 rounded" 
              placeholder="Company" 
              value={exp.company} 
              onChange={(e) => handleChange("experience", "company", e.target.value, i)} 
            />
            <input 
              className="border p-2 rounded" 
              placeholder="Role" 
              value={exp.role} 
              onChange={(e) => handleChange("experience", "role", e.target.value, i)} 
            />
            <input 
              className="border p-2 rounded" 
              placeholder="Start Date" 
              value={exp.startDate} 
              onChange={(e) => handleChange("experience", "startDate", e.target.value, i)} 
            />
            <input 
              className="border p-2 rounded" 
              placeholder="End Date" 
              value={exp.endDate} 
              onChange={(e) => handleChange("experience", "endDate", e.target.value, i)} 
            />
          </div>
          <h3 className="font-medium mb-2">Bullet Points</h3>
          {exp.bullets.map((bullet, j) => (
            <div key={j} className="mb-2">
              <input
                className="border p-2 rounded w-full"
                placeholder={`Bullet ${j + 1}`}
                value={bullet}
                onChange={(e) => handleBulletChange(i, j, e.target.value)}
              />
            </div>
          ))}
          <button 
            type="button" 
            className="bg-gray-200 px-3 py-1 rounded mt-2"
            onClick={() => addBullet(i)}
          >
            + Add Bullet
          </button>
        </div>
      ))}
      <button 
        type="button" 
        className="bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={addExperience}
      >
        + Add Experience
      </button>

      <h2 className="text-xl font-bold mt-6">Education</h2>
      {form.education.map((edu, i) => (
        <div key={i} className="border p-4 rounded mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              className="border p-2 rounded" 
              placeholder="School" 
              value={edu.school} 
              onChange={(e) => handleChange("education", "school", e.target.value, i)} 
            />
            <input 
              className="border p-2 rounded" 
              placeholder="Certificate/Degree" 
              value={edu.certificate} 
              onChange={(e) => handleChange("education", "certificate", e.target.value, i)} 
            />
            <input 
              className="border p-2 rounded" 
              placeholder="Start Date" 
              value={edu.startDate} 
              onChange={(e) => handleChange("education", "startDate", e.target.value, i)} 
            />
            <input 
              className="border p-2 rounded" 
              placeholder="End Date" 
              value={edu.endDate} 
              onChange={(e) => handleChange("education", "endDate", e.target.value, i)} 
            />
            <input 
              className="border p-2 rounded" 
              placeholder="File Path (optional)" 
              value={edu.file} 
              onChange={(e) => handleChange("education", "file", e.target.value, i)} 
            />
            <input 
              className="border p-2 rounded" 
              placeholder="Link (optional)" 
              value={edu.link} 
              onChange={(e) => handleChange("education", "link", e.target.value, i)} 
            />
          </div>
        </div>
      ))}
      <button 
        type="button" 
        className="bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={addEducation}
      >
        + Add Education
      </button>

      <h2 className="text-xl font-bold mt-6">Certificates</h2>
      {form.certificate.map((cert, i) => (
        <div key={i} className="border p-4 rounded mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              className="border p-2 rounded" 
              placeholder="Certificate Name" 
              value={cert.name} 
              onChange={(e) => handleChange("certificate", "name", e.target.value, i)} 
            />
            <input 
              className="border p-2 rounded" 
              placeholder="Link (optional)" 
              value={cert.link} 
              onChange={(e) => handleChange("certificate", "link", e.target.value, i)} 
            />
            <input 
              className="border p-2 rounded" 
              placeholder="File Path (optional)" 
              value={cert.file} 
              onChange={(e) => handleChange("certificate", "file", e.target.value, i)} 
            />
          </div>
        </div>
      ))}
      <button 
        type="button" 
        className="bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={addCertificate}
      >
        + Add Certificate
      </button>

      <h2 className="text-xl font-bold mt-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          className="border p-2 rounded" 
          placeholder="Frontend Skills" 
          value={form.skills.frontend} 
          onChange={(e) => handleChange("skills", "frontend", e.target.value)} 
        />
        <input 
          className="border p-2 rounded" 
          placeholder="Backend Skills" 
          value={form.skills.backend} 
          onChange={(e) => handleChange("skills", "backend", e.target.value)} 
        />
        <input 
          className="border p-2 rounded" 
          placeholder="Database Skills" 
          value={form.skills.databases} 
          onChange={(e) => handleChange("skills", "databases", e.target.value)} 
        />
        <input 
          className="border p-2 rounded" 
          placeholder="Version Control" 
          value={form.skills.vcs} 
          onChange={(e) => handleChange("skills", "vcs", e.target.value)} 
        />
        <input 
          className="border p-2 rounded" 
          placeholder="Tools & Platforms" 
          value={form.skills.tools} 
          onChange={(e) => handleChange("skills", "tools", e.target.value)} 
        />
        <input 
          className="border p-2 rounded" 
          placeholder="Other Skills" 
          value={form.skills.others} 
          onChange={(e) => handleChange("skills", "others", e.target.value)} 
        />
      </div>

      <h2 className="text-xl font-bold mt-6">Projects</h2>
      {form.projects.map((project, i) => (
        <div key={i} className="border p-4 rounded mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <input 
              className="border p-2 rounded" 
              placeholder="Project Name" 
              value={project.name} 
              onChange={(e) => handleChange("projects", "name", e.target.value, i)} 
            />
            <input 
              className="border p-2 rounded" 
              placeholder="Project Link" 
              value={project.link} 
              onChange={(e) => handleChange("projects", "link", e.target.value, i)} 
            />
          </div>
          <textarea
            className="border p-2 rounded w-full mt-2"
            rows="3"
            placeholder="Project Description"
            value={project.description}
            onChange={(e) => handleChange("projects", "description", e.target.value, i)}
          ></textarea>
        </div>
      ))}
      <button 
        type="button" 
        className="bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={addProject}
      >
        + Add Project
      </button>

      <div className="mt-8">
        <button 
          type="submit" 
          className="bg-green-500 text-white px-6 py-3 rounded font-bold"
        >
          Generate Resume
        </button>
      </div>
    </form>
  );
}

export default ResumeForm;