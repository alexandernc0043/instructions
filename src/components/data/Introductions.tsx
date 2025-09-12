"use client"
import {useEffect, useRef, useState} from "react";

export default function Introductions() {
    const [firstName, setFirstName] = useState("Alexander");
    const [preferredName, setPreferredName] = useState("Alex");
    const [middleInitial, setMiddleInitial] = useState("J");
    const [lastName, setLastName] = useState("Prechtel");
    const [divider, setDivider] = useState("~");
    const [mascot, setMascot] = useState("Advanced Pegasus");
    const [image, setImage] = useState("/headshot.jpeg")
    const [imageFilename, setImageFilename] = useState<string>(() => {
        const parts = "/headshot.jpeg".split("/")
        return parts[parts.length - 1] || "image"
    })
    // Track an object URL for uploaded images to revoke when replaced/unmounted
    const imageObjectUrlRef = useRef<string | null>(null)
    const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        // Revoke previous object URL to avoid memory leaks
        if (imageObjectUrlRef.current) {
            URL.revokeObjectURL(imageObjectUrlRef.current)
        }
        const url = URL.createObjectURL(file)
        imageObjectUrlRef.current = url
        setImage(url)
        setImageFilename(file.name)
    }
    useEffect(() => {
        return () => {
            if (imageObjectUrlRef.current) {
                URL.revokeObjectURL(imageObjectUrlRef.current)
            }
        }
    }, [])
    const [imageCaption, setImageCaption] = useState("At the beach on the eastern coast of Florida (2024)")
    const [personalBackground, setPersonalBackground] = useState("Grew up north of Charlotte, and have always had a love of computers.")
    const [professionalBackground, setProfessionalBackground] = useState("This is my first semester as an Instructional Assistant/Teachers Assistant, but before that I was a Peer Tutor for CCI.")
    const [academicBackground, setAcademicBackground] = useState("I’m currently a Junior at UNC Charlotte studying computer science with a focus in Cybersecurity. Before that I attended Highschool in Mooresville, North Carolina.")
    const [primaryComputer, setPrimaryComputer] = useState("The laptop I use for university is a Macbook Pro M2 14 inch. I also use a custom built Windows 11 computer.")
    const [courses, setCourses] = useState([
        {
            dept: "ITIS",
            number: "4250",
            name: "Computer Forensics",
            reason: "Required course for my concentration but the course’s subject also interests me."
        },
        {
            dept: "ITIS",
            number: "3246",
            name: "IT Infrastructure and Security",
            reason: "Another required course for my concentration but this is another class I am interested in."
        },
        {
            dept: "THEA",
            number: "1512",
            name: "Theatre in the United States",
            reason: "I needed to take one more theme course and this one was recommended to me by a friend who took it previously."
        },
        {
            dept: "MATH",
            number: "2164",
            name: "Matrices & Linear Algebra",
            reason: "Required course for the Computer Science degree."
        },
        {
            dept: "BIOL",
            number: "1110",
            name: "Principles of Biology I",
            reason: "I needed to take another science course and this was recommended to me by a friend."
        },
        {
            dept: "BIOL",
            number: "1110L",
            name: "Principles of Biology I Lab",
            reason: "I needed to take a science course with its lab."
        },
    ])
    const exportToJson = () => {
        const inferredFilename = imageFilename || (image ? (image.split("/").pop() || "image") : "image")
        const data = {
            firstName,
            preferredName,
            middleInitial,
            lastName,
            divider,
            mascot,
            image: `images/${inferredFilename}`,
            imageCaption,
            personalBackground,
            professionalBackground,
            academicBackground,
            primaryComputer,
            courses,
        }
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        const safeName = [firstName, middleInitial, lastName].filter(Boolean).join("_") || "introduction"
        a.href = url
        a.download = `${safeName}.json`
        document.body.appendChild(a)
        a.click()
        a.remove()
        URL.revokeObjectURL(url)
    }

    return <>
        <section>
            <h2>Form</h2>
            <form onSubmit={(e) => e.preventDefault()} className="my-6">
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 sm:p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold">Edit Introduction</h3>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={exportToJson}
                                className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-900 text-white text-sm font-medium px-3 py-1.5 rounded-md"
                                aria-label="Export introduction to JSON"
                                title="Download your introduction data as a JSON file"
                            >
                                Export JSON
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                        <div className="col-span-full grid grid-cols-4 gap-4">
                            <div className="flex flex-col gap-1 min-w-0">
                                <label className="font-medium text-sm text-neutral-700" htmlFor="name">First Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Your name"
                                    className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col gap-1 min-w-0">
                                <label className="font-medium text-sm text-neutral-700" htmlFor="middle">Middle Initial</label>
                                <input
                                    id="middle"
                                    type="text"
                                    value={middleInitial}
                                    onChange={(e) => setMiddleInitial(e.target.value)}
                                    placeholder="Your middle initial."
                                    className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col gap-1 min-w-0">
                                <label className="font-medium text-sm text-neutral-700" htmlFor="preferred">Preferred Name</label>
                                <input
                                    id="preferred"
                                    type="text"
                                    value={preferredName}
                                    onChange={(e) => setPreferredName(e.target.value)}
                                    placeholder="Your preferred name."
                                    className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col gap-1 min-w-0">
                                <label className="font-medium text-sm text-neutral-700" htmlFor="last">Last Name</label>
                                <input
                                    id="last"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Your last name."
                                    className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-medium text-sm text-neutral-700" htmlFor="mascot">Mascot</label>
                            <input
                                id="mascot"
                                type="text"
                                value={mascot}
                                onChange={(e) => setMascot(e.target.value)}
                                placeholder="Your mascot."
                                className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1 sm:max-w-[10rem]">
                            <label className="font-medium text-sm text-neutral-700" htmlFor="divider">Divider</label>
                            <input
                                id="divider"
                                type="text"
                                value={divider}
                                onChange={(e) => setDivider(e.target.value)}
                                placeholder="Divider"
                                className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1 xl:col-span-2">
                            <label className="font-medium text-sm text-neutral-700" htmlFor="imageFile">Upload Image</label>
                            <input
                                id="imageFile"
                                type="file"
                                accept="image/*"
                                onChange={handleImageFileChange}
                                className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-neutral-200 hover:file:bg-neutral-300"
                            />
                            <p className="text-xs text-neutral-500">PNG, JPG, or GIF. Stays local in your browser.</p>
                        </div>

                        <div className="sm:col-span-2 xl:col-span-3 flex flex-col gap-1">
                            <label className="font-medium text-sm text-neutral-700" htmlFor="imageCaption">Image
                                Caption</label>
                            <input
                                id="imageCaption"
                                type="text"
                                value={imageCaption}
                                onChange={(e) => setImageCaption(e.target.value)}
                                placeholder="Short description of the image"
                                className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="sm:col-span-2 xl:col-span-3 flex flex-col gap-1">
                            <label className="font-medium text-sm text-neutral-700" htmlFor="personalBackground">Personal
                                Background</label>
                            <textarea
                                id="personalBackground"
                                value={personalBackground}
                                onChange={(e) => setPersonalBackground(e.target.value)}
                                placeholder="A few sentences about you"
                                rows={3}
                                className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="sm:col-span-2 xl:col-span-3 flex flex-col gap-1">
                            <label className="font-medium text-sm text-neutral-700" htmlFor="professionalBackground">Professional
                                Background</label>
                            <textarea
                                id="professionalBackground"
                                value={professionalBackground}
                                onChange={(e) => setProfessionalBackground(e.target.value)}
                                placeholder="Work experience or roles"
                                rows={3}
                                className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="sm:col-span-2 xl:col-span-3 flex flex-col gap-1">
                            <label className="font-medium text-sm text-neutral-700" htmlFor="academicBackground">Academic
                                Background</label>
                            <textarea
                                id="academicBackground"
                                value={academicBackground}
                                onChange={(e) => setAcademicBackground(e.target.value)}
                                placeholder="Schools, major, focus, etc."
                                rows={3}
                                className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="sm:col-span-2 xl:col-span-3 flex flex-col gap-1">
                            <label className="font-medium text-sm text-neutral-700" htmlFor="primaryComputer">Primary
                                Computer</label>
                            <input
                                id="primaryComputer"
                                type="text"
                                value={primaryComputer}
                                onChange={(e) => setPrimaryComputer(e.target.value)}
                                placeholder="Your main device(s)"
                                className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <hr className="my-4"/>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-base font-semibold">Courses</h4>
                            <button
                                type="button"
                                onClick={() => setCourses(prev => [...prev, {
                                    name: "",
                                    reason: "",
                                    dept: "",
                                    number: ""
                                }])}
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded-md"
                                aria-label="Add course"
                            >
                                + Add Course
                            </button>
                        </div>

                        {courses.length === 0 && (
                            <p className="text-sm text-neutral-600">No courses added. Use &#34;Add Course&#34; to
                                include
                                one.</p>
                        )}

                        <div className="flex flex-col gap-3 sm:gap-4">
                            {courses.map((c, idx) => (
                                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
                                    <input
                                        type="text"
                                        value={c.dept}
                                        onChange={(e) => {
                                            const v = e.target.value;
                                            setCourses(prev => prev.map((pc, i) => i === idx ? ({
                                                ...pc,
                                                dept: v
                                            }) : pc));
                                        }}
                                        placeholder="DEPT"
                                        className="md:col-span-1 border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <input
                                        type="text"
                                        value={c.number}
                                        onChange={(e) => {
                                            const v = e.target.value;
                                            setCourses(prev => prev.map((pc, i) => i === idx ? ({
                                                ...pc,
                                                number: v
                                            }) : pc));
                                        }}
                                        placeholder="####"
                                        className="md:col-span-1 border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <input
                                        type="text"
                                        value={c.name}
                                        onChange={(e) => {
                                            const v = e.target.value;
                                            setCourses(prev => prev.map((pc, i) => i === idx ? ({
                                                ...pc,
                                                name: v
                                            }) : pc));
                                        }}
                                        placeholder="Name of the course..."
                                        className="md:col-span-3 border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <input
                                        type="text"
                                        value={c.reason}
                                        onChange={(e) => {
                                            const v = e.target.value;
                                            setCourses(prev => prev.map((pc, i) => i === idx ? ({
                                                ...pc,
                                                reason: v
                                            }) : pc));
                                        }}
                                        placeholder="Why you're taking the course..."
                                        className="md:col-span-6 border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
        <hr/>
        <section>
            <h2>Example</h2>
            <p>I understand that what I put here is publicly available on the web and I won’t put anything here I don’t
                want the public to see {divider} {firstName} {middleInitial}. {lastName} {divider} {new Date().toLocaleDateString()}</p>
            <h3>{firstName} {middleInitial}. &#34;{preferredName}&#34; {lastName} {divider} {mascot}</h3>
            <figure className={"m-auto w-100"}>
                {image === "" ? <img src={"/headshot.jpeg"} alt={imageCaption} width={500} height={500}/> :
                    <img src={image} alt={imageCaption} width={500} height={500}/>}
                <figcaption><em>{imageCaption}</em></figcaption>
            </figure>
            <ul>
                <li><strong>Personal Background: </strong>{personalBackground === "" ? "None." : personalBackground}
                </li>
                <li><strong>Professional
                    Background: </strong>{professionalBackground === "" ? "None." : professionalBackground}</li>
                <li><strong>Academic Background: </strong>{academicBackground === "" ? "None." : academicBackground}
                </li>
                <li><strong>Primary Computer: </strong>{primaryComputer === "" ? "None." : primaryComputer}</li>
                <li>
                    <strong>Courses:</strong>
                    <ul>
                        {courses.length === 0 ? <li>No courses.</li> : courses.map(({
                                                                                        dept,
                                                                                        number,
                                                                                        name,
                                                                                        reason
                                                                                    }, index) => <li
                            key={index}><strong>{dept}-{number} {divider} {name}</strong>: {reason}</li>)}
                    </ul>
                </li>
            </ul>
        </section>
        {/*<section>*/}
        {/*    <h2>Code</h2>*/}
        {/*    <CodeHighlight>*/}
        {/*        {`<h3>${firstName}</h3>\n` +*/}
        {/*            "  <figure>\n" +*/}
        {/*            "    <img\n" +*/}
        {/*            `      alt=\"${imageCaption}\"\n` +*/}
        {/*            `      src=\"${image}\"\n` +*/}
        {/*            "    />\n" +*/}
        {/*            "    <figcaption>\n" +*/}
        {/*            `      ${imageCaption}\n` +*/}
        {/*            "    </figcaption>\n" +*/}
        {/*            "  </figure>\n" +*/}
        {/*            "\n" +*/}
        {/*            "  <ul>\n" +*/}
        {/*            "    <li>\n" +*/}
        {/*            "      <strong>Personal Background: </strong>\n" +*/}
        {/*            `      ${personalBackground}\n` +*/}
        {/*            "    </li>\n" +*/}
        {/*            "    <li>\n" +*/}
        {/*            "      <strong>Professional Background: </strong>\n" +*/}
        {/*            `${professionalBackground}\n` +*/}
        {/*            "    </li>\n" +*/}
        {/*            "    <li>\n" +*/}
        {/*            "      <strong>Academic Background: </strong>\n" +*/}
        {/*            `${academicBackground}\n` +*/}
        {/*            "    </li>\n" +*/}
        {/*            "    <li>\n" +*/}
        {/*            "      <strong>Primary Computer: </strong>\n" +*/}
        {/*            `${primaryComputer}\n` +*/}
        {/*            "    </li>\n" +*/}
        {/*            "    <li>\n" +*/}
        {/*            "      <strong>Courses:</strong>\n" +*/}
        {/*            "      <ul>\n" +*/}
        {/*            courses.map(({firstName, reason}) => `        <li><strong>${firstName}</strong>: ${reason}</li>\n`).join("") +*/}
        {/*            "      </ul>\n" +*/}
        {/*            "    </li>\n" +*/}
        {/*            "  </ul>\n"}*/}
        {/*    </CodeHighlight>*/}
        {/*</section>*/}
    </>
}
