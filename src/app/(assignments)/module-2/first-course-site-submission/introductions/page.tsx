"use client";
import {useState} from "react";
import CodeHighlight from "@/components/ui/CodeHighlight";
import Metadata from "@/components/data/Metadata";


export default function Page() {
    const [name, setName] = useState("Alexander Prechtel");
    const [image, setImage] = useState("/headshot.jpeg")
    const [imageCaption, setImageCaption] = useState("At the beach on the eastern coast of Florida (2024)")
    const [personalBackground, setPersonalBackground] = useState("Grew up north of Charlotte, and have always had a love of computers.")
    const [professionalBackground, setProfessionalBackground] = useState("This is my first semester as an Instructional Assistant/Teachers Assistant, but before that I was a Peer Tutor for CCI.")
    const [academicBackground, setAcademicBackground] = useState("I’m currently a Junior at UNC Charlotte studying computer science with a focus in Cybersecurity. Before that I attended Highschool in Mooresville, North Carolina.")
    const [primaryComputer, setPrimaryComputer] = useState("The laptop I use for university is a Macbook Pro M2 14 inch. I also use a custom built Windows 11 computer.")
    const [courses, setCourses] = useState([
        {
            name: "ITIS4250 - Computer Forensics",
            reason: "Required course for my concentration but the course’s subject also interests me."
        },
        {
            name: "ITIS3246 - IT Infrastructure and Security",
            reason: "Another required course for my concentration but this is another class I am interested in."
        },
        {
            name: "THEA1512 - Theatre in the United States",
            reason: "I needed to take one more theme course and this one was recommended to me by a friend who took it previously."
        },
        {
            name: "MATH2164 - Matrices & Linear Algebra",
            reason: "Required course for the Computer Science degree."
        },
        {
            name: "BIOL1110 - Principles of Biology I",
            reason: "I needed to take another science course and this was recommended to me by a friend."
        },
        {
            name: "BIOL1110L - Principles of Biology I Lab",
            reason: "I needed to take a science course with its  lab."
        }
    ])
    return <>
        <Metadata seoTitle={"Introduction Generator"} seoDescription={"Generate your introduction!"}/>
        <section>
            <h2>Form</h2>
            <form onSubmit={(e) => e.preventDefault()} className="my-6">
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 sm:p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Edit Introduction</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name"
                                className="border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="image">Image URL</label>
                            <input
                                id="image"
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="/headshot.jpeg or https://..."
                                className="border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="md:col-span-2 flex flex-col gap-1">
                            <label className="font-medium" htmlFor="imageCaption">Image Caption</label>
                            <input
                                id="imageCaption"
                                type="text"
                                value={imageCaption}
                                onChange={(e) => setImageCaption(e.target.value)}
                                placeholder="Short description of the image"
                                className="border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="md:col-span-2 flex flex-col gap-1">
                            <label className="font-medium" htmlFor="personalBackground">Personal Background</label>
                            <textarea
                                id="personalBackground"
                                value={personalBackground}
                                onChange={(e) => setPersonalBackground(e.target.value)}
                                placeholder="A few sentences about you"
                                rows={2}
                                className="border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="md:col-span-2 flex flex-col gap-1">
                            <label className="font-medium" htmlFor="professionalBackground">Professional Background</label>
                            <textarea
                                id="professionalBackground"
                                value={professionalBackground}
                                onChange={(e) => setProfessionalBackground(e.target.value)}
                                placeholder="Work experience or roles"
                                rows={2}
                                className="border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="md:col-span-2 flex flex-col gap-1">
                            <label className="font-medium" htmlFor="academicBackground">Academic Background</label>
                            <textarea
                                id="academicBackground"
                                value={academicBackground}
                                onChange={(e) => setAcademicBackground(e.target.value)}
                                placeholder="Schools, major, focus, etc."
                                rows={2}
                                className="border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="md:col-span-2 flex flex-col gap-1">
                            <label className="font-medium" htmlFor="primaryComputer">Primary Computer</label>
                            <input
                                id="primaryComputer"
                                type="text"
                                value={primaryComputer}
                                onChange={(e) => setPrimaryComputer(e.target.value)}
                                placeholder="Your main device(s)"
                                className="border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <hr className="my-4"/>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-base font-semibold">Courses</h4>
                            <button
                                type="button"
                                onClick={() => setCourses(prev => [...prev, {name: "", reason: ""}])}
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded-md"
                                aria-label="Add course"
                            >
                                + Add Course
                            </button>
                        </div>

                        {courses.length === 0 && (
                            <p className="text-sm text-neutral-600">No courses added. Use &#34;Add Course&#34; to include
                                one.</p>
                        )}

                        <div className="flex flex-col gap-3">
                            {courses.map((c, idx) => (
                                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2 items-start">
                                    <input
                                        type="text"
                                        value={c.name}
                                        onChange={(e) => {
                                            const v = e.target.value;
                                            setCourses(prev => prev.map((pc, i) => i === idx ? ({...pc, name: v}) : pc));
                                        }}
                                        placeholder="COURSE CODE - Title (e.g., ITIS3135 - Web App Design)"
                                        className="md:col-span-5 border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="text"
                                        value={c.reason}
                                        onChange={(e) => {
                                            const v = e.target.value;
                                            setCourses(prev => prev.map((pc, i) => i === idx ? ({...pc, reason: v}) : pc));
                                        }}
                                        placeholder="Why you're taking it"
                                        className="md:col-span-6 border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <div className="md:col-span-1 flex md:justify-end">
                                        <button
                                            type="button"
                                            onClick={() => setCourses(prev => prev.filter((_, i) => i !== idx))}
                                            className="w-full md:w-auto bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-sm font-medium px-3 py-2 rounded-md"
                                            aria-label={`Remove course ${idx + 1}`}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </form>
        </section>


            <section>
                <h2>Example</h2>
                <h3>{name}</h3>
                <figure>
                    <img src={image} alt={imageCaption} width={500} height={500}/>
                    <figcaption>{imageCaption}</figcaption>
                </figure>
                <ul>
                    <li><strong>Personal Background: </strong>{personalBackground}</li>
                    <li><strong>Professional Background: </strong>{professionalBackground}</li>
                    <li><strong>Academic Background: </strong>{academicBackground}</li>
                    <li><strong>Primary Computer: </strong>{primaryComputer}</li>
                    <li>
                        <strong>Courses:</strong>
                        <ul>
                            {courses.map(({name, reason}, index) => <li key={index}><strong>{name}</strong>: {reason}</li>)}
                        </ul>
                    </li>
                </ul>

            </section>
<section>
    <h2>Code</h2>
    <CodeHighlight>
        {`<h3>${name}</h3>\n` +
            "  <figure>\n" +
            "    <img\n" +
            `      alt=\"${imageCaption}\"\n` +
            `      src=\"${image}\"\n` +
            "    />\n" +
            "    <figcaption>\n" +
            `      ${imageCaption}\n` +
            "    </figcaption>\n" +
            "  </figure>\n" +
            "\n" +
            "  <ul>\n" +
            "    <li>\n" +
            "      <strong>Personal Background: </strong>\n" +
            `      ${personalBackground}\n` +
            "    </li>\n" +
            "    <li>\n" +
            "      <strong>Professional Background: </strong>\n" +
            `${professionalBackground}\n` +
            "    </li>\n" +
            "    <li>\n" +
            "      <strong>Academic Background: </strong>\n" +
            `${academicBackground}\n` +
            "    </li>\n" +
            "    <li>\n" +
            "      <strong>Primary Computer: </strong>\n" +
            `${primaryComputer}\n` +
            "    </li>\n" +
            "    <li>\n" +
            "      <strong>Courses:</strong>\n" +
            "      <ul>\n" +
            courses.map(({name, reason}) => `        <li><strong>${name}</strong>: ${reason}</li>\n`).join("") +
            "      </ul>\n" +
            "    </li>\n" +
            "  </ul>\n"}
    </CodeHighlight>
</section>
    </>
}
